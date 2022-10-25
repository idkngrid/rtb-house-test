import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <a href="#">RTB House</a>
            </div>
            <nav>
                <ul className={styles.menu__list}>
                    <li><Link to="/">Orders</Link></li>
                    <li><Link to="/info">Information</Link></li>
                </ul>
            </nav>
        </header>
    )
}