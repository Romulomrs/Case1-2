import styles from './styles.module.css';
import { useState } from 'react';


interface MoneyProps {
    value: number;
}

const Money: React.FC<MoneyProps> = ({value})  => {
    const [balance, setBalance] = useState(0);

    return (
        <span className={styles.span}
            onClick={() => {
                setBalance(balance + value);
                alert(`Você adicionou ${value} reais! Seu saldo atual é de ${balance} reais.`);
            }}
        
        >
            <img src={`src/assets/dinheiro/${value}-real.png`} alt={`${value} Real`} className={styles.moneyBill} />
        </span>
    )
}

export default Money;