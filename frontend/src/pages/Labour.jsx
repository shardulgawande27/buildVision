import React, { useState } from "react";
import searchImg from "../assets/images/search.png";
import Sidebar from "../components/Sidebar";
import line from "../assets/images/line-1.png";

const Labour = () => {
  const [selectedDate, setSelectedDate] = useState(7);
  const [selectedMonth, setSelectedMonth] = useState("Jun");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

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
        <div className="flex ml-4 justify-between items-center px-3 py-2 text-md leading-7 rounded-lg border border-black border-solid bg-stone-950 text-stone-500  w-[30%] mr-auto mt-12">
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
        {/* date */}
        <div className="flex flex-col items-center px-5 mt-10 font-medium text-white">
          <div className="flex gap-5 items-center  text-2xl whitespace-nowrap w-[100%] max-md:flex-wrap max-md:max-w-full">
            <div className=" self-stretch my-auto text-3xl">2020</div>
            <div className="flex">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9924 11.0075C16.8297 10.8435 16.6362 10.7133 16.4229 10.6245C16.2096 10.5356 15.9809 10.4899 15.7499 10.4899C15.5189 10.4899 15.2901 10.5356 15.0769 10.6245C14.8636 10.7133 14.6701 10.8435 14.5074 11.0075L5.75739 19.7575C5.59337 19.9202 5.46318 20.1138 5.37433 20.327C5.28549 20.5403 5.23975 20.769 5.23975 21C5.23975 21.231 5.28549 21.4598 5.37433 21.673C5.46318 21.8863 5.59337 22.0798 5.75739 22.2425L14.5074 30.9925C14.6701 31.1565 14.8636 31.2867 15.0769 31.3756C15.2901 31.4644 15.5189 31.5102 15.7499 31.5102C15.9809 31.5102 16.2096 31.4644 16.4229 31.3756C16.6362 31.2867 16.8297 31.1565 16.9924 30.9925C17.1564 30.8298 17.2866 30.6363 17.3755 30.423C17.4643 30.2098 17.51 29.981 17.51 29.75C17.51 29.519 17.4643 29.2903 17.3755 29.077C17.2866 28.8638 17.1564 28.6702 16.9924 28.5075L9.46739 21L16.9924 13.4925C17.1564 13.3298 17.2866 13.1363 17.3755 12.923C17.4643 12.7098 17.51 12.481 17.51 12.25C17.51 12.019 17.4643 11.7903 17.3755 11.577C17.2866 11.3638 17.1564 11.1702 16.9924 11.0075Z"
                  fill="white"
                />
              </svg>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.0076 30.9925C25.1703 31.1565 25.3638 31.2867 25.5771 31.3755C25.7904 31.4644 26.0191 31.5101 26.2501 31.5101C26.4811 31.5101 26.7099 31.4644 26.9231 31.3755C27.1364 31.2867 27.3299 31.1565 27.4926 30.9925L36.2426 22.2425C36.4066 22.0798 36.5368 21.8862 36.6257 21.673C36.7145 21.4597 36.7603 21.231 36.7603 21C36.7603 20.769 36.7145 20.5402 36.6257 20.327C36.5368 20.1137 36.4066 19.9202 36.2426 19.7575L27.4926 11.0075C27.3299 10.8435 27.1364 10.7133 26.9231 10.6244C26.7099 10.5356 26.4811 10.4898 26.2501 10.4898C26.0191 10.4898 25.7904 10.5356 25.5771 10.6244C25.3638 10.7133 25.1703 10.8435 25.0076 11.0075C24.8436 11.1702 24.7134 11.3637 24.6245 11.577C24.5357 11.7902 24.49 12.019 24.49 12.25C24.49 12.481 24.5357 12.7097 24.6245 12.923C24.7134 13.1362 24.8436 13.3298 25.0076 13.4925L32.5326 21L25.0076 28.5075C24.8436 28.6702 24.7134 28.8637 24.6245 29.077C24.5357 29.2902 24.49 29.519 24.49 29.75C24.49 29.981 24.5357 30.2097 24.6245 30.423C24.7134 30.6362 24.8436 30.8298 25.0076 30.9925Z"
                  fill="white"
                />
              </svg>
            </div>
            <svg
              width="2"
              height="92"
              viewBox="0 0 2 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0L1 46L1 92" stroke="white" stroke-opacity="0.5" />
            </svg>
            <div className="month flex gap-5">
              {months.map((month) => (
                <div
                  key={month}
                  className={`self-stretch my-auto cursor-pointer ${
                    selectedMonth === month ? "bg-indigo-600" : ""
                  } rounded-lg max-md:p-3 p-3`}
                  onClick={() => setSelectedMonth(month)}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
          <div className="date flex flex-col text-center items-center">
            <img
              loading="lazy"
              src={line}
              className="self-stretch w-full  max-md:max-w-full"
            />
            <div className="my-4 text-2xl max-md:max-w-full flex gap-5 items-center mr-auto">
              {[...Array(30).keys()].map((num) => (
                <button
                  key={num}
                  className={`py-1 rounded cursor-pointer ${
                    selectedDate === num + 1 ? "bg-indigo-600 p-4" : ""
                  }`}
                  onClick={() => setSelectedDate(num + 1)}
                >
                  {num + 1}
                </button>
              ))}
            </div>

            <img
              loading="lazy"
              src={line}
              className="self-stretch w-full  max-md:max-w-full"
            />
          </div>
        </div>
        {/* labour data */}
        <div className="labour-details grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          <div className="flex flex-col px-2.5 pt-2.5 pb-5 rounded-xl bg-neutral-900 w-[299px]">
            <div className="flex gap-5 justify-between w-full text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex gap-3.5 justify-center">
                <div className="shrink-0 my-auto bg-green-600 h-[21px] rounded-[100px] w-[5px]" />
                <div>Skilled</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48409c107d2386ccf05858feb382db444ba04286d7a43b5570130d34cf69496e?"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between p-4 mt-3 rounded-xl border border-solid bg-zinc-900 border-neutral-800">
              <div className="flex flex-col text-white leading-[150%]">
                <div className="text-lg">ABC </div>
                <div className="mt-4 text-xs">₹100/day</div>
              </div>
              <div className="flex flex-col self-start">
                <div className="text-xs leading-5 text-white">Total amount</div>
                <div className="mt-3 text-2xl font-medium text-white">
                  ₹ 100
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex justify-center items-center px-3.5 w-10 h-10 bg-green-600 rounded-lg cursor-pointer">
                <p>P</p>
              </div>
              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>A</p>
              </div>

              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>H</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2.5 pt-2.5 pb-5 rounded-xl bg-neutral-900 w-[299px]">
            <div className="flex gap-5 justify-between w-full text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex gap-3.5 justify-center">
                <div className="shrink-0 my-auto bg-red-500 h-[21px] rounded-[100px] w-[5px]" />
                <div>Skilled</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48409c107d2386ccf05858feb382db444ba04286d7a43b5570130d34cf69496e?"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between p-4 mt-3 rounded-xl border border-solid bg-zinc-900 border-neutral-800">
              <div className="flex flex-col text-white leading-[150%]">
                <div className="text-lg">ABC </div>
                <div className="mt-4 text-xs">₹100/day</div>
              </div>
              <div className="flex flex-col self-start">
                <div className="text-xs leading-5 text-white">Total amount</div>
                <div className="mt-3 text-2xl font-medium text-white">
                  ₹ 100
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>P</p>
              </div>
              <div className="flex justify-center items-center px-3.5 w-10 h-10 bg-red-500 border-opacity-90 rounded-lg cursor-pointer">
                <p>A</p>
              </div>

              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>H</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2.5 pt-2.5 pb-5 rounded-xl bg-neutral-900 w-[299px]">
            <div className="flex gap-5 justify-between w-full text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex gap-3.5 justify-center">
                <div className="shrink-0 my-auto bg-orange-500 h-[21px] rounded-[100px] w-[5px]" />
                <div>Skilled</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48409c107d2386ccf05858feb382db444ba04286d7a43b5570130d34cf69496e?"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between p-4 mt-3 rounded-xl border border-solid bg-zinc-900 border-neutral-800">
              <div className="flex flex-col text-white leading-[150%]">
                <div className="text-lg">ABC </div>
                <div className="mt-4 text-xs">₹100/day</div>
              </div>
              <div className="flex flex-col self-start">
                <div className="text-xs leading-5 text-white">Total amount</div>
                <div className="mt-3 text-2xl font-medium text-white">
                  ₹ 100
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>P</p>
              </div>
              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>A</p>
              </div>

              <div className="flex justify-center items-center px-3.5 w-10 h-10 bg-orange-500 border-opacity-90 rounded-lg cursor-pointer">
                <p>H</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2.5 pt-2.5 pb-5 rounded-xl bg-neutral-900 w-[299px]">
            <div className="flex gap-5 justify-between w-full text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex gap-3.5 justify-center">
                <div className="shrink-0 my-auto bg-orange-500 h-[21px] rounded-[100px] w-[5px]" />
                <div>Skilled</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48409c107d2386ccf05858feb382db444ba04286d7a43b5570130d34cf69496e?"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between p-4 mt-3 rounded-xl border border-solid bg-zinc-900 border-neutral-800">
              <div className="flex flex-col text-white leading-[150%]">
                <div className="text-lg">ABC </div>
                <div className="mt-4 text-xs">₹100/day</div>
              </div>
              <div className="flex flex-col self-start">
                <div className="text-xs leading-5 text-white">Total amount</div>
                <div className="mt-3 text-2xl font-medium text-white">
                  ₹ 100
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>P</p>
              </div>
              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>A</p>
              </div>

              <div className="flex justify-center items-center px-3.5 w-10 h-10 bg-orange-500 border-opacity-90 rounded-lg cursor-pointer">
                <p>H</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2.5 pt-2.5 pb-5 rounded-xl bg-neutral-900 w-[299px]">
            <div className="flex gap-5 justify-between w-full text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex gap-3.5 justify-center">
                <div className="shrink-0 my-auto bg-green-600 h-[21px] rounded-[100px] w-[5px]" />
                <div>Skilled</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48409c107d2386ccf05858feb382db444ba04286d7a43b5570130d34cf69496e?"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between p-4 mt-3 rounded-xl border border-solid bg-zinc-900 border-neutral-800">
              <div className="flex flex-col text-white leading-[150%]">
                <div className="text-lg">ABC </div>
                <div className="mt-4 text-xs">₹100/day</div>
              </div>
              <div className="flex flex-col self-start">
                <div className="text-xs leading-5 text-white">Total amount</div>
                <div className="mt-3 text-2xl font-medium text-white">
                  ₹ 100
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 text-lg leading-7 text-white whitespace-nowrap">
              <div className="flex justify-center items-center px-3.5 w-10 h-10 bg-green-600 rounded-lg cursor-pointer">
                <p>P</p>
              </div>
              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>A</p>
              </div>

              <div className="flex justify-center items-center px-3.5 w-10 h-10 border border-solid border-white border-opacity-90 rounded-lg cursor-pointer">
                <p>H</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labour;
