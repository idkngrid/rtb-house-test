import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { Table } from "../../components/Table";

import Orders from "../../data/orders.json";
import Sellers from "../../data/sellers.json";

export function Home() {
    const [orders, setOrders] = useState(Orders);
    const [sellers, setSellers] = useState(Sellers);
    const [totalCount, setTotalCount] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const ordersSellers = orders.filter(order => order.seller === sellers[0].id).map(value => value.price).reduce((acc, amount) => acc + amount);
        setTotalCount(ordersSellers);
    }, [orders])


    function handleSearchOrders(searchValue) {
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
                                totalCount={totalCount}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section--py">
                <div className="container">
                    <Search onChange={(e) => handleSearchOrders(e.target.value)}/>
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

