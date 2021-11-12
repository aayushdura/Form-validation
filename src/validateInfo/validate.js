const errors = {
  username: "",
  password: "",
  confpassword: "",
  email: "",
  age: 0,
  address: "",
};
const validatefn = (values) => {
  if (!values.username.trim()) {
    errors.username = "Username Required";
  } else if (values.username.length < 4) {
    errors.username = "Username Should be more than 4";
  }
  if (!values.email) {
    errors.email = "Email Required";
  } else if (values.email.length < 6) {
    errors.email = "Invalid email";
  }
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 6) {
    errors.password = "Password Should be more than 6";
  }
  if (!values.confpassword) {
    errors.confpassword = "Password Required";
  } else if (values.confpassword !== values.password) {
    errors.confpassword = "Password Not matching";
  }
  if (!values.age || values.age < 18) {
    errors.age = "Invalid Age should be over 18";
  }
  if (!values.address) {
    errors.address = "Address Required";
  } else if (values.address.length < 4) {
    errors.address = "Invalid Address";
  }
};
export default validatefn;
