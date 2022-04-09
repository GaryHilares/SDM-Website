import styles from "../styles/NavigationBar.module.css";

export default function NavigationBar() {
    return (
        <nav className={styles.navigation_bar}>
            <img className={styles.navigation_bar__logo} alt="logo" src="/logo.png" width={"50px"} height={"50px"} />
            <div className={styles.navigation_bar__title}>
                <strong>Sonrisas del Mañana</strong>
                <span>Un camino hacia el futuro</span>
            </div>
            <ul>
                <button>Únete</button>
                <button>Nosotros</button>
                <button>Testimonios</button>
                <button>Contacto</button>
            </ul>
        </nav>
    );
}