import { useParams } from "react-router-dom";

const TasksDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Task Detail Page: {id}</h1>
    </>
  );
};

export default TasksDetailPage;
