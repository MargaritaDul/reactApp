import React from "react";

const FormLayout = ({ inputValue, handleInputChange }) => {
  return (
    <div>
      <label>
        <p>My input</p>
        <input value={inputValue} type="text" onChange={handleInputChange} />
      </label>
    </div>
  );
};

export default FormLayout;
