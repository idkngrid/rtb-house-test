import styles from './Table.module.css';
import { CaretDown, CaretUp } from 'phosphor-react';
import { useState } from 'react';

export function Table({ data }) {

    const [sort, setSort] = useState("ASC");

    function handleTableSort(column) {
        if(sort === "ASC") {
            const sortedOrders = [...data].sort((a, b) => {
                a[column].toString().toLowerCase() > b[column].toString().toLowerCase() ? 1 : -1
            });
            data = sortedOrders;
            setSort("DSC");
        } 
        if(sort === "DSC") {
            const sortedOrders = [...data].sort((a, b) => {
                a[column].toString().toLowerCase() < b[column].toString().toLowerCase() ? 1 : -1
            });
            data = sortedOrders;
            setSort("ASC");
        } 
    }

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.td}>Order ID <span><CaretDown size={20} onClick={() => {handleTableSort("orderId")}}/></span></th>
                    <th className={styles.td}>Product <span><CaretDown size={20} onClick={() => {handleTableSort("product")}}/></span></th>
                    <th className={styles.td}>Price</th>
                    <th className={styles.td}>Seller</th>
                    <th className={styles.td}>Country</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {data.map(({ orderId, product, seller, country, price }) => (
                <tr className={styles.tr} key={orderId}>
                    <td className={styles.td}>{orderId}</td>
                    <td className={styles.td}>{product}</td>
                    <td className={styles.td}>{seller}</td>
                    <td className={styles.td}>{country}</td>
                    <td className={styles.td}>{price}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}