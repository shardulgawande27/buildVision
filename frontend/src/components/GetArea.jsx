import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProjectSteps } from "../store/project/projectActions";

const GetArea = ({ project }) => {
  const dispatch = useDispatch();

  const [area, setArea] = useState({});
  console.log(project, "This is area>>>>>>>>>>>>>>>>>>>>>>");
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
    setArea(project);
  }, []);

  useEffect(() => {
    console.log(area, "This is area after set");
  }, [area]);
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
                <p className="mt-4 text-xl">{area.m_chairman_phone}</p>
              </div>
              <div className="flex flex-col">
                <div className="mt-10 max-md:max-w-full">
                  Plot area as per t.i.l.r
                </div>
                <p className="mt-4 text-xl">{area.plot_area_tilr}</p>
              </div>
              <div className="flex flex-col">
                <div className="mt-10 max-md:mt-10 max-md:max-w-full">
                  Plot area as per physical survey
                </div>
                <p className="mt-4 text-xl">{area.plot_area_ps}</p>
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

export default GetArea;
