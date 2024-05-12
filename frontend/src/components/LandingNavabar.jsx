import React from "react";
import logo from "./../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

const LandingNavabar = () => {
  const navigateTo = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="text-white flex gap-4 items-center font-semibold text-2xl">
        <img src={logo} alt="" />
        <h3>Pariyojan</h3>
      </div>

      <div>
        <button
          onClick={() => {
            navigateTo("/home");
          }}
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full text-[#17181F] bg-slate-100"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingNavabar;
