import { useNavigate } from "react-router-dom";

const ProfilePage = ({ user }) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Your Profile</h1>
      <button onClick={() => navigate('/tasks')}>Tasks</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      
    </>
  );
};

export default ProfilePage;
