import React from "react";
import { Typewriter } from "react-simple-typewriter";

const LandingContent = () => {
  return (
    <div className="py-24 flex flex-col justify-center">
      <div>
        <div>
          <h1 className="text-white text-6xl font-extrabold flex justify-center items-center">
            Best Software Tool For
          </h1>
        </div>
        <div className="py-6 flex justify-center items-center mt-1 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <span>
            <Typewriter
              words={[
                "Finding Projects",
                "Managing Projects",
                "Managing Developers",
                "Managing Workers",
              ]}
              loop={50}
              cursor
              cursorStyle="|"
              cursorColor="#ce53b7"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              //   onLoopDone={handleDone}
              //   onType={handleType}
            />
          </span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-zinc-400 font-light flex justify-center text-lg mb-8">
          Manage Projects using Pariyojan Faster
        </p>

        <button className="m-auto text-white font-semibold flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 h-10 md:text-lg p-4 md:p-6 rounded-full">
          Start Managing For Free
        </button>
        <p className="text-zinc-400 font-light flex justify-center text-lg mb-8 mt-8">
          No Credit card Required
        </p>
      </div>
    </div>
  );
};

export default LandingContent;
