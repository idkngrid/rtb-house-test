import styles from './Table.module.css';
import { CaretDown, CaretUp } from 'phosphor-react';
import { useState } from 'react';

export function Table({ data }) {

    const [sort, setSort] = useState("asc");
    const [setSortedOrders] = useState(data);

    function handleTableSort(column) {
        if (sort === "asc") {
            const sorted = data.sort((a, b) => {
                return (a[column] < b[column]) ? -1 : 1;
            });
            setSort("dsc");
            setSortedOrders(sorted);
        }
        if (sort === "dsc") {
            const sorted = data.sort((a, b) => {
                return (a[column] > b[column]) ? -1 : 1;
            });
            setSort("asc");
            setSortedOrders(sorted);
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
                {data.map((order) => (
                <tr className={styles.tr} key={order.orderId}>
                    <td className={styles.td}>{order.orderId}</td>
                    <td className={styles.td}>{order.product}</td>
                    <td className={styles.td}>{order.price}</td>
                    <td className={styles.td}>{order.seller}</td>
                    <td className={styles.td}>{order.country}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}