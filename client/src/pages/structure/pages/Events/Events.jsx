import { Outlet } from "react-router-dom";

const Events = () => {
  return (
    <div>
      <h2>Événements</h2>
      <Outlet />
    </div>
  );
};

export default Events;
