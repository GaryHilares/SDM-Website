import Image from 'next/image';
import styles from "../styles/NavigationBar.module.css";
import { useMediaQuery } from "../functions/hooks.js";

function NavigationBarButton(props) {
    return (
        <a className={props.highlight ? styles.navigation_bar__yellow_button : styles.navigation_bar__blue_button} onClick={props.onClick}>{props.children}</a>
    );
}

function NavigationBar(props) {
    const isWide = useMediaQuery("(min-width: 800px)");
    return (
        <nav className={styles.navigation_bar}>
            <div style={{
                display: 'inline-block',
                width: isWide ? "40%" : "100%",
                textAlign: isWide ? "left" : "center",
            }}>
                <div className={styles.navigation_bar__logo_wrapper}>
                    <Image alt="logo" src="/logo.png" width={50} height={50} style={{ float: "left" }} />
                </div>
                <div className={styles.navigation_bar__title_box} style={{ transform: "translateY(-25%)" }}>
                    <h1 className={styles.navigation_bar__title}>Sonrisas del Mañana</h1>
                    <h2 className={styles.navigation_bar__subtitle}>Un camino hacia el futuro</h2>
                </div>
            </div>
            <ul className={styles.navigation_bar__button_box} style={{
                clear: isWide ? "none" : "both",
                float: isWide ? "right" : "none",
                width: isWide ? "50%" : "100%",
                textAlign: isWide ? "right" : "center",
            }}>
                {props.children}
            </ul>
        </nav>
    );
}

export { NavigationBar, NavigationBarButton };