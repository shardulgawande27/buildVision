import React, { useState, useEffect } from "react";
import logo from "./../assets/images/Logo.png";
import folderIcon from "./../assets/images/folder-solid.svg";
import { FaFolder } from "react-icons/fa";
import { RiProgress5Fill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
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
      case "/task":
        setBtnActive(3);
        break;
      case "/labourdetails":
        setBtnActive(4);
        break;
      case "/allmembers":
        setBtnActive(5);
        break;
      default:
        console.log("Error");
        break;
    }
  }, [location.pathname]);

  const handleButtonClick = (index, path) => {
    setBtnActive(index);
    navigateTo(path);
  };

  return (
    <div className="sticky top-0 left-0 w-[15%] h-screen">
      <div className="flex gap-4 text-xs font-medium text-white h-screen">
        <div className="flex flex-col self-start  px-5 border-r-2 border-zinc-800 h-screen w-[100%]">
          {/* logo */}
          <div className="flex justify-center gap-6 mt-4 items-center">
            <img src={logo} alt="" />
            <p className="text-xl">Logo</p>
          </div>

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
                  value={{
                    className: `text-3xl  ${
                      btnActive === 1 ? "text-white" : "text-[#828388]"
                    }  }`,
                  }}
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
                  value={{
                    className: `text-3xl  ${
                      btnActive === 2 ? "text-white" : "text-[#828388]"
                    }  }`,
                  }}
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
                handleButtonClick(3, "/task");
              }}
            >
              <div className="text-white">
                <IconContext.Provider
                  value={{
                    className: `text-3xl  ${
                      btnActive === 3 ? "text-white" : "text-[#828388]"
                    }  }`,
                  }}
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
                handleButtonClick(4, "/labourdetails  ");
              }}
            >
              <div className="text-white">
                <IconContext.Provider
                  value={{
                    className: `text-3xl  ${
                      btnActive === 4 ? "text-white" : "text-[#828388]"
                    }  }`,
                  }}
                >
                  <FaMoneyBill />
                </IconContext.Provider>
              </div>
              <div className="flex-auto self-start">Wage Management</div>
            </div>
            <div
              className={`flex gap-4 cursor-pointer mt-10 px-5 py-4 rounded-xl whitespace-wrap text-sm w-[100%] 
               ${
                 btnActive === 5 ? "text-white bg-zinc-800" : " text-zinc-500"
               }`}
              onClick={() => {
                handleButtonClick(5, "/allmembers  ");
              }}
            >
              <div className="text-white">
                <IconContext.Provider
                  value={{
                    className: `text-3xl  ${
                      btnActive === 5 ? "text-white" : "text-[#828388]"
                    }  }`,
                  }}
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
