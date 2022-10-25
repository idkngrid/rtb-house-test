import { Header } from "../../components/Header"

export function Info() {
    return (
        <div>
            <Header />
            
            <section className="section">
                <div className="container">
                    <h2 className="section__title">Info</h2>
                    <p>Developer name</p>
                    <p>This mini-project was created by using:</p>
                    <ul>
                        <li>Technology A</li>
                        <li>Technology B</li>
                        <li>Technology C</li>
                        <li>Technology D</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
