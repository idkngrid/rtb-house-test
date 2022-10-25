import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { Table } from "../../components/Table";

export function Home() {
    const [orders, setOrders] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        fetch("src/data/orders.json")
            .then(response => response.json())
            .then(data => setOrders(data)
        )
    }, [])

    return (
        <div>
            <section className="section--pall">
                <div className="container">
                    <h2 className="section__title">Orders</h2>
                    <div className="grid">
                        <Card 
                            seller="1"
                            totalCount="9999.99"
                        />
                        <Card 
                            seller="2"
                            totalCount="9999.99"
                        />
                        <Card 
                            seller="3"
                            totalCount="9999.99"
                        />
                    </div>
                </div>
            </section>

            {/* Search */}
            <section className="section--py">
                <div className="container">
                    <Search onChange={(e) => setSearchInput(e.target.value)}/>
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

