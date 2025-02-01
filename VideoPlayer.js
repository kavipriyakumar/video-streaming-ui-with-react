import React from 'react';

const VideoPlayer = ({ video, handleReset }) => (
  <div className="video-player">
    <video controls>
      <source src={video.file} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div style={{ marginTop: '20px' }}>
      <button onClick={handleReset}>Back to List</button>
    </div>
  </div>
);

export default VideoPlayer;
