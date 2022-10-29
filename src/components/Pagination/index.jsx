import { CaretRight, CaretLeft } from 'phosphor-react';

import styles from './Pagination.module.css';

export function Pagination({ currentPage, ordersPerPage, totalOrders, onHandlePagination, onHandlePrevBtn, onHandleNextBtn }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>       
            <ul className={styles.pagination}>
                <CaretLeft size={20} className={styles.page__icon} onClick={onHandlePrevBtn} />  
                {pageNumbers.map(number => (
                    <li key={number} className={currentPage == number ? styles.active : null}>
                        <a href="#" className={styles.page__link} onClick={() => onHandlePagination(number)}>
                            {number}
                        </a>
                    </li>
                ))}
                <CaretRight size={20} className={styles.page__icon} onClick={onHandleNextBtn} />  
            </ul>
        </nav>
    )
}