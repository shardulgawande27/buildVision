import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
1;
import searchImg from "../assets/images/search.png";
const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/home");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#17181F] flex">
      <Sidebar />
      <div className="home-main">
        {/* search section */}
        <div className="bg-transparent flex w-[600px] rounded-3xl border-solid border-[1px] items-center px-7 mt-5 ml-5">
          <input
            className="flex gap-5  py-3.5 text-sm font-medium  border-neutral-600  text-zinc-500 max-md:flex-wrap max-md:px-5 bg-transparent w-full outline-none"
            type="text"
            placeholder="Search task, project"
          />

          <a href="">
            <img src={searchImg} alt="" />
          </a>
        </div>

        {/* name and project details */}
        <div className="flex gap-2.5 justify-between items-end px-5 max-md:flex-wrap np-custom">
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
              <div className="justify-center items-center px-4 w-11 h-11 text-2xl text-white whitespace-nowrap bg-indigo-600 rounded-3xl">
                <p className="mt-1.5">0</p>
              </div>
              <div className="my-auto text-base font-bold leading-4 text-zinc-300">
                Open
                <br />
                <span className="text-xs leading-3">Projects</span>
              </div>
            </div>
            <div className="flex gap-2.5 mt-12 max-md:mt-10">
              <div className="justify-center items-center px-4 w-11 h-11 text-2xl text-white whitespace-nowrap bg-orange-500 rounded-3xl">
                <p className="mt-1.5">0</p>
              </div>
              <div className="my-auto text-base font-bold leading-4 text-zinc-300">
                On-going
                <br />
                <span className="text-xs leading-3">Projects</span>
              </div>
            </div>
            <div className="flex gap-2.5 mt-12 max-md:mt-10">
              <div className="justify-center items-center px-4 w-11 h-11 text-2xl text-white whitespace-nowrap bg-green-600 rounded-3xl">
                <p className="mt-1.5">0</p>
              </div>
              <div className="my-auto text-base font-bold leading-4 text-zinc-300">
                Completed
                <br />
                <span className="text-xs leading-3">Projects</span>
              </div>
            </div>
          </div>

          {/* porjects bar */}
          <div className="flex gap-4 px-5 text-base font-medium whitespace-nowrap text-zinc-300">
            <div className="justify-center px-5 py-3 rounded-2xl border-2 border-solid border-zinc-800">
              Tasks
            </div>
            <div className="justify-center px-6 py-3 rounded-2xl border-2 border-solid bg-zinc-800 border-zinc-800">
              Upcoming
            </div>
            <div className="justify-center px-5 py-3 rounded-2xl border-2 border-solid border-zinc-800">
              Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
