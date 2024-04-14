import React, { useState } from "react";
import MultiselectDropdown from "../components/MultiDropdown";
import { Link } from "react-router-dom";
const signup = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  const selectnames = [
    {
      value: "Web Developer",
      label: "Web Developer",
    },
    {
      value: "Contractor",
      label: "Contractor",
    },
    {
      value: "Business",
      label: "Business",
    },
  ];

  return (
    <>
      <div className="bg-[#000937]  h-screen">
        <div className="flex flex-col lg:flex-row">
          <div className="hidden lg:block lg:basis-1/2 px-3 lg:px-10   ">
            <div className="bg-[#5925DC]  h-screen p-5 px-10 rounded-md overflow-hidden">
              <div className="Logo pt-10">
                <div className="text-white font-bold text-2xl">Logo</div>
              </div>
              <div className="pt-32">
                <div className="text-white">
                  <span className="text-[48px] leading-[56px] font-bold">
                    Connecting Talent <br /> to Opportunities{" "}
                  </span>
                  <p className="text-lg font-normal mt-10">
                    Discover endless opportunities on FreelanceHu, where
                    talented freelancers and businesses unite. Jump right in
                    with us!
                  </p>
                </div>
              </div>
              <div className="pt-32">
                <div className="bg-[#4A1FB899] p-4 rounded-md shadow-md">
                  <div className="text-white">
                    As a freelancer, finding the right gigs can be challenging,
                    but FreelanceHub made it simple. I love the personalized job
                    recommendations and the ability to showcase my portfolio
                  </div>
                  <div className="pt-10">
                    <div className="flex gap-4">
                      <img src="http://" alt="reviiew" />
                      <div className="flex flex-col text-white">
                        <div className="text-base">Gaurav Singh</div>
                        <div className="text-xs">
                          Full Stack Developer incoming
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 px-5 lg:px-10">
            <div className="mt-10">
              <div className="text-white font-semibold text-[24px] lg:text-[32px] leading-[41px] ">
                Create your account with us below
              </div>
              <div className="pt-2 flex items-center">
                <div className="flex justify-center gap-2 pt-5 text-white dark:text-black text-sm text-center">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="text-[#7A5AF8] hover:underline font-semibold"
                  >
                    Login
                  </Link>
                </div>
              </div>
              <div className="bg-transparent py-10 pr-5 lg:pr-12 rounded-md">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 lg:mb-10">
                    <label className="block text-white mb-2" htmlFor="role">
                      You’re creating an account as?
                    </label>
                    <select
                      className="shadow  bg-transparent border rounded w-full md:w-96 py-4 px-3 text-white placeholder-[#686677] leading-tight focus:outline-none focus:shadow-outline"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select role
                      </option>
                      <option
                        value="PMC"
                        className="bg-blue-800 hover:bg-blue-900 text-white option-item"
                      >
                        As a PMC
                      </option>
                      <option
                        value="Broker"
                        className="bg-blue-800 hover:bg-blue-900 text-white option-item"
                      >
                        Broker
                      </option>
                      <option
                        value="Developer"
                        className="bg-blue-800 hover:bg-blue-900 text-white option-item"
                      >
                        Developer
                      </option>
                    </select>
                  </div>
                  <div className="mb-4 lg:mb-10">
                    <label className="block text-white mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      className="shadow appearance-none bg-transparent border rounded w-full py-3 px-3 text-white placeholder-[#686677]leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      autoComplete="off"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4 lg:mb-10">
                    <label className="block text-white mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="shadow appearance-none bg-transparent border rounded w-full py-3 px-3 text-white placeholder-[#686677]leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4 lg:mb-10">
                    <label className="block text-white mb-2" htmlFor="email">
                      Select your Skills
                    </label>
                    <MultiselectDropdown
                      options={selectnames}
                      placeholder="Search skills here..."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-center items-center lg:justify-start">
                    <button
                      className=" bg-[#5925DC] text-white  p-3 px-10 font-normal rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Create an Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
