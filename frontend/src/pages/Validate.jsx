import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import api from "../api/api";
import { useLocation, useNavigate } from 'react-router-dom';
import userServices from "../api/userServices";
import {TokenService} from "../api/tokenService";




const Validate = ({route}) => {

  console.log(route, "route >>>>>>>>>>>>>>>>>>>")

  const navigate = useNavigate()

  let user_email = sessionStorage.getItem('user_email')

  console.log(user_email, "user_email >>>>>>>>>>>>>>>>>>")


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

      

      userServices.VerifyOtp({
        user_email : user_email,
        user_otp : otp.join("")
      })
      .then((response) => {
        console.log("response from verify Otp >>>>>>>>>>", response.data);

        TokenService.saveToken(response.data.data.token)
        navigate('/')
      })
      .catch((error) => {
        console.log("Error processing data>>>>>>>>>>", error);
      });
        

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

        <button onClick={sendData}  className="justify-center self-end px-5 py-2  text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10 m-auto">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Validate;
