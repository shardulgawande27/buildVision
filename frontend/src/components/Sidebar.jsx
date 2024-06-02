import React, { useState, useEffect } from "react";
import logo from "./../assets/images/Logo.png";
import folderIcon from "./../assets/images/folder-solid.svg";
import { FaFolder } from "react-icons/fa";
import { RiProgress5Fill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";
import { MdDashboard } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const [btnActive, setBtnActive] = useState(1);
  useEffect(() => {
    // Update the active button based on the current path
    switch (location.pathname) {
      case "/home":
        setBtnActive(1);
        break;
      case "/files":
        setBtnActive(2);
        break;
      case "/files1":
        setBtnActive(3);
        break;
      case "/file":
        setBtnActive(4);
        break;
      default:
        setBtnActive(1);
        break;
    }
  }, [location.pathname]);

  const handleButtonClick = (index, path) => {
    setBtnActive(index);
    navigateTo(path);
  };

  return (
    <div className="sticky top-0 left-0  w-[15%] h-screen">
      <div className="flex gap-4 text-xs font-medium text-white h-screen">
        <div className="flex flex-col self-start  px-5 border-r-2 border-zinc-800 h-screen w-[100%]">
          {/* logo */}
          <div className="flex justify-center gap-6 mt-4 items-center">
            <img src={logo} alt="" />
            <p className="text-xl">Logo</p>
          </div>
          {/* <div
            className={`flex gap-4 px-5 py-4 mt-12 whitespace-nowrap rounded-xl ${
              btnActive === 1 ? "text-white bg-zinc-800" : " text-zinc-500"
            } cursor-pointer`}
            onClick={() => handleButtonClick(1, "/home")}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="10"
                height="10"
                rx="2"
                stroke="#D3D3D6"
                stroke-width="2"
              />
              <rect
                x="14"
                y="1"
                width="10"
                height="10"
                rx="2"
                stroke="#D3D3D6"
                stroke-width="2"
              />
              <rect
                x="14"
                y="14"
                width="10"
                height="10"
                rx="2"
                stroke="#D3D3D6"
                stroke-width="2"
              />
              <rect
                x="1"
                y="14"
                width="10"
                height="10"
                rx="2"
                stroke="#D3D3D6"
                stroke-width="2"
              />
            </svg>

            <div className="flex-auto my-auto">Dashboard</div>
          </div> */}
          <div className="flex flex-col px-3 mt-8 ">
            <div
              className={`flex gap-4 cursor-pointer mt-12 px-5 py-4 rounded-xl whitespace-nowrap text-sm w-[100%] ${
                btnActive === 1 ? "text-white bg-zinc-800" : " text-zinc-500"
              }`}
              onClick={() => {
                handleButtonClick(1, "/home");
              }}
            >
              {/* <FontAwesomeIcon icon="fa-solid fa-folder" /> */}

              <div className="text-white">
                <IconContext.Provider
                  value={{ className: "text-3xl text-[#828388]" }}
                >
                  <MdDashboard />
                </IconContext.Provider>
              </div>

              <div className="flex-auto my-auto">Dashboard</div>
            </div>
            <div
              className={`flex gap-4 cursor-pointer mt-10 px-5 py-4 rounded-xl whitespace-nowrap text-sm w-[100%] ${
                btnActive === 2 ? "text-white bg-zinc-800" : " text-zinc-500"
              }`}
              onClick={() => {
                handleButtonClick(2, "/files");
              }}
            >
              {/* <FontAwesomeIcon icon="fa-solid fa-folder" /> */}
              <div className="text-white">
                <IconContext.Provider
                  value={{ className: "text-3xl text-[#828388]" }}
                >
                  <FaFolder />
                </IconContext.Provider>
              </div>

              <div className="flex-auto my-auto">My Files</div>
            </div>
            <div
              className={`flex gap-4 cursor-pointer mt-10 px-5 py-4 rounded-xl whitespace-nowrap text-sm w-[100%] ${
                btnActive === 3 ? "text-white bg-zinc-800" : " text-zinc-500"
              }`}
              onClick={() => {
                handleButtonClick(3, "/files");
              }}
            >
              <div className="text-white">
                <IconContext.Provider
                  value={{ className: "text-3xl text-[#828388]" }}
                >
                  <RiProgress5Fill />
                </IconContext.Provider>
              </div>
              <div className="flex-auto my-auto">Progress</div>
            </div>
            <div
              className={`flex gap-4 cursor-pointer mt-10 px-5 py-4 rounded-xl whitespace-wrap text-sm w-[100%] 
               ${
                 btnActive === 4 ? "text-white bg-zinc-800" : " text-zinc-500"
               }`}
              onClick={() => {
                handleButtonClick(4, "/files");
              }}
            >
              <div className="text-white">
                <IconContext.Provider
                  value={{ className: "text-3xl text-[#828388]" }}
                >
                  <FaPeopleGroup />
                </IconContext.Provider>
              </div>
              <div className="flex-auto self-start">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
