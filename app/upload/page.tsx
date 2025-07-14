'use client';

import { useEffect, useState } from 'react';
import MuxUploader from '@mux/mux-uploader-react';
import '@mux/mux-uploader-react/dist/mux-uploader.css';

export default function UploadPage() {
  const [uploadUrl, setUploadUrl] = useState('');

  useEffect(() => {
    const fetchUploadUrl = async () => {
      const res = await fetch('/api/create-upload');
      const data = await res.json();
      setUploadUrl(data.url);
    };

    fetchUploadUrl();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Upload a Legacy Video</h1>
      {uploadUrl ? (
        <MuxUploader
          endpoint={uploadUrl}
          style={{ width: '100%', maxWidth: 500 }}
        />
      ) : (
        <p>Loading upload URL...</p>
      )}
    </div>
  );
}
