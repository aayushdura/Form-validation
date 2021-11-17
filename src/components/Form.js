import "./Form.css";
import Button from "@material-ui/core/Button";
import LoginIcon from "@mui/icons-material/Login";

// import { Link } from "react-router-dom";

const Form = (props) => {
  const { values, errors, handleChange, handleSubmit } = props;
  return (
    <div className="form-input">
      <form onSubmit={handleSubmit} className="form">
        <h1>Please provnamee correct Information</h1>
        <label className="username" htmlFor="username">
          Username:
        </label>
        <input
          name="username"
          value={values.username}
          autoComplete="off"
          onChange={handleChange}
          placeholder="Enter your Name"
        />
        {errors.username ? (
          <span style={{ color: "red" }}>{errors.username}</span>
        ) : null}
        <br />
        <br />
        <label className="username" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={values.email}
          autoComplete="off"
          onChange={handleChange}
          placeholder="Enter your Email"
        />{" "}
        {errors.email ? (
          <span style={{ color: "red" }}>{errors.email}</span>
        ) : null}
        <br />
        <br />
        <label className="password" htmlFor="password">
          Password:
        </label>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />{" "}
        {errors.password ? (
          <span style={{ color: "red" }}>{errors.password}</span>
        ) : null}
        <br />
        <br />
        <label className="password" htmlFor="confpassword">
          Confirm Password:
        </label>
        <input
          name="confpassword"
          type="password"
          value={values.confpassword}
          onChange={handleChange}
          placeholder="Re-enter your Password"
        />{" "}
        {errors.confpassword ? (
          <span style={{ color: "red" }}>{errors.confpassword}</span>
        ) : null}
        <br />
        <br />
        <label className="age" htmlFor="age">
          Age:
        </label>
        <input
          name="age"
          type="number"
          value={values.age}
          onChange={handleChange}
          placeholder="Enter your Age"
        />{" "}
        {errors.age ? <span style={{ color: "red" }}>{errors.age}</span> : null}
        <br />
        <br />
        <label className="address" htmlFor="address">
          Address:
        </label>
        <input
          name="address"
          autoComplete="off"
          value={values.address}
          onChange={handleChange}
          placeholder="Enter your Address"
        />{" "}
        {errors.address ? (
          <span style={{ color: "red" }}>{errors.address}</span>
        ) : null}
        <br />
        <br />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          endIcon={<LoginIcon />}
          onMouseOver={handleChange}
        >
          <b>Register</b>
        </Button>
        Already a member <a href="#">LogIn</a>
      </form>
    </div>
  );
};

export default Form;
