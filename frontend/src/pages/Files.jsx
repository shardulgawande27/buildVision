import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import tenderDoc from "../assets/images/tender-doc-img.webp";
import plusImg from "../assets/images/plus.png";

const Files = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className="bg-[#17181F] flex">
      <Sidebar />
      <div className="home-main">
        {/* search and profile section */}
        <Header />
        <div className="mt-12 ml-7">
          <div className="page-heading text-3xl text-white font-semibold  ">
            My Files
          </div>
          <div className="files grid grid-cols-3 gap-4">
            {arr.map((index) => {
              return (
                <div
                  className="bg-zinc-800 rounded-lg shadow-lg p-4 w-96 mt-6 cursor-pointer"
                  key={index}
                >
                  <div className="bg-gray-100 rounded-lg h-52 overflow-hidden">
                    <img
                      src={tenderDoc}
                      alt="Dashboard"
                      className="rounded-lg w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-1 mt-3">
                    <div className="flex items-center">
                      <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                        {/* <img
                        src="https://via.placeholder.com/20"
                        alt="icon"
                        className="w-4 h-4"
                      /> */}
                      </div>
                      <span className="ml-2 text-lg font-semibold text-white">
                        Dashboard.png
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-zinc-800 rounded-lg shadow-lg p-4 w-96 mt-6 cursor-pointer">
              <div className="bg-transparent rounded-lg h-52 overflow-hidden flex justify-center">
                <img
                  src={plusImg}
                  alt="Dashboard"
                  className="rounded-lg w-[20%] my-auto object-contain m-auto "
                />
              </div>
              <div className="flex items-center justify-between mb-1 mt-3">
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                    {/* <img
                        src="https://via.placeholder.com/20"
                        alt="icon"
                        className="w-4 h-4"
                      /> */}
                  </div>
                  <span className="ml-2 text-lg font-semibold text-white">
                    Upload File
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
