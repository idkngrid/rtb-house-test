import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { Table } from "../../components/Table";

import Orders from "../../data/orders.json";
import Sellers from "../../data/sellers.json";


export function Home() {
    const [orders, setOrders] = useState(Orders);
    const [sellers, setSellers] = useState(Sellers);
    const [searchInput, setSearchInput] = useState('');

    function searchOrders(searchValue) {
        setSearchInput(searchValue);
        
        if(searchInput !== '') {
            const filteredData = orders.filter((order) => {
                return Object.values(order).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
                setOrders(filteredData);
            }
            else {
                setOrders(orders);
            }
    }

    console.log(orders);

    return (
        <div>
            <section className="section--pall">
                <div className="container">
                    <h2 className="section__title">Orders</h2>
                    <div className="grid">
                        {sellers.map((seller) => (
                            <Card 
                                key={seller.id}
                                seller={seller.name}
                                totalCount="9999.99"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Search */}
            <section className="section--py">
                <div className="container">
                    <Search onChange={(e) => searchOrders(e.target.value)}/>
                </div>
            </section>

            <section className="section--pall">
                <div className="container">
                    <Table data={orders} />  
                </div>
            </section>
        </div>
    )
}

