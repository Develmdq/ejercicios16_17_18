import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import TaskListComponent from "../../components/container/TaskListComponent";

const TasksPage = () => {
  const navigate = useNavigate();
  const { userName } = useParams();

  const logout = () => {
    navigate("/");
    sessionStorage.removeItem("credentials");
  };
  return (
    <>
      <h1>TasksPage for {userName}</h1>
      <Button onClick={logout} variant="contained">
        Logout
      </Button>
      <TaskListComponent />
    </>
  );
};

export default TasksPage;
