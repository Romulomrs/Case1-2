import { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button";

function Main() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div id={styles.mainScreen}>
      <nav id={styles.nav}>
        <Button
          link="vending-machine"
          text="Case 01 - Vending Machine"
          color="#45a049"
          hoveredButton={hoveredButton}
          onMouseEnter={() => {
            setHoveredButton("maquina");
          }}
          onMouseLeave={() => {
            setHoveredButton(null);
          }}
        />

        <Button
          link="elevator"
          text="Case 02 - Elevador"
          color="#33a5ff"
          hoveredButton={hoveredButton}
          onMouseEnter={() => {
            setHoveredButton("elevador");
          }}
          onMouseLeave={() => {
            setHoveredButton(null);
          }}
        />
      </nav>
    </div>
  );
}

export default Main;
