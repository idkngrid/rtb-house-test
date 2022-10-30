import { useState } from "react";

import Orders from "../../data/orders.json";
import Sellers from "../../data/sellers.json";


import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import { SelectFilter } from "../../components/SelectFilter";

export function Home() {
    const [filteredOrders, setFilteredOrders] = useState(Orders);
    const [filterSelectedValue, setFilterSelectedValue] = useState('all');

    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage, setOrdersPerPage] = useState(7);

    // Get total price of each seller
    const ordersSellers = Sellers.map(seller => {
        const orders = Orders.filter(order => order.seller === seller.id);
        const totalPrice = orders.reduce((acc, order) => {
            return acc + order.price;
        }, 0);

        return {
            ...seller,
            totalPrice
        }
    })  

    // Setting variables for the pagination
    const indexLastOrder = currentPage * ordersPerPage;
    const indexFirstOrder = indexLastOrder - ordersPerPage;
    const currentOrders =  filteredOrders.slice(indexFirstOrder, indexLastOrder);

    function handlePagination(pageNumber) {
        setCurrentPage(pageNumber);
    }

    function onHandlePrevBtn() {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    }

    function handleNextBtn() {
        if (currentPage !== Math.ceil(Orders.length / ordersPerPage)) setCurrentPage(currentPage + 1);
    }

    // Search orders
    function handleSearchOrders(searchValue) {
        if(searchValue) {
            const filteredData = [...Orders].filter((order) => {
                return Object.values(order).join('').toLowerCase().includes(searchValue.toLowerCase());
            })
            setFilteredOrders(filteredData);
            if (filteredData.length > ordersPerPage) setCurrentPage(1);
        }
        else {
            setFilteredOrders(Orders);
        }
    }

    // Filter orders by country or seller
    function onFilterSelected(selectedValue) {
        setFilterSelectedValue(selectedValue);
    }

    const filterSelected = currentOrders.filter((order) => {
        return order.seller == filterSelectedValue || order.country === filterSelectedValue;
    })

return (
    <div>
        <section className="section section--pall">
            <div className="container">
                <h2 className="section__title align--center">Seller Report</h2>
                <div className="grid">
                    {ordersSellers.map(seller => (
                        <Card 
                            key={seller.id}
                            seller={seller.name}
                            totalCount={seller.totalPrice}
                        />
                    ))}
                </div>
            </div>
        </section>

        <section className="section section--px">
            <h2 className="section__title align--center">Product List</h2>
            <div className="container search__container">
                <Search onChange={(e) => handleSearchOrders(e.target.value)}/>
                
                <div className="select__container">
                    <SelectFilter filterValueSelected={onFilterSelected} />
                </div>
            </div>
        </section>

        <section className="section section section--px">
            <div className="container">
                {filterSelectedValue === "all" ? (
                    <Table data={currentOrders} />  
                ) : (
                    <Table data={filterSelected} />  
                )}

                <Pagination 
                    currentPage={currentPage}
                    ordersPerPage={ordersPerPage}
                    totalOrders={Orders.length}
                    onHandlePagination={handlePagination}
                    onHandlePrevBtn={onHandlePrevBtn}
                    onHandleNextBtn={handleNextBtn}
                />
            </div>
        </section>
    </div>
    )
}
