import React, { useState } from 'react';

const Video = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Load Video</button>
      {isVideoVisible && (
        <video controls width="400" height="300">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Video;
