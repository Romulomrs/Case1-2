import React from "react";
import styles from "./styles.module.css";

interface ElevatorButtonProps {
    value: string;
    onClick: () => void;
  }

const ElevatorButton: React.FC<ElevatorButtonProps> = ({ value, onClick }) => {
    return (
        <div id={styles.btn} onClick={onClick}><h2>{value}</h2></div>
    );
  };
  
  export default ElevatorButton;