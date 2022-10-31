import Sellers from '../../data/sellers.json';

import { CaretDown } from 'phosphor-react';

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
        <>
            <div className={styles.select__field}>
                <select name="" id="" className={styles.select} onChange={onHandleFilterSelect}>
                    <option value="all">All Sellers</option>
                    {Sellers.map(seller => (
                        <option className={styles.option} value={seller.id} key={seller.id}>{seller.id}</option>
                    ))}
                </select> 
                <CaretDown size={20} className={styles.select__icon} />
            </div>

            <div className={styles.select__field}>
                <select name="" id="" className={styles.select} onChange={onHandleFilterSelect}>
                    <option value="all">All countries</option>
                    {countries.map(country => (
                        <option className={styles.option} value={country.country} key={country.id}>{country.country}</option>
                    ))}
                </select>
                <CaretDown size={20} className={styles.select__icon} />
            </div>
        </>
    )
}