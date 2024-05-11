import React from "react";
import LandingNavabar from "../components/LandingNavabar";
import LandingContent from "../components/LandingContent";

const Landing = () => {
  return (
    <div className="bg-[#17181F] h-screen px-12 py-8">
      <LandingNavabar />
      <LandingContent />
    </div>
  );
};

export default Landing;
