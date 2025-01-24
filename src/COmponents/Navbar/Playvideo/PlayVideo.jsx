import React, { useEffect, useState } from "react";
import video1 from "../../../assets/video.mp4";
import like from "../../../assets/like.png";
import dislike from "../../../assets/dislike.png";
import share from "../../../assets/share.png";
import save from "../../../assets/save.png";
import jack from "../../../assets/jack.png";
import user_profile from "../../../assets/user_profile.jpg";
import axios from "axios";
import { API_Key, value_Convertor } from "../../../data";
import moment from "moment";

function PlayVideo({ videoId }) {
  const [apiData, setApiData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  async function fetchVideoData() {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_Key}`
      );
      setApiData(response.data.items[0]);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  }

  async function fetchComments() {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_Key}`
      );
      setCommentData(response.data.items);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchComments();
  }, [apiData]);

  if (!apiData) {
    return <div className="text-center text-white">Loading video data...</div>;
  }

  return (
    <div className="play-video px-4 py-6 w-[1000px]">
      {/* Video Section */}
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h2 className="font-bold mt-4 text-xl text-white">
        {apiData.snippet.title}
      </h2>

      {/* Video Info */}
      <div className="play-video-info flex items-center justify-between flex-wrap mt-3 text-sm px-4 text-white">
        <p>
          {value_Convertor(apiData.statistics.viewCount)} views &bull;{" "}
          {moment(apiData.snippet.publishedAt).fromNow()}
        </p>
      </div>

      <hr className="my-4" />

      {/* Comments Section */}
      <div className="video-description px-4 my-4">
        <h4 className="text-sm text-white font-bold">Comments</h4>
        {commentData.length === 0 ? (
          <p className="text-sm text-gray-400">No comments available.</p>
        ) : (
          commentData.map((item, id) => {
            const comment = item.snippet.topLevelComment.snippet;
            return (
              <div key={id} className="comment flex items-start my-4">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={comment.authorProfileImageUrl}
                  alt={comment.authorDisplayName}
                />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {comment.authorDisplayName}
                    <span className="text-xs text-gray-500 ml-2">
                      {moment(comment.publishedAt).fromNow()}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-300">{comment.textDisplay}</p>
                  <div className="flex items-center text-sm gap-2 mt-2">
                    <img className="w-5" src={like} alt="Like" />
                    <span>{value_Convertor(comment.likeCount)}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default PlayVideo;
