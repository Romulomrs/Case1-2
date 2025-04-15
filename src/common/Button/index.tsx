import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface IButtonProps {
  hoveredButton?: string | null;
  link: string;
  color: string;
  text: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  text,
  link,
  color,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "white" }}>
      <button
        className={styles.button}
        style={{
          backgroundColor: color,
        }}
        onMouseEnter={() => onMouseEnter}
        onMouseLeave={() => onMouseLeave}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
