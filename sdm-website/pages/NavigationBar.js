import Image from 'next/image';
import styles from "../styles/NavigationBar.module.css";

export default function NavigationBar() {
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
                <a className={styles.navigation_bar__yellow_button}>¡Únete!</a>
                <a className={styles.navigation_bar__blue_button}>Nosotros</a>
                <a className={styles.navigation_bar__blue_button}>Testimonios</a>
                <a className={styles.navigation_bar__blue_button}>Contacto</a>
            </ul>
        </nav>
    );
}