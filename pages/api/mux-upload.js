import Mux from '@mux/mux-node';

const { MUX_TOKEN_ID, MUX_TOKEN_SECRET } = process.env;

const mux = new Mux({
  tokenId: MUX_TOKEN_ID,
  tokenSecret: MUX_TOKEN_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { title, description } = req.body;

    const upload = await mux.video.uploads.create({
      new_asset_settings: {
        playback_policy: ['public'],
        passthrough: JSON.stringify({ title, description }),
      },
      cors_origin: 'https://your-app.com', // ✅ Update this in production
    });

    res.status(200).json({ url: upload.url, id: upload.id });
  } catch (error) {
    console.error('Mux Upload Error:', error);
    res.status(500).json({ error: 'Mux upload failed' });
  }
}
