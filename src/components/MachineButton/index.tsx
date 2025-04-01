import React from "react";
import styles from "./styles.module.css";

interface MachineButtonProps {
  value: "a" | "b" | "c";
  onClick?: () => void;
}

const MachineButton: React.FC<MachineButtonProps> = ({ value, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[value]}`} onClick={onClick}>
      {value.toUpperCase()}
    </button>
  );
};

export default MachineButton;
