import React, { useState } from 'react';
import styles from './styles.module.css';
import Money from '../Money';

const Vending_Machine: React.FC = () => {

  return (
    <section id={styles.vendingMachine}>
      <div id={styles.machineBody}>
        <div id={styles.machineGlass}>
          
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
