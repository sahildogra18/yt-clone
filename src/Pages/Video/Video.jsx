import React from "react";
import PlayVideo from "../../COmponents/Navbar/Playvideo/PlayVideo";
import Recommended from "../../COmponents/Navbar/recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  let { videoId, categoryId } = useParams();
  return (
    <div className="play-container    bg-[#0f0f0f] pt-[20px] pb-[20px] flex justify-start flex-wrap-reverse text-white">
      <PlayVideo videId={videoId} />
      <Recommended />
    </div>
  );
};

export default Video;
