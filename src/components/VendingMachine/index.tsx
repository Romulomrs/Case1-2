import React, { useState } from 'react';
import styles from './styles.module.css';
import Money from '../Money';
import MachineButton from '../MachineButton';
import Product from '../Product';

const Vending_Machine: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [balance, addToBalance] = useState(0);

  const handleProductClick = (reference: string) => {
    setSelectedProduct(reference);
    alert(`Você selecionou o produto ${reference.toUpperCase()}! Clique nele para retirar.`);
  };

  const handleMoneyClick = (value: number) => {
    if (balance < 30) {
      addToBalance((prevBalance) => prevBalance + value);
      alert(`Você adicionou ${value} reais! Seu saldo atual é de ${balance + value} reais.`);
    }
    else alert('Seu limite de crédito na máquina é de 30 reais!')
  }

  return (
    <section id={styles.vendingMachine}>
      <div id={styles.machineBody}>
        <div id={styles.machineGlass}>
          <Product identifier='a' price={1} />
          <Product identifier='b' price={2} />
          <Product identifier='c' price={3} />
          <Product identifier='a' price={1} />
          <Product identifier='b' price={2} />
          <Product identifier='c' price={3} />
          <Product identifier='a' price={1} />
          <Product identifier='b' price={2} />
          <Product identifier='c' price={3} />
        </div>
        <div id={styles.machineControls}>
          <span id={styles.productOutput}>
          </span>
          <div id={styles.buttonsArea}>
            <MachineButton value='a' onClick={() => handleProductClick('a')} />
            <MachineButton value='b' onClick={() => handleProductClick('b')} />
            <MachineButton value='c' onClick={() => handleProductClick('c')} />
          </div>
        </div>
      </div>

      <section id={styles.moneyBills}>
        <Money value={1} onClick={() => handleMoneyClick(1)} />
        <Money value={2} onClick={() => handleMoneyClick(2)} />
        <Money value={5} onClick={() => handleMoneyClick(5)} />
      </section>
    </section>
  );
};

export default Vending_Machine;
