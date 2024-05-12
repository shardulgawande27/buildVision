import React from "react";
import LandingNavabar from "../components/LandingNavabar";
import LandingContent from "../components/LandingContent";
import LandingBottom from "../components/LandingBottom";

const Landing = () => {
  return (
    <div className="bg-[#17181F] h-full px-12 py-8">
      <LandingNavabar />
      <LandingContent />
      <LandingBottom />
    </div>
  );
};

export default Landing;
