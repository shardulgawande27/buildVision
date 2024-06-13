import React from "react";
import plusImg from "../assets/images/plus.png";

const UploadTender = () => {
  return (
    <div
      className="flex gap-5 justify-between items-start px-4  mt-4 ml-3 pt-5 pb-14 rounded-2xl bg-zinc-800 w-[300px] cursor-pointer"
      //   onClick={() => {
      //     navigateTo("/addproject");
      //   }}
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div className="shrink-0 bg-white rounded-xl h-[23px] w-[86px]" />
          <div className="text-lg font-medium text-zinc-300">April 10</div>
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
  );
};

export default UploadTender;
