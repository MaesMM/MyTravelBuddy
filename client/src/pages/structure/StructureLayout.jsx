import { Outlet } from "react-router-dom";
import styles from "./Structure.module.scss";
import Navbar from "../../components/structure/Navbar";

const StructureLayout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default StructureLayout;
