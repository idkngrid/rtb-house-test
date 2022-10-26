import styles from './Card.module.css';

export function Card({ seller, totalCount }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.card__title}>Total of {seller}</h2>
            <span className={styles.card__count}>${totalCount}</span>
        </div>
    )
}