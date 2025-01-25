import React, { useState } from "react";
import thumbnail1 from "../../../assets/thumbnail1.png";
import thumbnail2 from "../../../assets/thumbnail2.png";
import thumbnail3 from "../../../assets/thumbnail3.png";
import thumbnail4 from "../../../assets/thumbnail4.png";
import thumbnail5 from "../../../assets/thumbnail5.png";
import thumbnail6 from "../../../assets/thumbnail6.png";
import thumbnail7 from "../../../assets/thumbnail7.png";
import thumbnail8 from "../../../assets/thumbnail8.png";
import axios from "axios";
import { API_Key, value_Convertor } from "../../../data";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Recommended({ categoryId }) {
  let [apiData, setApiData] = useState([]);

  async function fetchData() {
    axios
      .get(
        ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=11&regionCode=US&videoCategoryId=${categoryId}&key=${API_Key}`
      )
      .then((response) => {
        setApiData(response.data.items);
        console.log(response.data.items);
        // console.log(response.data.items);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended flex flex-col gap-3 mt-[25px]">
      {apiData.map((item, id) => {
        return (
          <>
            <Link
              to={`/video/${item.snippet.categoryId}/${item.id}`}
              className="side-video-list flex  mb-[8px]  gap-4"
            >
              <img
                className="w-[308px]"
                src={item.snippet.thumbnails.high.url}
                alt=""
              />
              <div className="vid-info  ">
                <h4 className="text-[15px] mb-[5px] font-bold mt-8  ">
                  {item.snippet.title}
                </h4>
                <p>{item.snippet.channelTitle}</p>
                <p> {value_Convertor(item.statistics.viewCount)} views</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Recommended;
