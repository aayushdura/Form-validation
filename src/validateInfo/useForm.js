import { useState } from "react";
const useForm = (validatefn) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confpassword: "",
    email: "",
    age: 0,
    address: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confpassword: "",
    email: "",
    age: 0,
    address: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validatefn(values));
  };

  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
