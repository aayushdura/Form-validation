const errors = {
  username: "",
  password: "",
  confpassword: "",
  email: "",
  age: "",
  address: "",
};
const validatefn = (values) => {
  if (values.username === "") {
    errors.username = "Username Required";
  } else if (values.username.length < 4) {
    errors.username = "Username Should be more than 4";
  } else {
    errors.username = "";
  }

  if (values.email === "") {
    errors.email = "Email Required";
  } else if (values.email.length < 6) {
    errors.email = "Invalid email";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Password Required";
  } else if (values.password.length < 6) {
    errors.password = "Password Should be more than 6";
  } else {
    errors.password = "";
  }

  if (values.confpassword === "") {
    errors.confpassword = "Password Required";
  } else if (values.password !== values.confpassword) {
    errors.confpassword = "Password Not matching";
  } else {
    errors.confpassword = "";
  }

  if (!values.age) {
    errors.age = "Age is required";
  } else if (parseFloat(values.age) <= 18) {
    errors.age = "Age is not suitable";
  } else {
    errors.age = "";
  }

  if (values.address === "") {
    errors.address = "Address Required";
  } else if (values.address.length < 4) {
    errors.address = "Invalid Address";
  } else {
    errors.address = "";
  }
  return errors;
};
export default validatefn;
