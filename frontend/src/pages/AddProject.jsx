import React from "react";
import searchImg from "../assets/images/search.png";
import Sidebar from "../components/Sidebar";

const AddProject = () => {
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
          <div className="justify-center self-stretch px-2.5 py-1 font-medium rounded-lg bg-zinc-900 text-stone-300">
            Overview
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ad646a8173f2fc81c13a8c2c898f88ed0f8ec18bdbf1a6bc2627441e1653a7?"
            className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.1] border-zinc-800 stroke-[1px] stroke-zinc-800"
          />
          <div className="self-stretch my-auto">Area</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ad646a8173f2fc81c13a8c2c898f88ed0f8ec18bdbf1a6bc2627441e1653a7?"
            className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.1] border-zinc-800 stroke-[1px] stroke-zinc-800"
          />
          <div className="self-stretch my-auto">Photos</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ad646a8173f2fc81c13a8c2c898f88ed0f8ec18bdbf1a6bc2627441e1653a7?"
            className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.1] border-zinc-800 stroke-[1px] stroke-zinc-800"
          />
          <div className="self-stretch my-auto">Documents</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ad646a8173f2fc81c13a8c2c898f88ed0f8ec18bdbf1a6bc2627441e1653a7?"
            className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.1] border-zinc-800 stroke-[1px] stroke-zinc-800"
          />
          <div className="self-stretch my-auto">Location</div>
        </div>

        {/* details section bar */}
        <div className="flex gap-5 px-5 text-xl font-medium text-slate-50 mt-12">
          <div className="flex flex-col">
            <div>Project Details</div>
            <div className="shrink-0 mt-2 bg-indigo-600 border-indigo-600 border-solid border-[3px] h-[3px]" />
          </div>
          <div className="flex-auto self-start"> Committee Details</div>
        </div>

        {/* details section */}
        <div>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 mt-2 text-base font-medium leading-6 text-slate-50 max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">Project Name</div>

                <input
                  className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 max-md:max-w-full bg-transparent"
                  placeholder=" Enter the name of the project"
                  type="text"
                />
                <div className="mt-10 max-md:max-w-full"> Location</div>
                <input
                  className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 max-md:max-w-full bg-transparent"
                  placeholder="Location"
                  type="text"
                />
                <div className="mt-10 max-md:mt-10 max-md:max-w-full">CTS</div>
                <input
                  className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 max-md:max-w-full bg-transparent"
                  placeholder="Cts no / fP/7/12 no"
                  type="text"
                />
                <div className="mt-10 max-md:max-w-full">
                  Total Member in the society
                </div>
                <input
                  className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 max-md:max-w-full bg-transparent"
                  placeholder="Enter a number"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <div className="max-md:mr-1.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col px-5 text-lg leading-6 max-md:mt-10">
                        <div className="text-slate-50">
                          Room type and details
                        </div>
                        <div className="flex flex-col justify-center px-6 py-4 mt-3.5 font-medium whitespace-nowrap rounded-lg border border-solid border-slate-50 text-zinc-500 max-md:px-5">
                          <div className="flex gap-3">
                            <div className="flex-1">Type</div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb5fcee41871d9c92102989193af0ffccb731b1d116b5f243cc2e13e7d7f3833?"
                              className="shrink-0 self-start aspect-[1.23] w-[31px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow mt-8 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 justify-between text-lg font-medium leading-6 text-zinc-500 max-md:flex-wrap">
                          {/* <div className="justify-center px-6 py-4 rounded-lg border border-solid border-slate-50 max-md:px-5">
                            Number of rooms
                          </div> */}
                          <input
                            className="bg-transparent justify-center px-6 py-4 rounded-lg border border-solid border-slate-50 max-md:px-5"
                            placeholder="Number of rooms"
                            type="text"
                          />
                          <div className="justify-center px-6 py-4 rounded-lg border border-solid border-slate-50 max-md:px-5">
                            Sq. M.
                          </div>
                        </div>
                        <button className="flex gap-1.5 justify-center self-end px-2.5 py-2 mt-7 text-base leading-6 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d819fca85bc19841f47e989cb60e6d7827186651adfb6dbeea8d2bf15a77b5?"
                            className="shrink-0 my-auto w-5 aspect-square"
                          />
                          <div>add section</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 self-start mt-14 max-md:mt-10">
                  <div className="flex flex-col flex-1 px-5 text-base leading-7 whitespace-nowrap text-slate-50">
                    <div>federation</div>
                    <div className="flex flex-col justify-center px-6 py-4 mt-6 font-medium rounded-lg border border-solid border-slate-50 max-md:px-5">
                      <div className="flex gap-3">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/878bfd2ed8a3e1c84f352a13c86e56e13f0670f833b8b7c9e90e881ca8a8d43b?"
                          className="shrink-0 my-auto aspect-square w-[17px]"
                        />
                        <div>Yes</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-center self-end px-6 py-4 mt-9 rounded-lg border border-solid border-slate-50 max-md:px-5">
                    <div className="flex gap-3">
                      <div className="flex flex-col justify-center my-auto">
                        <div className="shrink-0 rounded-full border-2 border-solid border-slate-50 h-[17px] stroke-[1.5px]" />
                      </div>
                      <div className="text-base font-medium leading-7 text-slate-50">
                        No
                      </div>
                    </div>
                  </div>
                </div>
                <button className="justify-center self-end px-5 py-3 mt-24 text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10">
                  Save & Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
