import React from "react";
import video1 from "../../../assets/video.mp4";
import like from "../../../assets/like.png";
import dislike from "../../../assets/dislike.png";
import share from "../../../assets/share.png";
import save from "../../../assets/save.png";
import jack from "../../../assets/jack.png";
import user_profile from "../../../assets/user_profile.jpg";

function PlayVideo() {
  const comments = [
    {
      id: 1,
      name: "Joe Goldberg",
      time: "1 day ago",
      text: "This is really informative",
      likes: 244,
    },
    {
      id: 2,
      name: "Emily Clark",
      time: "2 days ago",
      text: "Amazing content! Keep it up!",
      likes: 150,
    },
  ];

  return (
    <div className="play-video px-4 py-6">
      {/* Video Section */}
      <video
        className="w-full max-w-[1000px] mx-auto"
        src={video1}
        controls
        autoPlay
        muted
      ></video>
      <h2 className="font-bold mt-4 text-xl ">
        Best YouTube Channel to Learn Web Dev
      </h2>

      {/* Video Info */}
      <div className="play-video-info flex items-center justify-between flex-wrap mt-3 text-sm px-4">
        <p>1525 views &bull; 2 days ago</p>
        <div className="flex gap-4 items-center">
          <span className="flex items-center">
            <img className="w-8 mr-2" src={like} alt="Like" />
            <div>125</div>
          </span>
          <span className="flex items-center">
            <img className="w-8 mr-2" src={dislike} alt="Dislike" />
            <div>2</div>
          </span>
          <span className="flex items-center">
            <img className="w-8 mr-2" src={share} alt="Share" />
            <div>Share</div>
          </span>
          <span className="flex items-center">
            <img className="w-8 mr-2" src={save} alt="Save" />
            <div>Save</div>
          </span>
        </div>
      </div>

      <hr className="my-4" />

      {/* Publisher Section */}
      <div className="publisher flex items-center justify-between px-4">
        <div className="flex items-center">
          <img className="w-16 rounded-full mr-4" src={jack} alt="Publisher" />
          <div>
            <p className="text-lg font-bold">Easyycoding</p>
            <p className="text-sm text-gray-600">1M Subscribers</p>
          </div>
        </div>
        <button className="bg-red-600 text-white py-2 px-4 rounded-md">
          Subscribe
        </button>
      </div>

      {/* Video Description */}
      <div className="video-description px-4 my-4">
        <p className="text-sm text-gray-700">
          Channel makes learning easy. Subscribe to Easy Learning to watch more
          tutorials on web development.
        </p>
        <hr className="my-4" />
        <h4 className="text-sm text-gray-700 font-bold">130 Comments</h4>

        {/* Comments Section */}
        {comments.map((comment) => (
          <div key={comment.id} className="comment flex items-start my-4">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={user_profile}
              alt="User Profile"
            />
            <div>
              <h3 className="text-sm font-bold">
                {comment.name}{" "}
                <span className="text-xs text-gray-500 ml-2">
                  {comment.time}
                </span>
              </h3>
              <p className="text-sm text-gray-700">{comment.text}</p>
              <div className="flex items-center text-sm gap-2 mt-2">
                <img className="w-5" src={like} alt="Like" />
                <span>{comment.likes}</span>
                <img className="w-5" src={dislike} alt="Dislike" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayVideo;
