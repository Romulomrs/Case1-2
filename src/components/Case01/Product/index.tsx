import styles from "./styles.module.css";

interface ProductProps {
  price: number;
  identifier: string;
  totalMoney: number;
  onClick?: () => void;
}

const Product: React.FC<ProductProps> = ({
  price,
  identifier,
  totalMoney,
  onClick,
}) => {
  return (
    <div
      className={`${styles.product}  ${totalMoney >= price ? "" : styles.disabled}`}
      onClick={onClick}
    >
      <img
        src={`/assets/produtos/produto_${identifier}.png`}
        alt={identifier}
        className={styles.productImage}
      />
      <span className={styles.productIdentifier}>{identifier}</span>
      <span className={styles.productPrice}>R${price}.00</span>
    </div>
  );
};

export default Product;
