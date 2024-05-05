import React from "react";
import logo from "./../assets/images/Logo.png";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex gap-4 text-xs font-medium text-white h-screen">
        <div className="flex flex-col self-start  px-5 border-r-2 border-zinc-800 h-screen">
          {/* logo */}
          <div className="flex justify-center gap-6 mt-4 items-center">
            <img src={logo} alt="" />
            <p className="text-xl">Logo</p>
          </div>
          <div className="flex gap-4 px-5 py-4 mt-12 text-base whitespace-nowrap rounded-xl bg-zinc-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65b6e9da0508528678af0b1042ba5cdada8297964406d58a1b9abb0e839fb2d4?"
              className="shrink-0 aspect-square w-[25px]"
            />
            <div className="flex-auto my-auto">Dashboard</div>
          </div>
          <div className="flex flex-col px-5 mt-8 text-zinc-500">
            <div className="flex gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/525328068b9732b906e383b06c45ef64518f1de46b0ef26706b0537ced7fd896?"
                className="shrink-0 aspect-[0.76] w-[22px]"
              />
              <div className="flex-auto my-auto">My Files</div>
            </div>
            <div className="flex gap-4 mt-10 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/027e41f452b45446b9844988b9634c63c800064216066fe370a949e8c9e1af40?"
                className="shrink-0 aspect-square w-[29px]"
              />
              <div className="flex-auto my-auto">Progress</div>
            </div>
            <div className="flex gap-4 mt-12">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-auto self-start">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
