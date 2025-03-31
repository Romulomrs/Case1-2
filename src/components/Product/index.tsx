import styles from './styles.module.css';

interface ProductProps {
    identifier: string;
}

const Product: React.FC<ProductProps> = ({identifier}) => {

    return(
        <div className={styles.product}>
            <img src={`src/assets/produtos/produto_${identifier}.png`} alt={identifier} className={styles.productImage} />
            <span className={styles.productIdentifier}>{identifier}</span>
        </div>
    )
}

export default Product;