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

    const [sortKey, setSortKey] = useState("orderId");
    const [sort, setSort] = useState("asc");
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
        <div className={styles.table}>
            <table className={styles.inner} cellSpacing="15px">
                <thead className={styles.header}>
                    <tr className={styles.row}>
                        {headers.map((col) => {
                            return (
                                <th className={styles.cell} 
                                    key={col.key}
                                >
                                    {col.label}
                                    {sortKey === col.key ? (
                                        sort === 'asc' ? (
                                            <CaretDown size={20} weight="fill" onClick={() => handleTableSort(col.key)} className={styles.col__icon} />
                                        ) : (
                                            <CaretUp size={20} weight="fill" onClick={() => handleTableSort(col.key)} className={styles.col__icon} />
                                        )
                                    ) : <CaretDown size={20} weight="fill" onClick={() => handleTableSort(col.key)} className={styles.col__icon} />}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {data.map((order) => (
                    <tr className={styles.row} key={order.orderId}>
                        <td className={styles.cell}>{order.orderId}</td>
                        <td className={styles.cell}>{order.product}</td>
                        <td className={styles.cell}>{order.price}</td>
                        <td className={styles.cell}>{order.seller}</td>
                        <td className={styles.cell}>{order.country}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}