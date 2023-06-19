import styles from './ItemCard.module.css';

export default function ItemCard({image, children}) {
    return (
        <div className={styles.bananaCard}>
            <img src={image} className={styles.cardImage} alt="" />
            <h1 className={styles.cardText}>{children}</h1>
        </div>
    )
}