import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

export function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Orders</Link></li>
                <li><Link to="/info">Information</Link></li>
            </ul>
        </nav>
    )
}