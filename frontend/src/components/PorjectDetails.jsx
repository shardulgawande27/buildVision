import React from "react";
import Select from "react-select";

const PorjectDetails = ({ formData, setFormData }) => {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 mt-4">
      <div className="flex  w-[100%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow px-5 mt-2 text-base font-medium leading-6 text-slate-50 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div>Project Name</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white w-[100%]  bg-transparent placeholder:text-zinc-500"
              placeholder=" Enter the name of the project"
              type="text"
              value={formData.projectName}
              onChange={(event) =>
                setFormData({ ...formData, projectName: event.target.value })
              }
            />
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div> Location</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 w-[100%]  bg-transparent"
              placeholder="Location"
              type="text"
            />
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div>CTS</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 w-[100%] bg-transparent"
              placeholder="Cts no / fP/7/12 no"
              type="text"
            />
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div>Total Member in the society</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 w-[100%]  bg-transparent"
              placeholder="Enter a number"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col grow px-5 mt-2 text-base font-medium leading-6 text-slate-50 max-md:mt-10 max-md:max-w-full">
          <div className="flex  flex-col flex-nowrap w-[100%]">
            <div className="max-md:max-w-full ">Room type and details</div>
            <div className="flex">
              <Select
                // options={selectRole}
                placeholder=" Type"
                // value={selectedRole}
                // onChange={(selectedRole) => handleSelect(selectedRole)}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    background: "transparent",
                    border: state.isFocused ? "" : "",
                    width: "180%",
                    marginTop: "10px",
                    height: "65px",
                    color: "",
                    "&:hover": {
                      background: "",
                    },
                  }),
                  menu: (provided) => ({
                    ...provided,
                    width: "150%",
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

              <input
                className="justify-center items-start h-[65px] px-5 mt-2.5 rounded-md border border-solid border-slate-50 text-zinc-500 w-[50%]  bg-transparent ml-[70px]"
                placeholder="Enter a number"
                type="text"
              />
              <input
                className="justify-center items-start h-[65px] px-5 mt-2.5 rounded-md border border-solid border-slate-50 text-zinc-500 w-[50%]  bg-transparent ml-[15px]"
                placeholder="Enter a number"
                type="text"
              />
            </div>
            <div className="flex justify-center items-center px-2 py-1 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 h-[40px] cursor-pointer w-[25%] ml-[75%] mt-6">
              <label
                htmlFor="upload-input"
                className="flex items-center cursor-pointer w-[135px]"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0004 3.83331C10.4607 3.83331 10.8338 4.20641 10.8338 4.66665V16.3333C10.8338 16.7936 10.4607 17.1666 10.0004 17.1666C9.54021 17.1666 9.16711 16.7936 9.16711 16.3333V4.66665C9.16711 4.20641 9.54021 3.83331 10.0004 3.83331Z"
                    fill="#151515"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.33374 10.5C3.33374 10.0398 3.70684 9.66669 4.16707 9.66669H15.8337C16.294 9.66669 16.6671 10.0398 16.6671 10.5C16.6671 10.9603 16.294 11.3334 15.8337 11.3334H4.16707C3.70684 11.3334 3.33374 10.9603 3.33374 10.5Z"
                    fill="#151515"
                  />
                </svg>
                <span>add image(s)</span>
              </label>
              <input
                id="upload-input"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  uploadFile(e);
                }}
              />
            </div>
          </div>
          <div className="flex  flex-col flex-nowrap w-[100%]">
            <div className="max-md:max-w-full ">fedration</div>
            <div className="flex gap-5">
              <div className="flex items-center gap-5 justify-center  h-[65px] px-5 mt-2.5 rounded-md border border-solid border-slate-50 text-zinc-500 w-[20%]  bg-transparent">
                <label htmlFor="PD-yes" className="text-white">
                  yes
                </label>
                <input
                  id="PD-yes"
                  name="PD-option"
                  placeholder="Enter a number"
                  className="w-[50px]"
                  type="radio"
                />
              </div>

              <div className="flex items-center gap-5 justify-center  h-[65px] px-5 mt-2.5 rounded-md border border-solid border-slate-50 text-zinc-500 w-[20%]  bg-transparent">
                <label htmlFor="PD-no" className="text-white">
                  No
                </label>
                <input
                  id="PD-no"
                  name="PD-option"
                  placeholder="Enter a number"
                  className="w-[50px]"
                  type="radio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorjectDetails;
