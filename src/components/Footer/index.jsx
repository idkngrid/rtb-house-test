import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__logo}>
                <a href="#">RTB House</a>
            </div>
        </footer>
    )
}