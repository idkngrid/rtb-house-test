import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="#" className={styles.footer__logo}><img src="./logo.svg" alt="" /></a>
        </footer>
    )
}