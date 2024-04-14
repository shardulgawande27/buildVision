import React, { useState } from "react";
import Select from "react-select";

const MultiDropdown = ({ options, placeholder }) => {
  const [selectedOption, setSelectedOptions] = useState([]);
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  // console.log("setSelectedOptions", setSelectedOptions);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "transparent", // Set background to transparent
      border: state.isFocused ? "1px solid #7A5AF8" : "1px solid #CBD5E0", // Adjust border color
      borderRadius: "0", // Remove border radius
      outlineFocus: "none", // Remove outline focus

      "&:hover": {
        border: "1px solid #7A5AF8", // Adjust border color on hover
      },
    }),
    menu: (provided) => ({
      ...provided,
      background: "", // Set background to transparent
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)", // Add box shadow for the menu
      borderRadius: "0", // Remove border radius
    }),
  };

  return (
    <div>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        isMulti={true}
        styles={customStyles}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MultiDropdown;
