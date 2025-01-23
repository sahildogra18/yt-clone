import React from "react";

import home from "../../../assets/home.png";
import game_icon from "../../../assets/game_icon.png";
import automobiles from "../../../assets/automobiles.png";
import sports from "../../../assets/sports.png";
import entertainment from "../../../assets/entertainment.png";
import tech from "../../../assets/tech.png";
import music from "../../../assets/music.png";
import blogs from "../../../assets/blogs.png";
import news from "../../../assets/news.png";
import jack from "../../../assets/jack.png";
import simon from "../../../assets/simon.png";
import tom from "../../../assets/tom.png";
import megan from "../../../assets/megan.png";
import cameron from "../../../assets/cameron.png";

function Sidebar({ sidebar, category, setCategory }) {
  return (
    <div
      className={`sidebar w-[160px] bg-[#0f0f0f] flex flex-col gap-6 text-white h-[680px ]   ${
        sidebar ? "" : "small-sidebar"
      }`}
    >
      {/* Shortcut Links */}
      <div className="shortcut-links flex flex-col gap-4 p-4  ">
        <div
          className={`side-links flex gap-2 items-center  ${
            category === 0 ? "active" : ""
          }  `}
          onClick={() => {
            setCategory(0);
          }}
        >
          <img className="w-6" src={home} alt="Home" />
          <p>Home</p>
        </div>

        <div
          className={`side-links flex gap-2 items-center  ${
            category === 20 ? "active" : ""
          }  `}
        >
          <img
            className="w-6"
            src={game_icon}
            alt="Gaming"
            onClick={() => {
              setCategory(20);
            }}
          />
          <p>Gaming</p>
        </div>

        <div
          className={`side-links flex gap-2 items-center  ${
            category === 2 ? "active" : ""
          }  `}
          onClick={() => {
            setCategory(2);
          }}
        >
          <img className="w-6" src={automobiles} alt="Automobiles" />
          <p>Automobiles</p>
        </div>

        <div
          className={`side-links flex gap-2 items-center  ${
            category === 17 ? "active" : ""
          }  `}
          onClick={() => {
            setCategory(17);
          }}
        >
          <img className="w-6" src={sports} alt="Sports" />
          <p>Sports</p>
        </div>

        <div
          className={`side-links flex gap-2 items-center  ${
            category === 24 ? "active" : ""
          }  `}
          onClick={() => {
            setCategory(24);
          }}
        >
          <img className="w-6" src={entertainment} alt="Entertainment" />
          <p>Entertainment</p>
        </div>

        <div
          className={`side-links flex gap-2 items-center  ${
            category === 28 ? "active" : ""
          }  `}
          onClick={() => {
            setCategory(28);
          }}
        >
          <img className="w-6" src={tech} alt="Technology" />
          <p>Technology</p>
        </div>

        <div
          className={`side-links flex gap-2 items-center  ${
            category === 10 ? "active" : ""
          }  `}
          onClick={() => {
            setCategory(10);
          }}
        >
          <img className="w-6" src={music} alt="Music" />
          <p>Music</p>
        </div>

        <div
          className={`side-links flex gap-2 items-center  ${
            category === 22 ? "active" : ""
          }  `}
          onClick={() => {
            setCategory(22);
          }}
        >
          <img className="w-6" src={blogs} alt="Blogs" />
          <p>Blogs</p>
        </div>

        <div
          className={`side-links flex gap-2 items-center  ${
            category === 25 ? "active" : ""
          }  `}
          onClick={() => {
            setCategory(25);
          }}
        >
          <img className="w-6" src={news} alt="News" />
          <p>News</p>
        </div>
      </div>

      {/* User Section */}
      <div className="user-links flex flex-col gap-4 p-4 ">
        <div className="side-links flex gap-2 items-center">
          <img className="w-8 h-8 rounded-full" src={jack} alt="Jack" />
          <p>Jack</p>
        </div>

        <div className="side-links flex gap-2 items-center">
          <img className="w-8 h-8 rounded-full" src={simon} alt="Simon" />
          <p>Simon</p>
        </div>

        <div className="side-links flex gap-2 items-center">
          <img className="w-8 h-8 rounded-full" src={tom} alt="Tom" />
          <p>Tom</p>
        </div>

        <div className="side-links flex gap-2 items-center">
          <img className="w-8 h-8 rounded-full" src={megan} alt="Megan" />
          <p>Megan</p>
        </div>

        <div className="side-links flex gap-2 items-center">
          <img className="w-8 h-8 rounded-full" src={cameron} alt="Cameron" />
          <p>Cameron</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
