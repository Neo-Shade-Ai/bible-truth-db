import React from 'react';
import { getVideoMetadata } from '../utils/getVideoMetadata';

export default function VideoPlayer({ videoId }) {
  const video = getVideoMetadata(videoId);

  if (!video) {
    return <p>Video not found or not yet available.</p>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h3>{video.title}</h3>
      <p><strong>Tags:</strong> {video.tags.join(', ')}</p>
      <p><strong>Scheduled For:</strong> {video.deliveryDate}</p>
      <video
        width="100%"
        controls
        poster={video.thumbnailUrl || ''}
        src={video.fileUrl}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
