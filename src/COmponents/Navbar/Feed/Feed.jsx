import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_Key, value_Convertor } from "../../../data";
import moment from "moment";

function Feed({ category }) {
  const [data, setData] = useState([]);

  function fetchData() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_Key}`
      )
      .then((response) => {
        setData(response.data.items);
        console.log(response.data.items);
      });
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 bg-[#0f0f0f] pt-4 text-white">
      {data.map((item) => (
        <Link
          key={item.id}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card bg-[#1c1c1c] p-4 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <img
            className="w-full h-[180px] rounded-xl object-cover"
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
          <h2 className="mt-2 text-lg font-bold text-white line-clamp-2">
            {item.snippet.title}
          </h2>
          <h3 className="text-sm text-gray-400 mt-1">
            {item.snippet.channelTitle}
          </h3>
          <p className="text-sm text-gray-500 mt-1 pl-4">
            {value_Convertor(item.statistics.viewCount)} views &bull;
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
