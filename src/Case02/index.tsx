import Header from "../common/Header";
import Elevador from "./components/Elevator";
import styles from "./styles.module.css";

const Elevator: React.FC = () => {
  return (
    <div id={styles.elevator}>
      <Header />
      <Elevador />
    </div>
  );
};

export default Elevator;
