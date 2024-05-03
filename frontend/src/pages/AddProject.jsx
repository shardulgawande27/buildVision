import React, { useState } from "react";
import searchImg from "../assets/images/search.png";
import Sidebar from "../components/Sidebar";
import Form from "../components/Form";
import AreaForm from "../components/AreaForm";

const AddProject = () => {
  const [btnActive, setBtnActive] = useState(0);
  const [formComponent, setFormCompoenent] = useState(0);

  const displayComponent = () => {
    if (btnActive === 0) {
      return <Form />;
    } else if (btnActive === 1) {
      return <AreaForm />;
    }
  };

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

        {/*  Project detail bar */}
        <div className="flex gap-2 justify-between items-center px-3 py-2 text-md leading-7 rounded-lg border border-black border-solid bg-stone-950 text-stone-500 max-md:flex-wrap w-[60%] mr-auto mt-12">
          <div
            className={`self-stretch my-auto cursor-pointer ${
              btnActive == 0
                ? "justify-center px-2.5 py-1 font-medium rounded-lg bg-zinc-900 text-stone-300"
                : ""
            }`}
            onClick={() => {
              setBtnActive(0);
            }}
          >
            Overview
          </div>
          <svg
            width="2"
            height="11"
            viewBox="0 0 2 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path d="M1 0.5V10.5" stroke="#323232" />
          </svg>
          <div
            className={`self-stretch my-auto cursor-pointer ${
              btnActive == 1
                ? "justify-center px-2.5 py-1 font-medium rounded-lg bg-zinc-900 text-stone-300"
                : ""
            }`}
            onClick={() => {
              setBtnActive(1);
            }}
          >
            Area
          </div>
          <svg
            width="2"
            height="11"
            viewBox="0 0 2 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path d="M1 0.5V10.5" stroke="#323232" />
          </svg>
          <div
            className={`self-stretch my-auto cursor-pointer ${
              btnActive == 2
                ? "justify-center px-2.5 py-1 font-medium rounded-lg bg-zinc-900 text-stone-300"
                : ""
            }`}
            onClick={() => {
              setBtnActive(2);
            }}
          >
            Photos
          </div>
          <svg
            width="2"
            height="11"
            viewBox="0 0 2 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path d="M1 0.5V10.5" stroke="#323232" />
          </svg>
          <div
            className={`self-stretch my-auto cursor-pointer ${
              btnActive == 3
                ? "justify-center px-2.5 py-1 font-medium rounded-lg bg-zinc-900 text-stone-300"
                : ""
            }`}
            onClick={() => {
              setBtnActive(3);
            }}
          >
            Documents
          </div>
          <svg
            width="2"
            height="11"
            viewBox="0 0 2 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path d="M1 0.5V10.5" stroke="#323232" />
          </svg>
          <div
            className={`self-stretch my-auto cursor-pointer ${
              btnActive == 4
                ? "justify-center px-2.5 py-1 font-medium rounded-lg bg-zinc-900 text-stone-300"
                : ""
            }`}
            onClick={() => {
              setBtnActive(4);
            }}
          >
            Location
          </div>
        </div>

        {/* details section */}
        {displayComponent()}
        {/* <Form /> */}
      </div>
    </div>
  );
};

export default AddProject;
