import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./COmponents/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";

function App() {
  let [sidebar, setSideBar] = useState(true);
  return (
    <>
      <Navbar setSideBar={setSideBar} />

      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
