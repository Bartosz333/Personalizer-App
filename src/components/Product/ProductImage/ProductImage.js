import styles from './ProductImage.module.scss';

const ProductImage = ({ title, name, currentColor }) => {
  return (
    <div className={styles.imageBox}>
      <img
        className={styles.img}
        alt={title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
      />
    </div>
  );
};

export default ProductImage;
