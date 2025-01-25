import React from "react";
import PlayVideo from "../../COmponents/Navbar/Playvideo/PlayVideo";
import Recommended from "../../COmponents/Navbar/recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  let { videoId, categoryId } = useParams();
  console.log(`video id ${videoId} , category ${categoryId}`);
  return (
    <div className="play-container bg-[#0f0f0f] pt-[20px] pb-[20px] flex flex-row gap-4 text-white">
      <PlayVideo videoId={videoId} className="flex-1" />
      <Recommended categoryId={categoryId} className="w-[350px]" />
    </div>
  );
};

export default Video;
