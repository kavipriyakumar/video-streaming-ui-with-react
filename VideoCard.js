import React from 'react';

const VideoCard = ({ video, handleVideoSelect }) => (
  <div className="video-card" onClick={() => handleVideoSelect(video.id)}>
    <h3>{video.title}</h3>
    <p>{video.description || 'Click to watch'}</p>
  </div>
);

export default VideoCard;
