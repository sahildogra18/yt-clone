import React, { useState } from "react";
import Sidebar from "../../COmponents/Navbar/sidebar/Sidebar";
import Feed from "../../COmponents/Navbar/Feed/Feed";

function Home({ sidebar }) {
  let [category, setCategory] = useState(0);

  return (
    <div className="flex">
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <Feed category={category} />
    </div>
  );
}

export default Home;
