import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h1>HomePage</h1>
      <h2>Access to your Task</h2>
      <button onClick={() => navigate("/profile")}>Go To Profile</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default HomePage;
