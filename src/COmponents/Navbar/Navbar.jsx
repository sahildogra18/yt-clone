import React from "react";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/f31aea15e6088d3fa68d4022f3d6097a-removebg-preview.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

function Navbar({ setSideBar }) {
  return (
    <nav className=" nav-left flex justify-between bg-[#0f0f0f] items-center text-white px-[3.75rem] h-16 ">
      <div className="flex items-center gap-2 ">
        <div>
          <img
            className="w-7 fill-white"
            src={menu_icon}
            onClick={() => {
              setSideBar((prev) => (prev === false ? true : false));
            }}
            alt=""
          />
        </div>
        <Link to={"/"}>
          <div>
            <img className="fill-white w-20" src={logo} alt="" />
          </div>
        </Link>
      </div>

      <div className="nav-middle flex items-center gap-2">
        <div>
          <input
            className="w-[800px] py-3 rounded-3xl bg-[#121212] border-solid border-2 border-l-white placeholder: px-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-right flex items-center gap-4">
        <div>
          <img className="w-8" src={upload_icon} alt="" />
        </div>
        <div>
          <img className="w-8" src={more_icon} alt="" />
        </div>
        <div>
          <img className="w-8" src={notification_icon} alt="" />
        </div>
        <div>
          <img className="w-8 rounded-full" src={profile_icon} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
