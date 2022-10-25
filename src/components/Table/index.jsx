import styles from './Table.module.css';
import { CaretDown, CaretUp } from 'phosphor-react';
import { useEffect } from 'react';
import { useState } from 'react';

export function Table() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("src/data/orders.json")
            .then(response => response.json())
            .then(data => setOrders(data)
        )
    }, [])

    function handleTableSort() {
        console.log('oi')
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Order id <span onClick={handleTableSort}><CaretDown size={18} weight="fill" /></span></th>
                    <th>Product <span><CaretDown size={18} weight="fill" /></span></th>
                    <th>Price <span><CaretDown size={18} weight="fill" /></span></th>
                    <th>Seller <span><CaretDown size={18} weight="fill" /></span></th>
                    <th>Country <span><CaretDown size={18} weight="fill" /></span></th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => {
                    return (
                        <tr>
                            <td>{order.orderId}</td>
                            <td>{order.product}</td>
                            <td>{order.price}</td>
                            <td>{order.seller}</td>
                            <td>{order.country}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}