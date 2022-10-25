import styles from './Search.module.css';
import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';

export function Search({onChange}) {

    return (
        <div className={styles.search__wrapper}>
            <input 
                className={styles.search__input} 
                type="text" 
                placeholder="Search..."
                onChange={onChange}
            />
            <span>
                <MagnifyingGlass size={20} weight="light" className={styles.search__icon} />
            </span>
        </div>
    )
}