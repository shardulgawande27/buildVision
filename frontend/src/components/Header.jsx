import React, { useState, useEffect } from "react";
import profileImg from "./../assets/images/profile-img.png";
import searchImg from "../assets/images/search.png";

const Header = () => {
  const [logout, setLogout] = useState(false);

  const changeLogout = () => {
    setLogout(!logout);
  };

  const logoutFn = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="flex justify-between">
      <div className="bg-transparent flex w-[500px] h-[50px] rounded-3xl border-[#4A4B52] border-[1px] items-center px-7 mt-5 ml-5">
        <input
          className="flex gap-5  py-2.5 text-sm font-medium  border-[#4A4B52] text-[#4A4B52] max-md:flex-wrap max-md:px-5 bg-transparent w-full outline-none placeholder-[font-thin]::placeholder"
          type="text"
          placeholder="Search task, project"
        />

        <a href="">
          <img src={searchImg} alt="" />
        </a>
      </div>

      <div className="flex flex-col">
        <div
          className="flex cursor-pointer self-center text-lg whitespace-nowrap mt-4 text-white"
          onClick={() => {
            changeLogout();
          }}
        >
          <img
            loading="lazy"
            src={profileImg}
            className="profile-custom w-[49px] h-[49px]"
          />
          <div className="flex gap-2 flex-1 px-5 my-auto">
            <span>Sachin</span>
            <span>Potdar</span>
          </div>
        </div>
        <div
          className={`flex justify-center mt-4 text-white bg-zinc-800 h-[70px] rounded-xl ${
            logout ? "" : "hidden"
          }`}
        >
          <button
            onClick={() => {
              logoutFn();
            }}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
