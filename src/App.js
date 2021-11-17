import Form from "./components/Form";
import Postregister from "./components/Postregister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import useForm from "./validateInfo/useForm";
import validate from "./validateInfo/validate";

const App = () => {
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
    age: "",
    address: "",
  });
  const { handleChange, handleSubmit } = useForm({
    setValues,
    setErrors,
    values,
    errors,
    validate,
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/Form"
            element={
              <Form
                errors={errors}
                values={values}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            exact
            path="/Greet"
            element={<Postregister values={values} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
