import styles from './Table.module.css';
import { CaretDown, CaretUp } from 'phosphor-react';
import { useEffect } from 'react';
import { useState } from 'react';

export function Table({orderId, product, price, seller, country}) {
// export function Table() {

    const [orders, setOrders] = useState([]);
    const [sort, setSort] = useState("ASC");

    useEffect(() => {
        fetch("src/data/orders.json")
            .then(response => response.json())
            .then(data => setOrders(data)
        )
    }, [])

    function handleTableSort(column) {
        if(sort === "ASC") {
            const sortedOrders = [...orders].sort((a, b) => {
                a[column].toString().toLowerCase() > b[column].toString().toLowerCase() ? 1 : -1
            });
            setOrders(sortedOrders);
            setSort("DSC");
        } 
        if(sort === "DSC") {
            const sortedOrders = [...orders].sort((a, b) => {
                a[column].toString().toLowerCase() < b[column].toString().toLowerCase() ? 1 : -1
            });
            setOrders(sortedOrders);
            setSort("ASC");
        } 
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Order id <span onClick={() => handleTableSort("orderId")}><CaretDown size={18} weight="fill" /></span></th>
                    <th>Product <span onClick={() => handleTableSort("product")}><CaretDown size={18} weight="fill" /></span></th>
                    <th>Price <span onClick={() => handleTableSort("price")}><CaretDown size={18} weight="fill" /></span></th>
                    <th>Seller <span onClick={() => handleTableSort("seller")}><CaretDown size={18} weight="fill" /></span></th>
                    <th>Country <span onClick={() => handleTableSort("country")}><CaretDown size={18} weight="fill" /></span></th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>{orderId}</td>
                    <td>{product}</td>
                    <td>{price}</td>
                    <td>{seller}</td>
                    <td>{country}</td>
                </tr> */}
                
                {orders.map(order => {
                    return (
                        <tr key={order.orderId}>
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