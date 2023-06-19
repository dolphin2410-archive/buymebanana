import styles from './ItemCard.module.css';

export default function ItemCard({image, children, onClick}) {
    return (
        <div className={styles.bananaCard} onClick={onClick}>
            <img src={image} className={styles.cardImage} alt="" />
            <h1 className={styles.cardText}>{children}</h1>
        </div>
    )
}