import React, { useState, useEffect } from "react";
import MultiselectDropdown from "../components/MultiDropdown";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import userServices from "../api/userServices";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

const Signup = () => {
  const nevigateTo = useNavigate();

  const notify = (massege) => toast(massege);

  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    phoneNumber: "",
    fName: "",
    lName: "",
    password: "",
    cPassword: "",
  });

  console.log(formData, "formdata >>>>>>>>>>>>>>>>>>>>>>>");
  const [selectedRole, setSelectRole] = useState(null);
  const [signUpErrorMassege, setSignUpErrorMassege] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("formData on submmit >>>>>>>>>>>>>>>", formData);

    try {
      console.log(formData, "formData");

      let userDataToInsert = {};

      userDataToInsert.u_user_role_id = 1;
      userDataToInsert.u_user_email = formData.email;
      userDataToInsert.u_user_mobile = formData.phoneNumber;
      userDataToInsert.u_user_pass = formData.password;
      userDataToInsert.u_user_fist_name = formData.fName;
      userDataToInsert.u_user_last_name = formData.lName;
      userDataToInsert.u_user_address = formData.address;

      userServices
        .RegisterUser(userDataToInsert)
        .then((response) => {
          console.log("response from register >>>>>>>>>>", response);

          sessionStorage.setItem("user_email", formData.email);

          nevigateTo("/validateUser", {
            email: "test",
          });
        })
        .catch((error) => {
          console.log("Error processing data>>>d>>>>>>>", error);
          notify(error.response.data.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };

  const handleSelect = (role) => {
    setSelectRole(role);
    setFormData((prevData) => ({
      ...prevData,
      role: role.value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const selectRole = [
    {
      value: "Developer1",
      label: "Developer1",
    },
    {
      value: "Contractor1",
      label: "Contractor1",
    },
    {
      value: "PMC1",
      label: "PMC1",
    },
  ];

  const selectnames = [
    {
      value: "Developer",
      label: "Developer",
    },
    {
      value: "Consultant",
      label: "Contractor",
    },
    {
      value: "PMC",
      label: "PMC",
    },
  ];

  return (
    <>
      <div className="bg-[#000937]">
        <ToastContainer />
        <div className="flex flex-col lg:flex-row">
          <div className="hidden lg:block lg:basis-1/2 px-3 lg:px-10   ">
            <div className="bg-[#5925DC] p-5 px-10 rounded-md  mt-12">
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
            <div className="mt-5">
              <div className="text-white font-semibold text-[24px] lg:text-[32px] leading-[41px] ">
                Create your account with us below
              </div>
              <div className="pt-2 flex items-center">
                <div className="flex justify-center gap-2 pt-5 text-white text-sm text-center">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="text-[#7A5AF8] hover:underline font-semibold"
                  >
                    Login
                  </Link>
                </div>
              </div>
              <div className="bg-transparent py-5  pr-5 lg:pr-12 rounded-md">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="role">
                      You’re creating an account as?
                    </label>
                    <Select
                      options={selectRole}
                      placeholder="Select a role"
                      value={selectedRole}
                      onChange={(selectedRole) => handleSelect(selectedRole)}
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          background: "transparent",
                          border: state.isFocused ? "" : "",
                          width: "61%",
                          color: "",
                          "&:hover": {
                            background: "",
                          },
                        }),
                        menu: (provided) => ({
                          ...provided,
                          width: "61%",
                          background: "#5925DC",
                          color: "#FFFFFF",
                          "&:hover": {
                            background: "#5925DC",
                          },
                        }),
                        option: (provided, state) => ({
                          ...provided,

                          background: state.isSelected ? "#5925DC" : null,
                          "&:hover": {
                            background: "#5925DC",
                          },
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          color: "#FFFFFF",
                          "&:hover": {
                            background: "none",
                          },
                        }),
                        placeholder: (provided) => ({
                          ...provided,
                          color: "#686677",
                        }),
                      }}
                    />

                    {/* <select
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
                    </select> */}
                  </div>
                  {/* <div className="mb-4 lg:mb-10">
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
                  </div> */}
                  <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="email">
                      First Name
                    </label>
                    <input
                      className="shadow appearance-none bg-transparent border rounded w-full p-2 text-white placeholder-[#686677]leading-tight focus:outline-none focus:shadow-outline"
                      id="fName"
                      name="fName"
                      placeholder="Enter your First Name"
                      autoComplete="off"
                      value={formData.fName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="email">
                      Last Name
                    </label>
                    <input
                      className="shadow appearance-none bg-transparent border rounded w-full p-2 text-white placeholder-[#686677]leading-tight focus:outline-none focus:shadow-outline"
                      id="lName"
                      name="lName"
                      placeholder="Enter your last name"
                      autoComplete="off"
                      value={formData.lName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="shadow appearance-none bg-transparent border rounded w-full p-2 text-white placeholder-[#686677]leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="email">
                      Phone No.
                    </label>
                    <input
                      className="shadow appearance-none bg-transparent border rounded w-full p-2 text-white placeholder-[#686677]leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      name="phoneNumber"
                      placeholder="Enter your mobile number"
                      autoComplete="off"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="email">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none bg-transparent border rounded w-full p-2 text-white placeholder-[#686677]leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                      placeholder="Enter your last name"
                      autoComplete="off"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="block text-white mb-2" htmlFor="email">
                      Select your Skills
                    </label>
                    <MultiselectDropdown
                      options={selectnames}
                      placeholder="Search skills here..."
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="email">
                      Confirm Password
                    </label>
                    <input
                      className="shadow appearance-none bg-transparent border rounded w-full py-3 px-3 text-white placeholder-[#686677]leading-tight focus:outline-none focus:shadow-outline"
                      id="cPassword"
                      name="cPassword"
                      placeholder="Confirm password"
                      autoComplete="off"
                      value={formData.cPassword}
                      onChange={handleChange}
                    />
                  </div> */}
                  <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="email">
                      Address
                    </label>
                    <input
                      className="shadow appearance-none bg-transparent border rounded w-full p-2 text-white placeholder-[#686677]leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      name="address"
                      placeholder="Enter your Address"
                      autoComplete="off"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-center items-center lg:justify-start">
                    <button
                      className=" bg-[#5925DC] text-white  p-2 px-10 font-normal rounded focus:outline-none focus:shadow-outline flex gap-5"
                      type="submit"
                    >
                      <span>{isLoading && <Loader />}</span>
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

export default Signup;
