import { useRouter } from 'next/router';
import { getVideoMetadata } from '../../utils/getVideoMetadata';
import dynamic from 'next/dynamic';

const MuxPlayer = dynamic(() => import('@mux/mux-player-react'), { ssr: false });

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;

  const metadata = getVideoMetadata(id);

  if (!metadata) return <p>Video not found.</p>;

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>{metadata.title || 'Legacy Video'}</h1>
      <MuxPlayer
        playbackId={metadata.playbackId}
        streamType="on-demand"
        autoPlay
        style={{ width: '100%', maxWidth: '720px', borderRadius: '12px', marginTop: '20px' }}
      />
      <p style={{ marginTop: '10px', color: '#666' }}>{metadata.description || ''}</p>
    </div>
  );
}
