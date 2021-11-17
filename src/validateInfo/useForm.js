// import { useNavigate } from "react-router";
const useForm = ({ setValues, setErrors, values, errors, validate }) => {
  // const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors(
      validate({
        ...values,
        [name]: value,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };
  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
