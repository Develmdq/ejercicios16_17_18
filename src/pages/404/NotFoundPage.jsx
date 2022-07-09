import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Page not found</h1>
      <button onClick={() => navigate('/')}>Go Back To Home</button>
    </>
  );
};

export default NotFoundPage;
