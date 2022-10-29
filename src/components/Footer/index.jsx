import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a title='Back to main page' href="#" className={styles.footer__logo}><img src="./logo.svg" alt="Logo RTB House" /></a>
        </footer>
    )
}