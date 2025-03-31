import React, { useState } from 'react';
import styles from './styles.module.css';
import Money from '../Money';
import MachineButton from '../MachineButton';

const Vending_Machine: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleProductClick = (reference: string) => {
    setSelectedProduct(reference);
    console.log(`Produto ${reference} clicado!`);
  };

  return (
    <section id={styles.vendingMachine}>
      <div id={styles.machineBody}>
        <div id={styles.machineGlass}>

        </div>
        <div id={styles.machineControls}>
          <span id={styles.productOutput}>
          </span>
          <div id={styles.buttonsArea}>
            <MachineButton value='a' color='greenColor' onClick={() => handleProductClick('a')} />
            <MachineButton value='b' color='redColor' onClick={() => handleProductClick('b')} />
            <MachineButton value='c' color='blueColor' onClick={() => handleProductClick('c')} />
          </div>
        </div>
      </div>

      <section id={styles.moneyBills}>
        <Money value={1} />
        <Money value={2} />
        <Money value={5} />
      </section>
    </section>
  );
};

export default Vending_Machine;
