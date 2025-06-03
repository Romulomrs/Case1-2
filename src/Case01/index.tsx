import React, { useState } from "react";
import styles from "./styles.module.css";
import Money from "./components/Money";
import MachineButton from "./components/MachineButton";
import Product from "./components/Product";
import Header from "../common/Header";
import FallingCandies from "./components/animacao/FallingCandies"; // ajuste o caminho conforme necessário
import { toast } from "react-toastify";



const Vending_Machine: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [balance, setBalance] = useState(0);
  const [boughtProduct, setBoughtProduct] = useState<string>("");
  const productsList = [
    {
      reference: "a",
      price: 6,
    },
    {
      reference: "b",
      price: 7,
    },
    {
      reference: "c",
      price: 8,
    },
  ];

  const products = productsList.map((product) => {
    return (
      <div className={styles.product} key={product.reference}>
        <Product
          key={product.reference}
          identifier={product.reference}
          price={product.price}
          totalMoney={balance}
        />
        <Product
          key={product.reference}
          identifier={product.reference}
          price={product.price}
          totalMoney={balance}
        />
        <Product
          key={product.reference}
          identifier={product.reference}
          price={product.price}
          totalMoney={balance}
        />
      </div>
    );
  });

  const productAlert = (product: { reference: string; price: number }) => {
    toast.success(
      `Você retirou o produto ${selectedProduct.toUpperCase()}!${balance === product.price ? "\n\nNão há troco." : `\n\Você recebeu R$${balance - product.price}.00 de troco.`}`,
    );
  };

  const handleProductClick = (product: {
    reference: string;
    price: number;
  }) => {
    if (balance >= product.price) {
      setSelectedProduct(product.reference);
      setBoughtProduct("");
    } else
      toast.error(
        `Seu saldo é insuficiente para selecionar o produto ${product.reference.toUpperCase()}.`,
      );
  };

  const handleMoneyClick = (value: number) => {
    setBoughtProduct("");
    if (balance < 30) {
      setBalance((prevBalance) => prevBalance + value);
    } else toast.error("Seu limite de crédito na máquina é de 30 reais!");
  };

  const handleExtractionClick = () => {
    switch (selectedProduct) {
      case "a":
        if (balance >= productsList[0].price) {
          productAlert(productsList[0]);
          setBalance(0);
          setSelectedProduct("");
          setBoughtProduct(`a`);
        } else {
          toast.error(
            `Saldo insuficiente para retirar o produto ${selectedProduct.toUpperCase()}.`,
          );
        }
        break;

      case "b":
        if (balance >= productsList[1].price) {
          productAlert(productsList[1]);
          setBalance(0);
          setSelectedProduct("");
          setBoughtProduct(`b`);
        } else {
          alert(
            `Saldo insuficiente para retirar o produto ${selectedProduct.toUpperCase()}.`,
          );
        }
        break;

      case "c":
        if (balance >= productsList[2].price) {
          productAlert(productsList[2]);
          setBalance(0);
          setSelectedProduct("");
          setBoughtProduct(`c`);
        } else {
          alert(
            `Saldo insuficiente para retirar o produto ${selectedProduct.toUpperCase()}.`,
          );
        }
        break;

      default:
        toast.error("Selecione um produto antes de retirar!");
        break;
    }
  };
return (
  <>
    <FallingCandies />
    <section id={styles.vendingMachine}>
      <Header />
      <div id={styles.machineBody}>
        <section id={styles.machineUpperPart}>
          <div id={styles.machineGlass}>{products}</div>
          <div id={styles.machineControls}>
            <span id={styles.machineInstructions}>
              Orson Mills' Vending Machines
            </span>
            <div id={styles.buttonsArea}>
              <MachineButton
                value="a"
                onClick={() => handleProductClick(productsList[0])}
              />
              <MachineButton
                value="b"
                onClick={() => handleProductClick(productsList[1])}
              />
              <MachineButton
                value="c"
                onClick={() => handleProductClick(productsList[2])}
              />
            </div>
            <span id={styles.balance}>{`SALDO: R$${balance}.00`}</span>
            <span id={styles.selectedProduct}>
              <p className={styles.text}>
                {selectedProduct
                  ? `SELECIONADO: ${selectedProduct.toUpperCase()}`
                  : ""}
              </p>
              <p className={styles.text}>
                {selectedProduct
                  ? `TOTAL A PAGAR: R$${productsList.find((product) => product.reference === selectedProduct)?.price}.00`
                  : ""}
              </p>
            </span>
            <button id={styles.extraction} onClick={handleExtractionClick}>
              RETIRAR
            </button>
          </div>
        </section>
        <div id={styles.evacuation}>
          {boughtProduct && (
            <img
              id={styles.boughtProduct}
              src={`/assets/produtos/produto_${boughtProduct}.png`}
              alt=""
              onClick={() => {
                setBoughtProduct("");
              }}
            />
          )}
        </div>
      </div>
      <section id={styles.moneyBills}>
        <Money value={1} onClick={() => handleMoneyClick(1)} />
        <Money value={2} onClick={() => handleMoneyClick(2)} />
        <Money value={5} onClick={() => handleMoneyClick(5)} />
      </section>
    </section>
  </>
);
}

export default Vending_Machine;
