import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import projectImage from "../assets/images/project-img1.jpg";
import plusImg from "../assets/images/plus.png";
import createAxiosInstance from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import profileImg from "./../assets/images/profile-img.png";
import Header from "../components/Header";

const Home = () => {
  const nevigateTo = useNavigate();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nevigateTo("/");
    }

    const fetchData = async () => {
      try {
        const instance = createAxiosInstance();

        const response = await instance.get("project/getproject");
        const projectData = response.data.data;
        console.log(projectData);
        setProjectData(projectData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/home");
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="bg-[#17181F] flex">
      <Sidebar />
      <div className="home-main">
        {/* search and profile section */}
        <Header />
        {/* name and project details */}
        <div className=" gap-2.5 justify-between items-end px-5 max-md:flex-wrap np-custom">
          <div className="flex">
            <div className="flex gap-1 self-stretch">
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                <div className="text-xl font-medium text-white">
                  Hello, Sachin Potdar
                </div>
                <div className="flex gap-5 mt-6">
                  <div className="grow my-auto text-xs font-medium text-zinc-300">
                    Today you have{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex gap-2.5 mt-12 max-md:mt-10">
                <div className="justify-center items-center px-4 w-11 h-11 text-xl text-white whitespace-nowrap bg-indigo-600 rounded-3xl">
                  <p className="mt-2">0</p>
                </div>
                <div className="my-auto text-sm font-semibold	 leading-4 text-zinc-300">
                  Open
                  <br />
                  <span className="text-xs leading-3">Projects</span>
                </div>
              </div>
              <div className="flex gap-2.5 mt-12 max-md:mt-10">
                <div className="justify-center items-center px-4 w-11 h-11 text-xl text-white whitespace-nowrap bg-orange-500 rounded-3xl">
                  <p className="mt-2">0</p>
                </div>
                <div className="my-auto text-sm font-semibold	 leading-4 text-zinc-300">
                  On-going
                  <br />
                  <span className="text-xs leading-3">Projects</span>
                </div>
              </div>
              <div className="flex gap-2.5 mt-12 max-md:mt-10">
                <div className="justify-center items-center px-4 w-11 h-11 text-xl text-white whitespace-nowrap bg-green-600 rounded-3xl">
                  <p className="mt-2">0</p>
                </div>
                <div className="my-auto text-sm font-semibold	 leading-4 text-zinc-300">
                  Completed
                  <br />
                  <span className="text-xs leading-3">Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* porjects bar */}
          <div className="flex gap-4 px-1 text-base font-medium whitespace-nowrap text-zinc-300 mt-12">
            <div className="text-xs justify-center px-2 py-1 rounded-3xl border-2 border-solid border-zinc-800">
              Tasks
            </div>
            <div className="text-xs justify-center px-2 py-1 rounded-3xl border-2 border-solid bg-zinc-800 border-zinc-800">
              Upcoming
            </div>
            <div className="text-xs justify-center px-2 py-1 rounded-3xl border-2 border-solid border-zinc-800">
              Completed
            </div>
          </div>
        </div>

        {/*  Project list */}
        <div className="mt-6 ml-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projectData.map((element) => {
            const createdAt = new Date(element.m_project_created_at);
            const month = createdAt.toLocaleString("default", {
              month: "long",
            });
            const date = createdAt.getDate();
            let barColor = "";
            if (element.m_project_status === "open") {
              barColor = "bg-indigo-600";
            } else if (element.m_project_status === "ongoing") {
              barColor = "bg-orange-500";
            } else if (element.m_project_status === "done") {
              barColor = "bg-green-600";
            }

            return (
              <div key={element.m_project_id}>
                <div className="flex gap-5 justify-between py-0.5 pl-5 rounded-2xl bg-zinc-800 w-[300px] h-[47px]">
                  <div className="flex gap-5 my-auto text-base font-medium">
                    <div className="flex-auto my-auto text-zinc-300">
                      DOCS UPLOAD
                    </div>
                    <div className="justify-center items-center text-center text-white whitespace-nowrap bg-indigo-500 rounded-xl h-[27px] w-[27px]">
                      <p>1</p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-center ">
                    <div className="shrink-0 self-stretch w-1 bg-indigo-500 h-[35px] rounded-sm  ml-[-5px] my-auto"></div>
                  </div>
                </div>
                <div className="flex flex-col px-4 py-5 rounded-2xl bg-zinc-800 w-[300px] mt-4">
                  <div className="flex gap-5 justify-between">
                    <div
                      className={`shrink-0 ${barColor} rounded-xl h-[23px] w-[86px]`}
                    />
                    <div className="text-lg font-medium text-zinc-300">
                      {month} {date}
                    </div>
                  </div>
                  <div className="mt-7 text-lg font-medium text-zinc-300">
                    {element.m_project_name}
                  </div>
                  <img
                    loading="lazy"
                    src={element.m_project_image_url_1}
                    className="mt-4 w-full aspect-[1.85] rounded-xl object-cover"
                  />
                </div>
              </div>
            );
          })}

          <div>
            <div className="flex gap-5 justify-between py-0.5 pl-5 rounded-2xl bg-zinc-800 w-[300px] h-[47px]">
              <div className="flex gap-5 my-auto text-base font-medium">
                <div className="flex-auto my-auto text-zinc-300">
                  DOCS UPLOAD
                </div>
                <div className="justify-center items-center text-center text-white whitespace-nowrap bg-indigo-500 rounded-xl h-[27px] w-[27px]">
                  <p>1</p>
                </div>
              </div>
              <div className="flex gap-3.5 items-center ">
                <div className="shrink-0 self-stretch w-1 bg-indigo-500 h-[35px] rounded-sm  ml-[-5px] my-auto"></div>
              </div>
            </div>
            <div className="flex flex-col px-4 py-5 rounded-2xl bg-zinc-800 w-[300px] mt-4">
              <div className="flex gap-5 justify-between">
                <div className="shrink-0 bg-indigo-500 rounded-xl h-[23px] w-[86px]" />
                <div className="text-lg font-medium text-zinc-300">
                  April 10
                </div>
              </div>
              <div className="mt-7 text-lg font-medium text-zinc-300">
                Thane Society
              </div>
              <img
                loading="lazy"
                src={projectImage}
                className="mt-4 w-full aspect-[1.85] rounded-xl object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex gap-5 justify-between py-0.5 pl-5 rounded-2xl bg-zinc-800 w-[300px] h-[47px]">
              <div className="flex gap-5 my-auto text-base font-medium">
                <div className="flex-auto my-auto text-zinc-300">
                  DOCS UPLOAD
                </div>
                <div className="justify-center items-center text-center text-white whitespace-nowrap bg-indigo-500 rounded-xl h-[27px] w-[27px]">
                  <p>1</p>
                </div>
              </div>
              <div className="flex gap-3.5 items-center ">
                <div className="shrink-0 self-stretch w-1 bg-indigo-500 h-[35px] rounded-sm  ml-[-5px] my-auto"></div>
              </div>
            </div>
            <div className="flex flex-col px-4 py-5 rounded-2xl bg-zinc-800 w-[300px] mt-4">
              <div className="flex gap-5 justify-between">
                <div className="shrink-0 bg-indigo-500 rounded-xl h-[23px] w-[86px]" />
                <div className="text-lg font-medium text-zinc-300">
                  April 10
                </div>
              </div>
              <div className="mt-7 text-lg font-medium text-zinc-300">
                Thane Society
              </div>
              <img
                loading="lazy"
                src={projectImage}
                className="mt-4 w-full aspect-[1.85] rounded-xl object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex gap-5 justify-between py-0.5 pl-5 rounded-2xl bg-zinc-800 w-[300px] h-[47px]">
              <div className="flex gap-5 my-auto text-base font-medium">
                <div className="flex-auto my-auto text-zinc-300">
                  DOCS UPLOAD
                </div>
                <div className="justify-center items-center text-center text-white whitespace-nowrap bg-indigo-500 rounded-xl h-[27px] w-[27px]">
                  <p>1</p>
                </div>
              </div>
              <div className="flex gap-3.5 items-center ">
                <div className="shrink-0 self-stretch w-1 bg-indigo-500 h-[35px] rounded-sm  ml-[-5px] my-auto"></div>
              </div>
            </div>
            <div className="flex flex-col px-4 py-5 rounded-2xl bg-zinc-800 w-[300px] mt-4">
              <div className="flex gap-5 justify-between">
                <div className="shrink-0 bg-indigo-500 rounded-xl h-[23px] w-[86px]" />
                <div className="text-lg font-medium text-zinc-300">
                  April 10
                </div>
              </div>
              <div className="mt-7 text-lg font-medium text-zinc-300">
                Thane Society
              </div>
              <img
                loading="lazy"
                src={projectImage}
                className="mt-4 w-full aspect-[1.85] rounded-xl object-cover"
              />
            </div>
          </div>
          {/* Add button */}
          <div>
            <div className="flex gap-5 justify-between py-0.5 pl-5 rounded-2xl bg-zinc-800 w-[300px] h-[47px]">
              <div className="flex gap-5 my-auto text-base font-medium">
                <div className="flex-auto my-auto text-zinc-300">
                  DOCS UPLOAD
                </div>
                <div className="justify-center items-center text-center text-white whitespace-nowrap bg-white rounded-xl h-[27px] w-[27px]">
                  <p>1</p>
                </div>
              </div>
              <div className="flex gap-3.5 items-center ">
                <div className="shrink-0 self-stretch w-1 bg-white h-[35px] rounded-sm  ml-[-5px] my-auto"></div>
              </div>
            </div>
            <div
              className="flex gap-5 justify-between items-start px-4  mt-4 pt-5 pb-14 rounded-2xl bg-zinc-800 w-[300px] cursor-pointer"
              onClick={() => {
                nevigateTo("/addproject");
              }}
            >
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <div className="shrink-0 bg-white rounded-xl h-[23px] w-[86px]" />
                  <div className="text-lg font-medium text-zinc-300">
                    April 10
                  </div>
                </div>
                <div className="flex gap-0 self-end mt-7 w-[34px] mx-auto">
                  <img
                    className="shrink-0 w-full bg-opacity-70 h-[34px] mx-auto"
                    src={plusImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
