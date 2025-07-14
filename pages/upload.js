import { useState } from 'react';

export default function UploadPage() {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!videoFile) return alert('No video file selected');

    setUploadStatus('Requesting upload URL...');

    const res = await fetch('/api/mux-upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });

    const data = await res.json();

    if (!data.url) {
      setUploadStatus('Failed to get upload URL');
      return;
    }

    setUploadStatus('Uploading...');

    const upload = await fetch(data.url, {
      method: 'PUT',
      body: videoFile,
    });

    if (upload.ok) {
      setUploadStatus('Upload complete!');
    } else {
      setUploadStatus('Upload failed');
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Upload Legacy Video</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <br /><br />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>
    </div>
  );
}
