import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.module.css";

function Main() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div id={styles.mainScreen}>
      <nav id={styles.nav}>
        <button
          className={styles.button}
          style={{
            backgroundColor:
              hoveredButton === "maquina" ? "#45a049" : "#4CAF50",
            transform: hoveredButton === "maquina" ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredButton("maquina")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Link
            to="/vending-machine"
            style={{ textDecoration: "none", color: "white" }}
          >
            Case 01 - Vending Machine
          </Link>
        </button>

        <button
          className={styles.button}
          style={{
            backgroundColor:
              hoveredButton === "elevador" ? "#007B9E" : "#008CBA",
            transform:
              hoveredButton === "elevador" ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredButton("elevador")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Link
            to="/elevator"
            style={{ textDecoration: "none", color: "white" }}
          >
            Case 02 - Elevador
          </Link>
        </button>
      </nav>
    </div>
  );
}

export default Main;
