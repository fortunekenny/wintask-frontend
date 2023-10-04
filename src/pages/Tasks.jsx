import { Outlet } from "react-router-dom";

const Tasks = () => {
  return (
    <div>
      <h2>Tasks</h2>
      <Outlet />
    </div>
  );
};

export default Tasks;
