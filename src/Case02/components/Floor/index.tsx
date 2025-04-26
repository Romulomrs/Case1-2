import React from "react";
import styles from "./styles.module.css";

interface FloorProps {
    id: string;
  }

const Floor: React.FC<FloorProps> = ({ id }) => {
    return (
        <div id={styles[id]} className={styles.floor}></div>
    );
  };
  
  export default Floor;