import React, { useState } from "react";
import PorjectDetails from "./PorjectDetails";
import Committe from "./Committee";
import Photo from "./Photo";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    projectArea: "",
    chairmanName: "",
    chairmanMobile: "",
    secretaryName: "",
    secretaryMobile: "",
    treasurerName: "",
    treasurerMobile: "",
  });
  const forms = ["ProjectDetails", "AreaForm", "Photos"];

  const displayPage = () => {
    if (page == 0) {
      return <PorjectDetails formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <Committe formData={formData} setFormData={setFormData} />;
    } else {
      return <Photo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div style={{ color: "white" }}>
      {/* <h1>{forms[page]}</h1> */}
      {/* details section bar */}
      <div className="flex gap-5 px-5 text-xl font-medium text-slate-50 mt-12">
        <div className="flex flex-col">
          <div>Project Details</div>
          {page == 0 && (
            <div className="shrink-0 mt-2 bg-indigo-600 border-indigo-600 border-solid border-[3px] h-[3px]" />
          )}
        </div>
        <div className="flex flex-col">
          <div>Committee Details</div>
          {page == 1 && (
            <div className="shrink-0 mt-2 bg-indigo-600 border-indigo-600 border-solid border-[3px] h-[3px]" />
          )}
        </div>
      </div>

      {displayPage()}
      <div className="flex justify-between px-5">
        <button
          disabled={page == 0}
          onClick={() => setPage((currPage) => currPage - 1)}
          className="justify-center self-end px-5 py-3 mt-24 text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10"
        >
          Previous
        </button>
        <button
          disabled={page == forms.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
          className="justify-center self-end px-5 py-3 mt-24 text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10"
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default Form;
