import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";

export function Home() {
    return (
        <div>
            <section className="section">
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
            
            <section className="section">
                <div className="container">
                    <Table />
                </div>
            </section>
        </div>
    )
}