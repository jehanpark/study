import React from "react";
import styled from "styled-components";
import { useRef } from "react";

const Wrapper = styled.div`
width: 168px;
height: 108px;
border:1px solid #ccc;
boder-radius: 8px;
overflow: hidden;
cursor: pointer;
position: relative;
`;
const VideoContent = styled.video`
position: adsolute;
top: 0;
left: 0;
width: 100%;
height: 100%
object-fit: cover;
opacity: 0;
transition: opacity 0.3s ease-in-out;
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  background: #000;
`;

const VideoList = ({ onClick, videoUrl, thumbnailUrl }) => {

  const videoRef = useRef();
  console.log(thumbnailUrl);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 1;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 0;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Wrapper onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <VideoContent ref={videoRef} src={videoUrl} muted />
      <ImageContent src={thumbnailUrl} alt="Thumbnail" />
    </Wrapper>
  );
};

export default VideoList;
