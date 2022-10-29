import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <a title='Back to main page' href="/" className={styles.header__logo}><img src="./logo.svg" alt="Logo RTB House" /></a>

                    <ul className={styles.menu__list}>
                        <li><Link to="/">Orders</Link></li>
                        <li><Link to="/info">Information</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}