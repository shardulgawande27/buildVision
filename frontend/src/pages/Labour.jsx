import React from "react";
import searchImg from "../assets/images/search.png";
import Sidebar from "../components/Sidebar";

const Labour = () => {
  return (
    <div className="bg-[#17181F] flex">
      <Sidebar />
      <div className="home-main">
        {/* search section */}
        <div className="bg-transparent flex w-[500px] rounded-3xl border-[#4A4B52] border-[1px] items-center px-7 mt-5 ml-5">
          <input
            className="flex gap-5  py-2.5 text-sm font-medium  border-[#4A4B52] text-[#4A4B52] max-md:flex-wrap max-md:px-5 bg-transparent w-full outline-none placeholder-[font-thin]::placeholder"
            type="text"
            placeholder="Search task, project"
          />

          <a href="">
            <img src={searchImg} alt="" />
          </a>
        </div>

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
        </div>

        {/* task overview section */}
        <div className="flex ml-4 justify-between items-center px-3 py-2 text-md leading-7 rounded-lg border border-black border-solid bg-stone-950 text-stone-500  w-[60%] mr-auto mt-12">
          <div className="justify-center px-2.5 py-1 font-medium rounded-lg bg-zinc-900 text-stone-300">
            List
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ad646a8173f2fc81c13a8c2c898f88ed0f8ec18bdbf1a6bc2627441e1653a7?"
            className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.1] border-zinc-800 stroke-[1px] stroke-zinc-800"
          />
          <div className="self-stretch my-auto">Board</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ad646a8173f2fc81c13a8c2c898f88ed0f8ec18bdbf1a6bc2627441e1653a7?"
            className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.1] border-zinc-800 stroke-[1px] stroke-zinc-800"
          />
          <div className="self-stretch my-auto">Timeline</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ad646a8173f2fc81c13a8c2c898f88ed0f8ec18bdbf1a6bc2627441e1653a7?"
            className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.1] border-zinc-800 stroke-[1px] stroke-zinc-800"
          />
          <div className="self-stretch my-auto">Due Task</div>
        </div>
        {/* labor section */}
        {/* labour overview */}
        <div className="flex gap-5 font-medium w-[500px] mt-8">
          <div className="flex flex-col px-5">
            <div className="text-lg text-white">Labour Attendance</div>
            <div className="flex gap-5 mt-7 whitespace-nowrap">
              <div className="flex flex-col flex-1">
                <div className="text-md text-white text-opacity-70">
                  Present
                </div>
                <div className="self-center mt-5 text-2xl text-white">3</div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-md text-white text-opacity-70">Absent</div>
                <div className="self-center mt-5 text-2xl text-white">1</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  px-5 text-white">
            <div className="text-lg">Amount to be paid </div>
            <div className="mt-6 text-md text-white text-opacity-70">
              Amount
            </div>
            <div className="mt-5 text-2xl">₹250</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labour;
