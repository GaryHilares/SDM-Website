import Image from 'next/image';
import styles from "../styles/NavigationBar.module.css";

function NavigationBarButton(props) {
    return (
        <a className={props.highlight ? styles.navigation_bar__yellow_button : styles.navigation_bar__blue_button} onClick={props.onClick}>{props.children}</a>
    );
}

function NavigationBar(props) {
    return (
        <nav className={styles.navigation_bar}>
            <div className={styles.navigation_bar__logo_wrapper}>
                <Image alt="logo" src="/logo.png" width={50} height={50} />
            </div>
            <div className={styles.navigation_bar__title_box}>
                <h1 className={styles.navigation_bar__title}>Sonrisas del Mañana</h1>
                <h2 className={styles.navigation_bar__subtitle}>Un camino hacia el futuro</h2>
            </div>
            <ul className={styles.navigation_bar__button_box}>
                {/*<a className={styles.navigation_bar__yellow_button} href={"https://stackoverflow.com"}>¡Únete!</a>
                <a className={styles.navigation_bar__blue_button} onClick={() => { props.target() }}>Nosotros</a>
                <a className={styles.navigation_bar__blue_button} href={"https://dle.rae.es"}>Testimonios</a>
                <a className={styles.navigation_bar__blue_button} href={"https://dictionary.cambridge.org"}>Contacto</a>*/}
                {props.children}
            </ul>
        </nav>
    );
}

export { NavigationBar, NavigationBarButton };