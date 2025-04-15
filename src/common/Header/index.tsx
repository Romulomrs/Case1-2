import Button from "../Button";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <section id={styles.header}>
      <Button color="black" link="/" text="Voltar para a Home" />
      <Button
        link="/vending-machine"
        text="Case 01 - Vending Machine"
        color="#45a049"
      />
      <Button link="/elevator" text="Case 02 - Elevador" color="#33a5ff" />
    </section>
  );
};

export default Header;
