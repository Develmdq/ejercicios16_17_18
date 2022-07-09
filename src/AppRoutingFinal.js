import { Route, Routes} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
// import DashBoard from "./pages/dashboard/DashBoard";
import TasksPage from "./pages/tasks/TasksPage";
import NotFound from "./pages/404/NotFoundPage";
import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./pages/auth/RequireAuth";

const AppRoutingFinal = () => {
  // Redirctions to protect our routes

  // const loggedIn = false; //:TODO Change to values from sesionStorage

  return (
    <div>
      <AuthProvider>
        <Routes>
          {/* <Route path="/" element={<DashBoard />} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/tasks/:userName"
            element={
              <RequireAuth>
                <TasksPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default AppRoutingFinal;
