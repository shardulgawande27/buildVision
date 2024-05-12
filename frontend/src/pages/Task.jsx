import React from "react";
import searchImg from "../assets/images/search.png";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import img1 from "./../assets/images/task1.jpg";
import img2 from "./../assets/images/task2.jpg";
import img3 from "./../assets/images/task3.jpg";

const Task = () => {
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
        </div>

        {/* task overview section */}
        <div className="flex  justify-between items-center px-3 py-2 text-md leading-7 rounded-lg border border-black border-solid bg-stone-950 text-stone-500  w-[30%] mr-auto mt-12">
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
        {/* Task section */}
        <div className="flex mt-12">
          <div className="flex flex-col p-2.5 rounded-xl bg-neutral-900 w-[325px]">
            <div className="flex gap-5 justify-between w-full">
              <div className="flex gap-3.5 justify-center text-lg leading-7">
                <div className="shrink-0 my-auto bg-indigo-600 h-[21px] rounded-[100px] w-[5px]" />
                <div className="flex gap-1.5 justify-center">
                  <div className="text-white">In review</div>
                  <div className="justify-center self-start px-3.5 py-1.5 text-white whitespace-nowrap bg-indigo-600 rounded-[100px]">
                    3
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-center my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddbc7b9b401d4eff0a110e32554096336df47c712df198c11a1050edc4d54b16?"
                  className="shrink-0 w-5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/655c9e696c31214f24193c704e148dbe42b7c65ccf52d9ad7f8516f00c924aeb?"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center p-2.5 mt-3 w-full text-sm leading-5 rounded-xl border border-solid bg-zinc-900 border-neutral-800">
              <div className="flex gap-5 justify-between">
                <div className="text-stone-500">Due:</div>
                <div className="text-stone-300">27 Oct</div>
              </div>
              <div className="flex gap-1.5 mt-4 text-white whitespace-nowrap">
                <div className="justify-center px-3.5 py-0.5 bg-purple-700 rounded-[100px]">
                  Ground
                </div>
                <div className="justify-center px-3.5 py-0.5 bg-sky-500 rounded-[100px]">
                  Foundation
                </div>
              </div>
              <img
                loading="lazy"
                src={img1}
                className="mt-4 w-full aspect-[1.85]"
              />
              <div className="mt-4 text-lg text-white">Improve </div>
              <div className="flex gap-4 justify-center self-center mt-4 whitespace-nowrap text-stone-300">
                <div className="flex gap-1 justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/166c4f9ced8a959a0fbccc9feab733778ca8a8a5976ef82ec73dcc04f2303d05?"
                    className="shrink-0 my-auto w-4 aspect-square"
                  />
                  <div>2</div>
                </div>
                <div className="flex gap-1 justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce73779a2a2a8bead13267b0f5ba055ad6e44380312835ba7678b19eb097d54f?"
                    className="shrink-0 my-auto w-4 aspect-square"
                  />
                  <div>4</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-2.5 rounded-xl bg-neutral-900 w-[325px]">
            <div className="flex gap-5 justify-between w-full">
              <div className="flex gap-3.5 justify-center text-lg leading-7 text-white">
                <div className="shrink-0 my-auto bg-purple-700 h-[21px] rounded-[100px] w-[5px]" />
                <div className="flex gap-1.5 justify-center">
                  <div>To do</div>
                  <div className="justify-center self-start px-3.5 py-1.5 whitespace-nowrap bg-purple-700 rounded-[100px]">
                    3
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-center my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdfb3da7ca8b1a25ca3b148723e070965c09d2a150035deb2bed8cf45de4ef52?"
                  className="shrink-0 w-5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c91b1432a75f740d25f294f703cf7725bc089858bad20de9d73d5742529254f?"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center self-center p-2.5 mt-3 w-full rounded-xl border border-solid bg-zinc-900 border-neutral-800">
              <div className="text-sm leading-5 text-stone-300">
                Create New Card
              </div>
              {/* Card Title */}
              <input
                type="text"
                placeholder="Card Title"
                className="justify-center items-start px-3.5 py-1.5 mt-4 text-sm  leading-5 text-white rounded-lg border border-solid bg-stone-900 border-neutral-700 placeholder:text-gray-400 placeholder:italic"
              />
              {/* About Task*/}
              <input
                type="text"
                placeholder="About the task"
                className="justify-center items-start px-3.5 pt-1.5 pb-16 mt-4 text-sm  leading-5 text-white rounded-lg border border-solid bg-stone-900 border-neutral-700 placeholder:text-gray-400 placeholder:italic"
              />
              <div className="flex flex-col justify-center px-12 py-6 mt-4 w-full rounded-lg border border-solid bg-stone-900 border-neutral-700">
                <div className="flex gap-0 self-center w-[21px]">
                  <div className="z-10 shrink-0 my-auto bg-white bg-opacity-70 h-[3px]" />
                  <div className="shrink-0 w-full bg-white bg-opacity-70 h-[21px]" />
                </div>
                <div className="mt-4 text-sm italic leading-5 text-gray-400">
                  Choose photos to upload
                </div>
              </div>
              <div className="flex gap-3 px-3.5 py-1.5 mt-4 text-sm leading-5 whitespace-nowrap rounded-lg border border-solid bg-stone-900 border-neutral-700">
                <div className="flex gap-1 my-auto text-gray-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/77cbd89d274d37aba9d6cd86ee32fab66a0ec990e65de37d99bfbe9e93e5c9cd?"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div className="italic">Tag:</div>
                </div>
                <div className="justify-center px-3.5 py-0.5 text-white bg-sky-500 rounded-[100px]">
                  Web
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-3.5 py-1.5 mt-4 w-full text-sm leading-5 text-gray-400 rounded-lg border border-solid bg-stone-900 border-neutral-700">
                <div className="flex gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z"
                      fill="#D0D0D0"
                    />
                  </svg>

                  <div className="italic">Start Date:</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-3.5 py-1.5 mt-4 w-full text-sm leading-5 text-gray-400 rounded-lg border border-solid bg-stone-900 border-neutral-700">
                <div className="flex gap-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z"
                      fill="#D0D0D0"
                    />
                  </svg>

                  <div className="italic">End Date</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-3.5 py-1.5 mt-4 w-full text-sm leading-5 text-gray-400 rounded-lg border border-solid bg-stone-900 border-neutral-700">
                <div className="flex gap-1">
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
                      d="M3.72039 13.387C4.50179 12.6056 5.5616 12.1667 6.66667 12.1667H13.3333C14.4384 12.1667 15.4982 12.6056 16.2796 13.387C17.061 14.1684 17.5 15.2283 17.5 16.3333V18C17.5 18.4602 17.1269 18.8333 16.6667 18.8333C16.2064 18.8333 15.8333 18.4602 15.8333 18V16.3333C15.8333 15.6703 15.5699 15.0344 15.1011 14.5656C14.6323 14.0967 13.9964 13.8333 13.3333 13.8333H6.66667C6.00363 13.8333 5.36774 14.0967 4.8989 14.5656C4.43006 15.0344 4.16667 15.6703 4.16667 16.3333V18C4.16667 18.4602 3.79357 18.8333 3.33333 18.8333C2.8731 18.8333 2.5 18.4602 2.5 18V16.3333C2.5 15.2283 2.93899 14.1684 3.72039 13.387Z"
                      fill="#D0D0D0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 3.83332C8.6193 3.83332 7.50001 4.95261 7.50001 6.33332C7.50001 7.71404 8.6193 8.83332 10 8.83332C11.3807 8.83332 12.5 7.71404 12.5 6.33332C12.5 4.95261 11.3807 3.83332 10 3.83332ZM5.83334 6.33332C5.83334 4.03214 7.69882 2.16666 10 2.16666C12.3012 2.16666 14.1667 4.03214 14.1667 6.33332C14.1667 8.63451 12.3012 10.5 10 10.5C7.69882 10.5 5.83334 8.63451 5.83334 6.33332Z"
                      fill="#D0D0D0"
                    />
                  </svg>
                  <div className="italic">Assigned to:</div>
                </div>
              </div>
              <button className="justify-center text-center cursor-pointer items-center px-5 py-2.5 mt-4 text-sm leading-5 text-white whitespace-nowrap rounded border border-purple-800 border-solid bg-[linear-gradient(180deg,#8724D3_0%,#7821BA_100%)]">
                Save
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2.5 rounded-xl bg-neutral-900 w-[325px]">
            <div className="flex gap-5 justify-between w-full">
              <div className="flex gap-3.5 justify-center text-lg leading-7">
                <div className="shrink-0 my-auto bg-indigo-600 h-[21px] rounded-[100px] w-[5px]" />
                <div className="flex gap-1.5 justify-center">
                  <div className="text-white">In review</div>
                  <div className="justify-center self-start px-3.5 py-1.5 text-white whitespace-nowrap bg-indigo-600 rounded-[100px]">
                    3
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-center my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddbc7b9b401d4eff0a110e32554096336df47c712df198c11a1050edc4d54b16?"
                  className="shrink-0 w-5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/655c9e696c31214f24193c704e148dbe42b7c65ccf52d9ad7f8516f00c924aeb?"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center p-2.5 mt-3 w-full text-sm leading-5 rounded-xl border border-solid bg-zinc-900 border-neutral-800">
              <div className="flex gap-5 justify-between">
                <div className="text-stone-500">Due:</div>
                <div className="text-stone-300">27 Oct</div>
              </div>
              <div className="flex gap-1.5 mt-4 text-white whitespace-nowrap">
                <div className="justify-center px-3.5 py-0.5 bg-purple-700 rounded-[100px]">
                  RCC
                </div>
                <div className="justify-center px-3.5 py-0.5 bg-sky-500 rounded-[100px]">
                  Flooring
                </div>
              </div>
              <img
                loading="lazy"
                src={img3}
                className="mt-4 w-full aspect-[1.85]"
              />
              <div className="mt-4 text-lg text-white">Improve </div>
              <div className="flex gap-4 justify-center self-center mt-4 whitespace-nowrap text-stone-300">
                <div className="flex gap-1 justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/166c4f9ced8a959a0fbccc9feab733778ca8a8a5976ef82ec73dcc04f2303d05?"
                    className="shrink-0 my-auto w-4 aspect-square"
                  />
                  <div>2</div>
                </div>
                <div className="flex gap-1 justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce73779a2a2a8bead13267b0f5ba055ad6e44380312835ba7678b19eb097d54f?"
                    className="shrink-0 my-auto w-4 aspect-square"
                  />
                  <div>4</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-2.5 rounded-xl bg-neutral-900 w-[325px]">
            <div className="flex gap-5 justify-between w-full">
              <div className="flex gap-3.5 justify-center text-lg leading-7">
                <div className="shrink-0 my-auto bg-indigo-600 h-[21px] rounded-[100px] w-[5px]" />
                <div className="flex gap-1.5 justify-center">
                  <div className="text-white">In review</div>
                  <div className="justify-center self-start px-3.5 py-1.5 text-white whitespace-nowrap bg-indigo-600 rounded-[100px]">
                    3
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-center my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddbc7b9b401d4eff0a110e32554096336df47c712df198c11a1050edc4d54b16?"
                  className="shrink-0 w-5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/655c9e696c31214f24193c704e148dbe42b7c65ccf52d9ad7f8516f00c924aeb?"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center p-2.5 mt-3 w-full text-sm leading-5 rounded-xl border border-solid bg-zinc-900 border-neutral-800">
              <div className="flex gap-5 justify-between">
                <div className="text-stone-500">Due:</div>
                <div className="text-stone-300">27 Oct</div>
              </div>
              <div className="flex gap-1.5 mt-4 text-white whitespace-nowrap">
                <div className="justify-center px-3.5 py-0.5 bg-purple-700 rounded-[100px]">
                  Landfilling
                </div>
                <div className="justify-center px-3.5 py-0.5 bg-sky-500 rounded-[100px]">
                  Concret
                </div>
              </div>
              <img
                loading="lazy"
                src={img2}
                className="mt-4 w-full aspect-[1.85]"
              />
              <div className="mt-4 text-lg text-white">Improve </div>
              <div className="flex gap-4 justify-center self-center mt-4 whitespace-nowrap text-stone-300">
                <div className="flex gap-1 justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/166c4f9ced8a959a0fbccc9feab733778ca8a8a5976ef82ec73dcc04f2303d05?"
                    className="shrink-0 my-auto w-4 aspect-square"
                  />
                  <div>2</div>
                </div>
                <div className="flex gap-1 justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce73779a2a2a8bead13267b0f5ba055ad6e44380312835ba7678b19eb097d54f?"
                    className="shrink-0 my-auto w-4 aspect-square"
                  />
                  <div>4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
