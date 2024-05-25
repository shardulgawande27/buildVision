import React from "react";

const GetCommittee = ({ formData, setFormData }) => {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 ml-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-[100%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-10 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">Chairman Name</div>
          <p className="mt-4 text-xl">{formData.chairmanName}</p>
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Chairman mobile number</div>
          <p className="mt-4 text-xl">{formData.chairmanMobile}</p>
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Secretary Name</div>
          <p className="mt-4 text-xl">{formData.secretaryName}</p>
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Secretary Mobile No</div>
          <p className="mt-4 text-xl">{formData.secretaryMobile}</p>
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Treasurer Name</div>
          <p className="mt-4 text-xl">{formData.treasurerName}</p>
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Treasurer Mobile No</div>
          <p className="mt-4 text-xl">{formData.treasurerMobile}</p>
        </div>
      </div>
    </div>
  );
};

export default GetCommittee;
