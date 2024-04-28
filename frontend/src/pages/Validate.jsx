import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import api from "../api/api";


const Validate = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      refs[index - 1].current.focus();
    }
  };

  const sendData = async () =>{
    try {
        
        // const response = api.post("/api/users/verifyUserWithOtp",{user_opt:otp, user_email:})

    } catch (error) {
        
    }
  }

  return (
    <div className="bg-[#17181F] h-screen flex justify-center items-center">
      <div className="border border-solid border-slate-50 rounded-lg w-[25%] text-white py-10 m-auto flex flex-col gap-8">
        <p className="m-auto">OTP is send to your provided email</p>
        {/* input section */}
        <div className="opt-input-section flex gap-3 m-auto">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              className="w-10 border-b border-white bg-transparent outline-none text-center text-white"
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={refs[index]}
              maxLength={1}
            />
          ))}
        </div>

        <button className="justify-center self-end px-5 py-2  text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10 m-auto">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Validate;
