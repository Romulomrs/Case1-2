import React from "react";
import styles from "./styles.module.css";

interface CabinProps {
    top: any;
    p: number;
  }

const Cabin: React.FC<CabinProps> = ({ top, p }) => {
    return (
        <div id={styles.cabin} style={{ top }}>
        <div id={styles.door} style={{ width: p }}></div>
      </div>
    );
  };
  
  export default Cabin;