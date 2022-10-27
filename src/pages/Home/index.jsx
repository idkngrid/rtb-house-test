import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";

import Orders from "../../data/orders.json";
import Sellers from "../../data/sellers.json";

export function Home() {
    const [filteredOrders, setFilteredOrders] = useState(Orders);
    const [sellers] = useState(Sellers);
    const [totalCount, setTotalCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10);

    useEffect(() => {
        const ordersSellers = filteredOrders.filter(order => order.seller === sellers[0].id).map(value => value.price).reduce((acc, amount) => acc + amount);
        setTotalCount(ordersSellers);
    }, [])

    // Setting variables for the pagination
    const indexLastOrder = currentPage * ordersPerPage;
    const indexFirstOrder = indexLastOrder - ordersPerPage;
    const currentOrders =  filteredOrders.slice(indexFirstOrder, indexLastOrder);

    function handlePagination(pageNumber) {
        setCurrentPage(pageNumber);
    }

    // Search orders
    function handleSearchOrders(searchValue) {
        if(searchValue) {
            const filteredData = [...currentOrders].filter((order) => {
                return Object.values(order).join('').toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredOrders(filteredData);
        }
        else {
            setFilteredOrders(Orders);
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
                    <Table data={currentOrders} />  
                    <Pagination 
                        ordersPerPage={ordersPerPage}
                        totalOrders={filteredOrders.length}
                        onHandlePagination={handlePagination}
                    />
                </div>
            </section>
        </div>
    )
}
