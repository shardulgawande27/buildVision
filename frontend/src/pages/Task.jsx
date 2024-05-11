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
              <div className="justify-center items-start px-3.5 py-1.5 mt-4 text-sm italic leading-5 text-gray-400 rounded-lg border border-solid bg-stone-900 border-neutral-700">
                Card Title
              </div>
              <div className="items-start px-3.5 pt-1.5 pb-16 mt-4 text-sm italic leading-5 text-gray-400 rounded-lg border border-solid bg-stone-900 border-neutral-700">
                About the task
              </div>
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
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/413be2143893e533041c24c6f7118ec1fcada69b59a6dade3ff4d16794b158c3?"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div className="italic">Start Date:</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-3.5 py-1.5 mt-4 w-full text-sm leading-5 text-gray-400 rounded-lg border border-solid bg-stone-900 border-neutral-700">
                <div className="flex gap-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d53bdd333ca06c2dd309115dec4d94e6b8c90d6a5afca98856bf89c0df6776b?"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div className="italic">End Date</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-3.5 py-1.5 mt-4 w-full text-sm leading-5 text-gray-400 rounded-lg border border-solid bg-stone-900 border-neutral-700">
                <div className="flex gap-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d53bdd333ca06c2dd309115dec4d94e6b8c90d6a5afca98856bf89c0df6776b?"
                    className="shrink-0 self-start w-5 aspect-square"
                  />
                  <div className="italic">Assigned to:</div>
                </div>
              </div>
              <div className="justify-center text-center cursor-pointer items-center px-5 py-2.5 mt-4 text-sm leading-5 text-white whitespace-nowrap rounded border border-purple-800 border-solid bg-[linear-gradient(180deg,#8724D3_0%,#7821BA_100%)]">
                Save
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
