import { useState, useCallback } from "react";
import FormLayout from "../components/FormLayout";
import useForm from "../../../hooks/useFrom";

const FormPageContainer = () => {
  const [formValues, handleChange, handleReset] = useForm({
    name: "",
    password: "",
    isChecked: false,
  });

  const handleSubmit = useCallback(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <FormLayout
      formValues={formValues}
      handleInputChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default FormPageContainer;
