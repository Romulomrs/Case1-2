import React, { useState } from 'react';
import styles from './styles.module.css';
import Money from '../Money';
import MachineButton from '../MachineButton';
import Product from '../Product';

const Vending_Machine: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [balance, setBalance] = useState(0);
  const productsList = [{
    reference: 'a',
    price: 6,
  },
  {
    reference: 'b',
    price: 7,
  },
  {
    reference: 'c',
    price: 8,
  }]

  const products = productsList.map((product) => {
    return (
      <div className={styles.product} key={product.reference}>
        <Product
        key={product.reference}
        identifier={product.reference}
        price={product.price}
        onClick={() => handleProductClick(product.reference)}
      />
      <Product
        key={product.reference}
        identifier={product.reference}
        price={product.price}
        onClick={() => handleProductClick(product.reference)}
      />
      <Product
        key={product.reference}
        identifier={product.reference}
        price={product.price}
        onClick={() => handleProductClick(product.reference)}
      />
      </div>
      
    )
  })

  const handleProductClick = (reference: string) => {
    setSelectedProduct(reference);
    alert(`Você selecionou o produto ${reference.toUpperCase()}! Clique nele para retirar.`);
  };

  const handleMoneyClick = (value: number) => {
    if (balance < 30) {
      setBalance((prevBalance) => prevBalance + value);
      alert(`Você adicionou ${value} reais! Seu saldo atual é de ${balance + value} reais.`);
    }
    else alert('Seu limite de crédito na máquina é de 30 reais!')
  }

  const handleExtractionClick = () => {
    switch (selectedProduct) {


    }
  }

  return (
    <section id={styles.vendingMachine}>
      <div id={styles.machineBody}>
        <div id={styles.machineGlass}>
          {products}
        </div>
        <div id={styles.machineControls}>
          <span id={styles.productOutput}>
          </span>
          <div id={styles.buttonsArea}>
            <MachineButton value='a' onClick={() => handleProductClick('a')} />
            <MachineButton value='b' onClick={() => handleProductClick('b')} />
            <MachineButton value='c' onClick={() => handleProductClick('c')} />
          </div>
          <span id={styles.balance}>
              {`TOTAL: R$${balance}`}
          </span>
          <button id={styles.extraction}> 
            RETIRAR
          </button>
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
