import React, { useState } from "react";
import { Link } from "react-router-dom";
const pmclogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="bg-[#000937] h-screen ">
        <div className="flex flex-col lg:flex-row">
          <div className="basis-1/2  px-10 md:px-16 lg:px-16 mt-10 lg:mt-20">
            <div>
              <div className="Logo text-white dark:text-black font-bold text-sm lg:text-lg">
                Logo
              </div>
              <div className="pt-10 md:pt-20">
                <div className="text-white dark:text-black">
                  <div className="text-base lg:text-[32px] font-semibold">
                    Welcome to ASP👋
                  </div>
                  <div className="pt-12 lg:pt-16 font-normal lg:text-base">
                    Kindly fill in your details below to login to your account
                  </div>
                  <div className="inputfields">
                    <form className="pt-6 pb-8 mb-4">
                      <div className="mb-4">
                        <label
                          className="block text-sm font-medium mb-2 text-white dark:text-black"
                          for="email"
                        >
                          Email Address
                        </label>
                        <input
                          className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-white dark:text-black placeholder:text-white  leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          autoComplete="off"
                        />
                      </div>
                      <div className="mb-6 relative">
                        <label
                          className="block text-sm font-medium mb-2 text-white dark:text-black"
                          for="password"
                        >
                          Password
                        </label>
                        <input
                          className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-white dark:text-black placeholder:text-white  leading-tight focus:outline-none focus:shadow-outline "
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          autoComplete="off"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6">
                          <svg
                            onClick={togglePasswordVisibility}
                            className="h-6 w-6 text-gray-500 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            {showPassword ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                id="eye"
                              >
                                <g data-name="Layer 2">
                                  <g data-name="eye">
                                    <rect
                                      width="24"
                                      height="24"
                                      opacity="0"
                                    ></rect>
                                    <path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"></path>
                                    <path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"></path>
                                  </g>
                                </g>
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                id="eye"
                              >
                                <path d="M18.521 1.478a1 1 0 0 0-1.414 0L1.48 17.107a1 1 0 1 0 1.414 1.414L18.52 2.892a1 1 0 0 0 0-1.414zM3.108 13.498l2.56-2.56A4.18 4.18 0 0 1 5.555 10c0-2.379 1.99-4.309 4.445-4.309.286 0 .564.032.835.082l1.203-1.202A12.645 12.645 0 0 0 10 4.401C3.44 4.4 0 9.231 0 10c0 .423 1.057 2.09 3.108 3.497zm13.787-6.993l-2.562 2.56c.069.302.111.613.111.935 0 2.379-1.989 4.307-4.444 4.307-.284 0-.56-.032-.829-.081l-1.204 1.203c.642.104 1.316.17 2.033.17 6.56 0 10-4.833 10-5.599 0-.424-1.056-2.09-3.105-3.495z"></path>
                              </svg>
                            )}
                          </svg>
                        </div>
                      </div>
                      <div>
                        <button
                          className=" w-full bg-[#7A5AF8] hover:bg-purple-700 text-white dark:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                          type="button"
                        >
                          Login
                        </button>
                        <div className="flex justify-center gap-2 pt-5 text-white dark:text-black text-sm text-center">
                          Dont have an account with us?
                          <Link
                            to="/signup"
                            className="text-[#7A5AF8] hover:underline"
                          >
                            SignUp
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center mt-5">
                        <div className="border border-gray-300 flex-grow mr-3"></div>
                        <span className="text-white dark:text-black font-semibold">
                          OR
                        </span>
                        <div className="border border-gray-300 flex-grow ml-3"></div>
                      </div>
                      <div className="mt-5">
                        {" "}
                        <button
                          className=" flex items-center justify-center gap-4 w-full bg-transparent border border-white rounded-md  text-white  dark:text-black font-medium py-4      px-4 focus:outline-none focus:shadow-outline focus"
                          type="button"
                        >
                          Login with Google{" "}
                          <img
                            src="/socialmedia/google.png"
                            alt="Google"
                            className="shrink-0 w-8 aspect-square cursor-pointer"
                          />
                        </button>
                      </div>
                      <div className="mt-12 lg:mt-10 flex justify-center gap-x-5 ">
                        <a href="link_to_google" target="_blank">
                          <img
                            src="/socialmedia/Google.svg"
                            alt="Google"
                            className="shrink-0  aspect-square cursor-pointer "
                          />
                        </a>
                        <a href="link_to_apple" target="_blank">
                          <img
                            src="/socialmedia/Apple.svg"
                            alt="Apple"
                            className="shrink-0  aspect-square cursor-pointer "
                          />
                        </a>
                        <a href="link_to_facebook" target="_blank">
                          <img
                            src="/socialmedia/facebookicon.svg"
                            alt="Facebook"
                            className="shrink-0  aspect-square cursor-pointer"
                          />
                        </a>
                        <a href="link_to_x" target="_blank">
                          <img
                            src="/socialmedia/twittericon.svg"
                            alt="X"
                            className="shrink-0 aspect-square cursor-pointer"
                          />
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:basis-1/2">
            <div className="relative">
              <img
                src="/bglogin.png"
                alt="Background"
                className="w-full rounded-l-[5rem] h-screen"
              />
              <div className="absolute inset-0 bg-purple-600 rounded-l-[5rem] opacity-75 flex flex-col items-center justify-center">
                <div className="text-white  dark:text-black  bg-[#FFFFFF33] p-10 min-w-[500px] w-[px]">
                  <span className="text-[48px] leading-[56px] font-bold ">
                    Connecting Talent <br /> to Opportunities{" "}
                  </span>
                  <p className="text-lg font-normal mt-2">
                    Discover endless opportunities on FreelanceHu, where
                    talented freelancers and businesses unite. Jump right in
                    with us!
                  </p>
                </div>
                <div className="text-white  dark:text-black mt-32">
                  Upload samples of your work to impress potential clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pmclogin;
