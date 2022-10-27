import styles from './Table.module.css';
import { Car, CaretDown, CaretUp } from 'phosphor-react';
import { useState } from 'react';

export function Table({ data }) {

    const headers = [
        { key: "orderId", label: "Order ID" },
        { key: "product", label: "Product" },
        { key: "price", label: "Price" },
        { key: "seller", label: "Seller" },
        { key: "country", label: "Country" },
    ];

    const [sort, setSort] = useState("asc");
    const [sortedOrders, setSortedOrders] = useState(data);

    function handleTableSort(column) {
        if (sort === "asc") {
            const sorted = data.sort((a, b) => {
                return (a[column] < b[column]) ? -1 : 1;
            });
            setSortedOrders(sorted);
            setSort("dsc");
        }
        if (sort === "dsc") {
            const sorted = data.sort((a, b) => {
                return (a[column] > b[column]) ? -1 : 1;
            });
            setSortedOrders(sorted);
            setSort("asc");
        }
    }

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    {headers.map((col) => {
                        return (
                            <th 
                                key={col.key}
                            >
                                {col.label}
                                {sort === "asc" ? (
                                    <CaretDown size={20} weight="fill" onClick={() => handleTableSort(col.key)} className={styles.col__icon} />
                                ) : (
                                    <CaretUp size={20} weight="fill" onClick={() => handleTableSort(col.key)} className={styles.col__icon} />
                                )}
                            </th>
                        )
                    })}
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