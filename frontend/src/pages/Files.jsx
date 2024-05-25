import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Files = () => {
  return (
    <div className="bg-[#17181F] flex">
      <Sidebar />
      <div className="home-main">
        {/* search and profile section */}
        <Header />
      </div>
    </div>
  );
};

export default Files;
