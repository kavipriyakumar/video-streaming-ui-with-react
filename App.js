// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [videoId, setVideoId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

//   const videos = [
//     { id: 1, title: " React", file: "/video1.mp4" },
//     { id: 2, title: " Node", file: "/video1.mp4" },
//     { id: 3, title: " Express", file: "/video1.mp4" },
//     { id: 4, title: " Mongodb", file: "/video1.mp4" },
//   ];

//   // Filter videos based on the search term
//   const filteredVideos = videos.filter((video) =>
//     video.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleVideoSelect = (id) => {
//     setVideoId(id);
//   };

//   const handleReset = () => {
//     setVideoId(null);
//   };

//   return (
//     <div className="app">
//       <h1>Video Streaming App</h1>

//       {/* Search bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for a video..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Video list */}
//       {!videoId && (
//         <div className="video-list">
//           {filteredVideos.length > 0 ? (
//             filteredVideos.map((video) => (
//               <div
//                 key={video.id}
//                 className="video-card"
//                 onClick={() => handleVideoSelect(video.id)}
//               >
//                 <h3>{video.title}</h3>
//                 <p>Click to watch</p>
//               </div>
//             ))
//           ) : (
//             <p>No videos found</p>
//           )}
//         </div>
//       )}

//       {/* Video player */}
//       {videoId && (
//         <div className="video-player">
//           <video controls>
//             <source
//               src={videos.find((video) => video.id === videoId).file}
//               type="video/mp4"
//             />
//             Your browser does not support the video tag.
//           </video>
//           <div style={{ marginTop: "20px" }}>
//             <button onClick={handleReset}>Back to List</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;
