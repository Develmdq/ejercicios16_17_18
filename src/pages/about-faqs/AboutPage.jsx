import {useLocation, useNavigate  } from "react-router-dom";

const AboutPage = () => {
  
  const location = useLocation()
  const navigate = useNavigate();

  

  return (
    <>
      <h1>About | FAQs</h1>
      <div>
        <button onClick={() => navigate("/")}>Go To Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
}

export default AboutPage
