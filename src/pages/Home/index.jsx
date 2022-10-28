import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";

import Orders from "../../data/orders.json";
import Sellers from "../../data/sellers.json";
import { SelectFilter } from "../../components/SelectFilter";

export function Home() {
    const [filteredOrders, setFilteredOrders] = useState(Orders);
    const [filterSelectedValue, setFilterSelectedValue] = useState('all');
    const [totalCount, setTotalCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10);

    const ordersSellers = filteredOrders.reduce((total, order) => {
        const { seller, price } = order;
        if(seller) {
            if(total[seller]) {
                total[seller] += price;
            } else {
                total[seller] = price;
            }
        }
        return total;
    }, {})

    useEffect(() => {
        const entries = Object.entries(ordersSellers);
        entries.map(entry => {
            if(entry[0] == 1) {
                setTotalCount(entry[1]);
            } else if(entry[0] == 2) {
                setTotalCount(entry[1]);
            } else {
                setTotalCount(entry[1]);
            }
        });
    }, [])

        // const ordersSellers = 
        //     filteredOrders.filter(order => order.seller === )
        //     .map(value => value.price)
        //     .reduce((acc, amount) => acc + amount);

        // setTotalCount(ordersSellers);

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
            const filteredData = [...Orders].filter((order) => {
                return Object.values(order).join('').toLowerCase().includes(searchValue.toLowerCase());
            })
            setFilteredOrders(filteredData);
        }
        else {
            setFilteredOrders(Orders);
        }
    }

    function onFilterSelected(selectedValue) {
        setFilterSelectedValue(selectedValue);
    }

    const filterSelected = Orders.filter((order) => {
        if(filterSelectedValue === "ARG") {
            return order.country === "ARG";
        } else if(filterSelectedValue === "BRA") {
            return order.country === "BRA";
        } else if(filterSelectedValue === "MEX") {
            return order.country === "MEX";
        } else {
            return order;
        }
    })

return (
    <div>
        <section className="section--pall">
            <div className="container">

            <h2 className="section__title">Orders</h2>
                    <div className="grid">
                        {Sellers.map((seller) => (
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
                <div className="container grid">
                    <Search onChange={(e) => handleSearchOrders(e.target.value)}/>
                    
                    <SelectFilter filterValueSelected={onFilterSelected} />
                </div>
            </section>

            <section className="section--pall">
                <div className="container">
                    <Table data={filterSelected} />  
                    <Pagination 
                        ordersPerPage={ordersPerPage}
                        totalOrders={Orders.length}
                        onHandlePagination={handlePagination}
                    />
                </div>
            </section>
        </div>
    )
}
