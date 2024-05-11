import React from "react";
import logo from "./../assets/images/Logo.png";

const LandingNavabar = () => {
  return (
    <div className="flex justify-between">
      <div className="text-white flex gap-3 items-center font-semibold text-2xl">
        <img src={logo} alt="" />
        <h3>Logo</h3>
      </div>

      <div>
        <button className="text-[#17181F] bg-slate-100 px-3 py-2 rounded-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingNavabar;
