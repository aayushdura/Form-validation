import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">Hey !!!</header>
      <h2>Please Do Register</h2>
      <Link to="/Form" style={{ textDecoration: "none" }}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          endIcon={<AppRegistrationIcon />}
        >
          Go to Register page
        </Button>
      </Link>
    </div>
  );
};

export default Home;
