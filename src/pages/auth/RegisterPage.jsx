import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import RegisterFormik from "../../components/pure/forms/RegisterFormik";


const RegisterPage = () => {
const navigate = useNavigate();
const loginPage = () => navigate("/");

  return (
    <>
      <h1>Register Page</h1>
      <RegisterFormik />
      <Button variant="contained" onClick={loginPage}>
        Go To Login Page
      </Button>
    </>
  );
};

export default RegisterPage;
