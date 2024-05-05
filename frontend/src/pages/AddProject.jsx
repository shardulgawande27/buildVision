import React, { useState } from "react";
import searchImg from "../assets/images/search.png";
import Sidebar from "../components/Sidebar";
import Form from "../components/Form";
import AreaForm from "../components/AreaForm";
import uploadService from "../api/uploadService";
import Header from "../components/Header";
import LocationForm from "../components/LocationForm";

const AddProject = () => {
  const [btnActive, setBtnActive] = useState(0);
  const [formComponent, setFormCompoenent] = useState(0);

  const displayComponent = () => {
    if (btnActive === 0) {
      return <Form />;
    } else if (btnActive === 1) {
      return <AreaForm />;
    } else if (btnActive === 4) {
      return <LocationForm />;
    }
  };

  const uploadFile = (e) => {
    const formData = new FormData();

    formData.append("image", e.target.files[0], e.target.files[0].name);

    uploadService
      .uploadImage(formData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#17181F] flex">
      <Sidebar />
      <div className="home-main w-[100%]">
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
        </div>

        {/*  Project detail bar */}
        <div className="flex justify-between pl-2 pr-14 items-center mt-12 w-[100%]">
          <div className="flex gap-2 justify-between items-center px-3 py-2 text-md  rounded-lg border border-black border-solid bg-stone-950 text-stone-500 w-800px ">
            <div
              className={`self-stretch my-auto cursor-pointer px-3 ${
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
              className={`self-stretch my-auto cursor-pointer px-3 ${
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
              className={`self-stretch my-auto cursor-pointer px-3 ${
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
              className={`self-stretch my-auto cursor-pointer px-3 ${
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
              className={`self-stretch my-auto cursor-pointer px-3 ${
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

          {btnActive == 2 && (
            <div className="flex justify-center items-center px-2 py-1 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 h-[40px] cursor-pointer ml-[10%] ">
              <label
                htmlFor="upload-input"
                className="flex items-center cursor-pointer w-[135px]"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0004 3.83331C10.4607 3.83331 10.8338 4.20641 10.8338 4.66665V16.3333C10.8338 16.7936 10.4607 17.1666 10.0004 17.1666C9.54021 17.1666 9.16711 16.7936 9.16711 16.3333V4.66665C9.16711 4.20641 9.54021 3.83331 10.0004 3.83331Z"
                    fill="#151515"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.33374 10.5C3.33374 10.0398 3.70684 9.66669 4.16707 9.66669H15.8337C16.294 9.66669 16.6671 10.0398 16.6671 10.5C16.6671 10.9603 16.294 11.3334 15.8337 11.3334H4.16707C3.70684 11.3334 3.33374 10.9603 3.33374 10.5Z"
                    fill="#151515"
                  />
                </svg>
                <span>add image(s)</span>
              </label>
              <input
                id="upload-input"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  uploadFile(e);
                }}
              />
            </div>
          )}
          {btnActive == 3 && (
            <div className="flex justify-center items-center px-2 py-1 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 h-[40px] cursor-pointer ml-[10%] ">
              <label
                htmlFor="upload-input"
                className="flex items-center cursor-pointer w-[135px]"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0004 3.83331C10.4607 3.83331 10.8338 4.20641 10.8338 4.66665V16.3333C10.8338 16.7936 10.4607 17.1666 10.0004 17.1666C9.54021 17.1666 9.16711 16.7936 9.16711 16.3333V4.66665C9.16711 4.20641 9.54021 3.83331 10.0004 3.83331Z"
                    fill="#151515"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.33374 10.5C3.33374 10.0398 3.70684 9.66669 4.16707 9.66669H15.8337C16.294 9.66669 16.6671 10.0398 16.6671 10.5C16.6671 10.9603 16.294 11.3334 15.8337 11.3334H4.16707C3.70684 11.3334 3.33374 10.9603 3.33374 10.5Z"
                    fill="#151515"
                  />
                </svg>
                <span>Upload file(s)</span>
              </label>
              <input
                id="upload-input"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  uploadFile(e);
                }}
              />
            </div>
          )}
        </div>

        {/* details section */}
        {displayComponent()}
        {/* <Form /> */}
      </div>
    </div>
  );
};

export default AddProject;
