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
  const [channelData, setChannelData] = useState(null);
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

  async function fetchChannelData() {
    try {
      if (apiData) {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_Key}`
        );
        setChannelData(response.data.items[0]);
      }
    } catch (error) {
      console.error("Error fetching channel data:", error);
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
    if (apiData) {
      fetchChannelData();
      fetchComments();
    }
  }, [apiData]);

  if (!apiData) {
    return <div className="text-center text-white">Loading video data...</div>;
  }

  return (
    <div className="play-video px-4 py-6 w-[1000px] mx-auto text-white">
      {/* Video Section */}
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {/* Video Title */}
      <h2 className="font-bold mt-4 text-xl">{apiData.snippet.title}</h2>

      {/* Video Info */}
      <div className="play-video-info flex justify-between mt-3 text-sm">
        <p>
          {value_Convertor(apiData.statistics.viewCount)} views &bull;{" "}
          {moment(apiData.snippet.publishedAt).fromNow()}
        </p>
        <div className="flex gap-4 items-center">
          <button className="flex items-center gap-2">
            <img className="w-8" src={like} alt="Like" />
            {value_Convertor(apiData.statistics.likeCount)}
          </button>
          <button className="flex items-center gap-2">
            <img className="w-8" src={dislike} alt="Dislike" />
            Dislike
          </button>
          <button className="flex items-center gap-2">
            <img className="w-8" src={share} alt="Share" />
            Share
          </button>
          <button className="flex items-center gap-2">
            <img className="w-8" src={save} alt="Save" />
            Save
          </button>
        </div>
      </div>

      <hr className="my-4" />

      {/* Publisher Section */}
      <div className="publisher flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full"
            src={apiData.snippet.thumbnails.default.url}
            alt={apiData.snippet.channelTitle}
          />
          <div>
            <h3 className="font-bold">{apiData.snippet.channelTitle}</h3>
            <p>
              {channelData
                ? `${value_Convertor(
                    channelData.statistics.subscriberCount
                  )} Subscribers`
                : "Loading subscribers..."}
            </p>
          </div>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md">
          Subscribe
        </button>
      </div>

      <hr className="my-4" />

      {/* Description */}
      <div className="video-description">
        <h4 className="font-bold text-lg">Description</h4>
        <p className="text-gray-300 mt-2">{apiData.snippet.description}</p>
      </div>

      <hr className="my-4" />

      {/* Comments Section */}
      <div>
        <h4 className="text-lg font-bold mb-4">
          Comments ({value_Convertor(apiData.statistics.commentCount)})
        </h4>
        {commentData.length === 0 ? (
          <p>No comments available.</p>
        ) : (
          commentData.map((item, id) => {
            const comment = item.snippet.topLevelComment.snippet;
            return (
              <div key={id} className="flex gap-4 mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={comment.authorProfileImageUrl}
                  alt={comment.authorDisplayName}
                />
                <div>
                  <h3 className="font-bold text-sm">
                    {comment.authorDisplayName}
                    <span className="text-gray-500 ml-2 text-xs">
                      {moment(comment.publishedAt).fromNow()}
                    </span>
                  </h3>
                  <p className="text-gray-300">{comment.textDisplay}</p>
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
