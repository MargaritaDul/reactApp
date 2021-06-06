import { useState, useCallback } from "react";
import FormLayout from "../components/FormLayout";

const FormPageContainer = () => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = useCallback((event) => {
    console.log(event.target.value);
    setinputValue(event.target.value);
  }, []);
  return (
    <FormLayout inputValue={inputValue} handleInputChange={handleInputChange} />
  );
};

export default FormPageContainer;
