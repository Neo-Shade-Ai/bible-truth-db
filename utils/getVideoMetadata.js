import metadata from '../bible-truth-db/video_metadata.json';

export function getVideoMetadata(videoId) {
  return metadata.find((video) => video.videoId === videoId);
}
