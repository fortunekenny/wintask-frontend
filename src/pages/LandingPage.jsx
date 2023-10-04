import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>LandingPage</h1>
      <Outlet />
    </div>
  );
};

export default LandingPage;
