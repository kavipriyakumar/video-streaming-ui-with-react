import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import VideoCard from '../components/VideoCard';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {
  const [videos] = useState([
    { id: 1, title: 'React', description: 'Lets learn React..', file: '/video1.mp4' },
    { id: 2, title: 'Node', description: 'Lets learn Node..', file: '/video1.mp4' },
    { id: 2, title: 'Express', description: 'Lets learn Express..', file: '/video1.mp4' },
    { id: 2, title: 'Mongodb', description: 'Lets learn Mongodb..', file: '/video1.mp4' },
  ]);
  const [videoId, setVideoId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedVideo = videos.find((video) => video.id === videoId);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {!videoId && (
        <div className="video-list">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} handleVideoSelect={setVideoId} />
            ))
          ) : (
            <p>No videos found</p>
          )}
        </div>
      )}
      {videoId && <VideoPlayer video={selectedVideo} handleReset={() => setVideoId(null)} />}
    </div>
  );
};

export default Home;
