import "./Form.css";
import Button from "@material-ui/core/Button";
import LoginIcon from "@mui/icons-material/Login";
import useForm from "../validateInfo/useForm";
import validatefn from "../validateInfo/validate";
const Form = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(validatefn);
  console.log(errors.username);
  return (
    <div>
      <h1>Please provide correct Information</h1>
      <form onSubmit={handleSubmit}>
        <label className="username" htmlFor="username">
          Username:
        </label>
        <input
          id="username"
          value={values.username}
          autoComplete="off"
          onChange={handleChange}
          placeholder="Enter your Name"
        />
        {errors.username ? <span>{errors.username}</span> : null}
        <br />
        <br />
        <label className="username" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={values.email}
          autoComplete="off"
          onChange={handleChange}
          placeholder="Enter your Email"
        />
        <br />
        <br />
        <label className="password" htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <br />
        <br />
        <label className="password" htmlFor="confpassword">
          Confirm Password:
        </label>
        <input
          id="confpassword"
          type="password"
          value={values.confpassword}
          onChange={handleChange}
          placeholder="Re-enter your Password"
        />
        <br />
        <br />
        <label className="age" htmlFor="age">
          Age:
        </label>
        <input
          id="age"
          type="number"
          value={values.age}
          onChange={handleChange}
          placeholder="Enter your Age"
        />
        <br />
        <br />
        <label className="address" htmlFor="address">
          Address:
        </label>
        <input
          id="address"
          autoComplete="off"
          value={values.address}
          onChange={handleChange}
          placeholder="Enter your Address"
        />
        <br />
        <br />

        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          endIcon={<LoginIcon />}
        >
          Register
        </Button>
        <span>
          Already a member <a href="#">LogIn</a>
        </span>
      </form>
    </div>
  );
};

export default Form;
