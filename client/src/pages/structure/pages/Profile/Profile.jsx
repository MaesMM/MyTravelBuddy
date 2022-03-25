import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profil Public</h2>
      <Outlet />
    </div>
  );
};

export default Profile;
