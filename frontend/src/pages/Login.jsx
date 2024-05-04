import React, { useState } from "react";
import { Link } from "react-router-dom";
import WordsSliders from "../components/WordsSliders";
import userServices from "../api/userServices";
import Loader from "../components/Loader";
import { TokenService } from "../api/tokenService";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const navigate = useNavigate();
  const notify = (massege) => toast(massege);

  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)


  const words = [
    {
      id: 0,
      value: "Upload samples of your work to impress potential clients",
    },
    {
      id: 1,
      value: "Upload samples of your work to impress",
    },
    {
      id: 2,
      value: "Upload samples of your work to impress potential",
    },
  ];

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const Login = () =>{
    userServices.UserLogin({
      user_email :  email,
      user_password : pass
    }).then((res)=>{
      console.log(res.data, "res >>>>>>>>>>>>>>>>>>>>>>")
      if(res.data.data.status){
        notify("you are logged in")
        TokenService.saveToken(res.data.data.token);
        navigate('/home')
      }
    }).catch((err)=>{
        notify(err.response.data.message)
    })
  }

  return (
    <>
     <ToastContainer />
      <div className="bg-[#000937] h-screen lg:h-full">
        <div className="flex flex-col lg:flex-row">
          <div className="basis-1/2  px-10 md:px-16 lg:px-16 mt-10 lg:mt-20">
            <div>
              <div className="Logo text-white font-bold text-sm lg:text-lg">
                Logo
              </div>
              <div className="pt-4 md:pt-8">
                <div className="text-white ">
                  <div className="text-base lg:text-[32px] font-semibold">
                    Welcome to ASP👋
                  </div>
                  <div className="pt-4 lg:pt-4   font-normal lg:text-base">
                    Kindly fill in your details below to login to your account
                  </div>
                  <div className="inputfields">
                    <form className="pt-6 pb-8 mb-4">
                      <div className="mb-4">
                        <div className="flex flex-col self-stretch text-base font-medium leading-6 w-full ">
                          <div className="w-full text-slate-50 max-md:max-w-full">
                            Email Address
                          </div>
                          <input
                            className="justify-center items-start p-2 mt-2 w-full text-violet-50 whitespace-nowrap rounded-md border border-solid border-slate-50 max-md:max-w-full bg-transparent"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            onChange={(e)=>setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mb-6 relative">
                        <div className="flex flex-col self-stretch text-base font-medium leading-6 w-full">
                          <div className="w-full text-slate-50 max-md:max-w-full">
                            Password
                          </div>
                          <div className="flex gap-2 justify-between self-stretch p-2 mt-2 text-base font-medium leading-6 text-violet-50 whitespace-nowrap rounded-md border border-solid border-slate-50 w-full max-md:flex-wrap">
                            <input
                              className="justify-center items-start  w-full text-violet-50 whitespace-nowrap rounded-md  max-md:max-w-full bg-transparent outline-none"
                              id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              autoComplete="off"
                              onChange={(e)=>setPass(e.target.value)}
                            />

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
                      </div>
                      <div>
                        <button
                          className=" w-full justify-center items-center p-3 text-xl font-medium text-center text-white whitespace-nowrap bg-violet-500 rounded-lg"
                          type="button"
                          onClick={()=>Login()}
                        >
                          Login
                        </button>
                        <div className="flex justify-center gap-2 pt-5 text-white  text-sm text-center">
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
                          className=" flex items-center justify-center gap-4 w-full bg-transparent border border-white rounded-md  text-white   font-medium p-3 focus:outline-none focus:shadow-outline focus"
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
            <div className="relative h-full  ">
              <img
                src="/bglogin.png"
                alt="Background"
                className="w-full h-screen rounded-l-[5rem] object-cover "
              />
              <div className="absolute inset-0  rounded-l-[5rem]  flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center p-12 bg-white bg-opacity-20 max-w-[556px] max-md:px-5">
                  <div className="text-5xl font-bold text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Connecting Talent to Opportunities
                  </div>
                  <div className="mt-4 text-lg font-normal text-neutral-100 max-md:max-w-full">
                    Discover endless opportunities on FreelanceHu, where
                    talented freelancers and businesses unite. Jump right in
                    with us!
                  </div>
                </div>
                <div className="mt-10">
                  {/* <WordsSliders words={words} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
