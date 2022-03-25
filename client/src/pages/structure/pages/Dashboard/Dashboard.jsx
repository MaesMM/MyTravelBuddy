import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Tableau de bord</h2>
      <Outlet />
    </div>
  );
};

export default Dashboard;
