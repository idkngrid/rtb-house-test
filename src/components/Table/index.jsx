import styles from './Table.module.css';
import { CaretDown, CaretUp } from 'phosphor-react';
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
    const [sortKey, setSortKey] = useState("orderId");
    const [sortedOrders, setSortedOrders] = useState(data);

    function handleTableSort(column) {
        if (sort === "desc") {
            const sorted = data.sort((a, b) => {
                return (a[column] < b[column]) ? -1 : 1;
            });
            setSortKey(column);
            setSort("asc");
            setSortedOrders(sorted);
        }
        if (sort === "asc") {
            const sorted = data.sort((a, b) => {
                return (a[column] > b[column]) ? -1 : 1;
            });
            setSortKey(column);
            setSort("desc");
            setSortedOrders(sorted);
        }
    }

    return (
        <table className={styles.table} cellSpacing="15px">
            <thead className={styles.thead}>
                <tr>
                    {headers.map((col) => {
                        return (
                            <th 
                                key={col.key}
                            >
                                {col.label}
                                {sort === "asc"? (
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
                    <td>{order.orderId}</td>
                    <td>{order.product}</td>
                    <td>{order.price}</td>
                    <td>{order.seller}</td>
                    <td>{order.country}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}