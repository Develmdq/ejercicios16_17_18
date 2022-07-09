import { useEffect } from "react";
import { Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TasksPage";
import TasksDetailPage from "./pages/tasks/TasksDetailPage";







const AppRoutingOne = () => {
 
const logged = false

function RequireAuth() {
  if (!logged) {
   
    return <Navigate to="/login" />;
    // return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // return children;
}




  return (
    <div>
      <aside>
        <Link to="/">|| HOME |</Link>
        <Link to="/about">| ABOUT |</Link>
        <Link to="/faqs">| FAQs ||</Link>
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<AboutPage />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TasksDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppRoutingOne;
