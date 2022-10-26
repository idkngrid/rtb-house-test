import styles from './Table.module.css';
import { CaretDown, CaretUp } from 'phosphor-react';
import { useState } from 'react';

export function Table({ data }) {

    const [sort, setSort] = useState("asc");

    function handleTableSort(column) {
        if(sort === "asc") {
            const sortedOrders = [...data].sort((a, b) => {
                a[column].toString().toLowerCase() > b[column].toString().toLowerCase() ? 1 : -1
            });
            console.log(sortedOrders);
            setSort("dsc");
        } 
        if(sort === "dsc") {
            const sortedOrders = [...data].sort((a, b) => {
                a[column].toString().toLowerCase() < b[column].toString().toLowerCase() ? 1 : -1
            });
            console.log(sortedOrders)
            setSort("asc");
        } 
    }

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.td}>Order ID <span><CaretDown size={20} onClick={() => {handleTableSort("orderId")}}/></span></th>
                    <th className={styles.td}>Product <span><CaretDown size={20} onClick={() => {handleTableSort("product")}}/></span></th>
                    <th className={styles.td}>Price <span><CaretDown size={20} onClick={() => {handleTableSort("price")}}/></span></th>
                    <th className={styles.td}>Seller <span><CaretDown size={20} onClick={() => {handleTableSort("seller")}}/></span></th>
                    <th className={styles.td}>Country <span><CaretDown size={20} onClick={() => {handleTableSort("country")}}/></span></th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {data.map(({ orderId, product, seller, country, price }) => (
                <tr className={styles.tr} key={orderId}>
                    <td className={styles.td}>{orderId}</td>
                    <td className={styles.td}>{product}</td>
                    <td className={styles.td}>{price}</td>
                    <td className={styles.td}>{seller}</td>
                    <td className={styles.td}>{country}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}