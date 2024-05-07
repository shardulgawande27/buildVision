import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProjectSteps } from "../store/project/projectActions";

const AreaForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    prCardArea: "",
    tIlrArea: "",
    physicalSurveyArea: "",
  });

  const saveArea = () => {
    const page = 3;
    // return console.log("this is the areaForm and Page", { area, page });
    console.log({ formData, page });
    dispatch(addProjectSteps({ formData, page }));
  };

  const submitArea = () => {
    console.log(formData);
  };

  useEffect(() => {
    console.log("This is the formData in AreaForm", formData);
  }, []);

  return (
    <div style={{ color: "white" }} className="w-[100%]">
      <div className="flex gap-5 px-5 text-xl font-medium text-slate-50 mt-12">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[200%] max-md:ml-0 max-md:w-full">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 mt-2 text-base font-medium leading-6 text-slate-50 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="mt-10 max-md:max-w-fulll">
                  {" "}
                  Plot area as per p.r card
                </div>
                <input
                  className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
                  placeholder=" plot area as per p.r card"
                  value={formData.prCardArea}
                  onChange={(e) => {
                    setFormData({ ...formData, prCardArea: e.target.value });
                  }}
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <div className="mt-10 max-md:max-w-full">
                  Plot area as per t.i.l.r
                </div>
                <input
                  className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
                  placeholder="plot area as per t.i.l.r"
                  type="text"
                  value={formData.tIlrArea}
                  onChange={(e) => {
                    setFormData({ ...formData, tIlrArea: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="mt-10 max-md:mt-10 max-md:max-w-full">
                  Plot area as per physical survey
                </div>
                <input
                  className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
                  placeholder="plot area as per physical survey"
                  type="text"
                  value={formData.physicalSurveyArea}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      physicalSurveyArea: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="justify-center self-end px-5 py-3 mt-24 text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10 float-right"
          type="submit"
          onClick={() => {
            saveArea();
          }}
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default AreaForm;
