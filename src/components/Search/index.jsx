import styles from './Search.module.css';
import { MagnifyingGlass } from 'phosphor-react';

export function Search({onChange}) {

    return (
        <div className={styles.search__field}>
            <input 
                className={styles.search__input} 
                type="text" 
                placeholder="Search"
                onChange={onChange}
            />
            <MagnifyingGlass size={20} weight="light" className={styles.search__icon} />
        </div>
    )
}