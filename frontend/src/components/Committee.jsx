import React from "react";

const Committee = ({ formData, setFormData }) => {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 ml-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-[100%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-10 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">Chairman Name</div>
          <input
            className="p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
            placeholder="Chairman Name"
            type="text"
            value={formData.chairmanName}
            onChange={(event) =>
              setFormData({ ...formData, chairmanName: event.target.value })
            }
          />
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Chairman mobile number</div>
          <input
            className="p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
            placeholder="Chairman mobile number"
            type="text"
            value={formData.chairmanMobile}
            onChange={(event) =>
              setFormData({ ...formData, chairmanMobile: event.target.value })
            }
          />
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Secretary Name</div>
          <input
            className="p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
            placeholder="Secretary Name"
            type="text"
            value={formData.secretaryName}
            onChange={(event) =>
              setFormData({ ...formData, secretaryName: event.target.value })
            }
          />
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Secretary Mobile No</div>
          <input
            className="p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
            placeholder="Secretary Mobile No"
            type="text"
            value={formData.secretaryMobile}
            onChange={(event) =>
              setFormData({ ...formData, secretaryMobile: event.target.value })
            }
          />
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Treasurer Name</div>
          <input
            className="p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
            placeholder="Treasurer Name"
            type="text"
            value={formData.treasurerName}
            onChange={(event) =>
              setFormData({ ...formData, treasurerName: event.target.value })
            }
          />
        </div>
        <div className="flex flex-col mt-10 max-md:max-w-full">
          <div> Treasurer Mobile No</div>
          <input
            className="p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
            placeholder=" Treasurer Mobile No"
            type="text"
            value={formData.treasurerMobile}
            onChange={(event) =>
              setFormData({ ...formData, treasurerMobile: event.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Committee;
