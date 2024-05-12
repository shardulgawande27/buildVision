import React from "react";

const LandingBottom = () => {
  const Testimonials = Array.from({ length: 4 });

  return (
    <div>
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Testimonials.map((index) => (
            <div
              key={index}
              className="rounded-lg border shadow-sm bg-[#192339] border-none text-white"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">Shardul</p>
                    <p className="text-zinc-400 text-sm">Civil Engineer</p>
                  </div>
                </h3>
                <div className="p-6 pt-4 px-0">
                  This is the best application I've ever used!
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingBottom;
