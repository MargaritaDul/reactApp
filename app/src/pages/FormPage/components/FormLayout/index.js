import React from "react";

const FormLayout = ({ formValues, handleInputChange, onSubmit }) => {
  return (
    <div>
      <label>
        <p>Name</p>
        <input
          name="name"
          value={formValues.name}
          type="text"
          onChange={handleInputChange}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          name="password"
          value={formValues.password}
          type="password"
          onChange={handleInputChange}
        />
      </label>
      <label>
        <p>Checkbox</p>
        <input
          name="isChecked"
          value={formValues.isChecked}
          checked={formValues.isChecked}
          type="checkbox"
          onChange={handleInputChange}
        />
      </label>
      <div>
        <button onClick={onSubmit}>Show Values</button>
      </div>
    </div>
  );
};

export default FormLayout;
