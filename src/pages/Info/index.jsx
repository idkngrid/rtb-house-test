import styles from './Info.module.css';

export function Info() {
    return (
        <div>
            <section className="section section--pall">
                <div className="container">
                    <div className={styles.info__container}>
                        <div className={styles.info__project}>
                            <h2 className="section__title">About the project</h2>
                            <h3 className={styles.info__name}>Ingrid de Camargo Pereira</h3>
                            <p className={styles.info__tech}>For this project, I developed a program that fetches data from a json file and shows it in a table.
                            I also implemented a few features, such as:
                            </p>
                            <ul>
                                <li>Pagination</li>
                                <li>Sorting</li>
                                <li>Search</li>
                                <li>Filter by country</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className={styles.info__tech}>Technologies used:</h3>
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>CSS Modules</li>
                                <li>Phosphor React</li>
                                <li>Github</li>
                            </ul>
                        </div>
                        
                        <ul className={styles.info__social}>
                            <li><a href="https://github.com/idkngrid/rtb-house-test" target="_blank"><img className={styles.info__icon} src="./icon-github.svg" alt="Github icon"/></a></li>
                            <li><a href="https://www.linkedin.com/in/ingrid-de-camargo-pereira-1b95b619b/" target="_blank"><img className={styles.info__icon} src="./icon-linkedin.svg" alt="Linkedin icon"/></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
