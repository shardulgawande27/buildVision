import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AllMembers = () => {
  return (
    <div className="bg-[#17181F] flex">
      <Sidebar />
      <div className="home-main">
        {/* search and profile section */}
        <Header />
        <div className="mt-12 ml-7">
          <div className="page-heading text-3xl text-white font-semibold  ">
            All Members
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMembers;
