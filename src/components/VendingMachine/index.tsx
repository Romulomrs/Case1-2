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
  };

  const handleMoneyClick = (value: number) => {
    if (balance < 30) {
      setBalance((prevBalance) => prevBalance + value);
    }
    else alert('Seu limite de crédito na máquina é de 30 reais!')
  }

  const handleExtractionClick = () => {
    switch (selectedProduct) {
      case 'a':
        if (balance >= productsList[0].price) {
          alert(`Você retirou o produto ${selectedProduct.toUpperCase()}!`);
          setBalance((prevBalance) => prevBalance - productsList[0].price);
          setSelectedProduct('');
        } else {
          alert(`Saldo insuficiente para retirar o produto ${selectedProduct.toUpperCase()}.`);
        }
        break;
      
      case 'b':
        if (balance >= productsList[1].price) {
          alert(`Você retirou o produto ${selectedProduct.toUpperCase()}!`);
          setBalance((prevBalance) => prevBalance - productsList[1].price);
          setSelectedProduct('');
        } else {
          alert(`Saldo insuficiente para retirar o produto ${selectedProduct.toUpperCase()}.`);
        }
        break;
        

      case 'c':
        if (balance >= productsList[2].price) {
          alert(`Você retirou o produto ${selectedProduct.toUpperCase()}!`);
          setBalance((prevBalance) => prevBalance - productsList[2].price);
          setSelectedProduct('');
        } else {
          alert(`Saldo insuficiente para retirar o produto ${selectedProduct.toUpperCase()}.`);
        }
        break;
      
      default:
        alert('Selecione um produto antes de retirar!');
        break;
    }
  }

  return (
    <section id={styles.vendingMachine}>
      <div id={styles.machineBody}>
        <div id={styles.machineGlass}>
          {products}
        </div>
        <div id={styles.machineControls}>
          {/* <span id={styles.productOutput}>
          </span> */}
          <span id={styles.machineInstructions}>
            Orson Mills' Vending Machines
          </span>
          <div id={styles.buttonsArea}>
            <MachineButton value='a' onClick={() => handleProductClick('a')} />
            <MachineButton value='b' onClick={() => handleProductClick('b')} />
            <MachineButton value='c' onClick={() => handleProductClick('c')} />
          </div>
          <span id={styles.balance}>
              {`SALDO: R$${balance}.00`}
          </span>
          <span id={styles.selectedProduct}>
            <p className={styles.text}>
            {selectedProduct ? `SELECIONADO: ${selectedProduct.toUpperCase()}` : ''}
            </p>
            <p className={styles.text}>
            {selectedProduct ? `TOTAL A PAGAR: R$${productsList.find(product => product.reference === selectedProduct)?.price}.00` : ''}
            </p>
          </span>
          <button id={styles.extraction} onClick={handleExtractionClick}> 
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
