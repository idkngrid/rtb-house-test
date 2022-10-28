import Orders from '../../data/orders.json';
import Sellers from '../../data/sellers.json';

import styles from './SelectFilter.module.css';

export function SelectFilter({ filterValueSelected }) {

    const countries = [
        { id: 1, country: "BRA" },
        { id: 2, country: "ARG" },
        { id: 3, country: "MEX" },
    ]

    function onHandleFilterSelect(e) {
        filterValueSelected(e.target.value);
    }

    return (
        <select name="" id="" className={styles.select} onChange={onHandleFilterSelect}>
            <option value="all">All</option>
            {countries.map(country => (
                <option className={styles.option} value={country.country} key={country.id}>{country.country}</option>
            ))}
        </select>
    )
}