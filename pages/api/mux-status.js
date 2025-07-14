import Mux from '@mux/mux-node';

const { MUX_TOKEN_ID, MUX_TOKEN_SECRET } = process.env;

const mux = new Mux({
  tokenId: MUX_TOKEN_ID,
  tokenSecret: MUX_TOKEN_SECRET,
});

export default async function handler(req, res) {
  const { assetId } = req.query;

  if (!assetId) {
    return res.status(400).json({ error: 'Missing asset ID' });
  }

  try {
    const asset = await mux.video.assets.retrieve(assetId);

    res.status(200).json({
      status: asset.status,
      playbackId: asset.playback_ids?.[0]?.id || null,
      created_at: asset.created_at,
      passthrough: asset.passthrough,
    });
  } catch (error) {
    console.error('Mux Status Error:', error);
    res.status(500).json({ error: 'Failed to fetch asset status' });
  }
}
