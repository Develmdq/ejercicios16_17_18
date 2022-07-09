import Button from "@mui/material/Button";
import Copyright from "../../components/pure/Copyright";
import { useNavigate } from "react-router-dom";
import TaskPage from '../tasks/TasksPage'

const DashBoard = () => {
  const navigate = useNavigate();
  const logout = () => navigate("/login");

  return (
    <>
      <Copyright />
      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default DashBoard;
