import React from "react";
import styles from './styles.module.css';

interface MachineButtonProps {
    value: 'a' | 'b' | 'c';
    color: 'greenColor' | 'redColor' | 'blueColor';
    onClick?: () => void;
}

const MachineButton: React.FC<MachineButtonProps> = ({value, color, onClick}) => {
    return (
        <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
            {value.toUpperCase()}
        </button>
    )
}

export default MachineButton;