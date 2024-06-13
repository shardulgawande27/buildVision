import React, { useEffect, useState } from "react";
import PorjectDetails from "./PorjectDetails";
import Committe from "./Committee";
import Photo from "./Photo";
import { useDispatch, useSelector } from "react-redux";
import { addProjectSteps } from "../store/project/projectActions";

const Form = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state);
  console.log(form, "This is the form value");
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    projectName: "",
    ctsNo: "",
    totalMember: "",
    roomType: "",
    numberOfRooms: "",
    squareM: "",
    federation: "Y",
    chairmanName: "",
    chairmanMobile: "",
    secretaryName: "",
    secretaryMobile: "",
    treasurerName: "",
    treasurerMobile: "",
  });

  useEffect(() => {
    if (form.project.project_form_step_1) {
      setFormData(form.project.project_form_step_1);
    }
  }, []);

  const forms = ["ProjectDetails", "AreaForm"];

  const saveStep1 = () => {
    setPage((currPage) => currPage + 1);

    dispatch(addProjectSteps({ formData, page }));
    console.log(
      formData,
      "This is the formData value after submit>>>>>>>>>>>>>>>>>>>>"
    );
  };

  const displayPage = () => {
    if (page == 1) {
      return <PorjectDetails formData={formData} setFormData={setFormData} />;
    } else if (page == 2) {
      return <Committe formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div style={{ color: "white" }}>
      {/* <h1>{forms[page]}</h1> */}
      {/* details section bar */}
      <div className="flex gap-5 px-5 text-xl font-medium text-slate-50 mt-12">
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => setPage(1)}
        >
          <div>Project Details</div>
          {page == 1 && (
            <div className="shrink-0 mt-2 bg-indigo-600 border-indigo-600 border-solid border-[3px] h-[3px]" />
          )}
        </div>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => setPage(2)}
        >
          <div>Committee Details</div>
          {page == 2 && (
            <div className="shrink-0 mt-2 bg-indigo-600 border-indigo-600 border-solid border-[3px] h-[3px]" />
          )}
        </div>
      </div>

      {displayPage()}
      <div className="flex justify-between px-5 mb-4">
        <button
          disabled={page == 1}
          onClick={() => setPage((currPage) => currPage - 1)}
          className="justify-center self-end px-5 py-3 mt-14 text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10"
        >
          Previous
        </button>
        <button
          disabled={page == forms.length - 2}
          onClick={() => {
            saveStep1();
          }}
          className="justify-center self-end px-5 py-3 mt-14 text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10"
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default Form;
