import styles from './styles.module.css';

interface MoneyProps {
    value: number;
    onClick?: () => void;
}

const Money: React.FC<MoneyProps> = ({value, onClick})  => {
    return (
        <span className={styles.span} onClick={onClick}>
            <img src={`src/assets/dinheiro/${value}-real.png`} alt={`${value} Real`} className={styles.moneyBill} />
        </span>
    )
}

export default Money;