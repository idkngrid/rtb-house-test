import styles from './Pagination.module.css';

export function Pagination({ ordersPerPage, totalOrders, onHandlePagination }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers.map(number => (
                    <li key={number} className={styles.page__item}>
                        <a href="#" className={styles.page__link} onClick={() => onHandlePagination(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}