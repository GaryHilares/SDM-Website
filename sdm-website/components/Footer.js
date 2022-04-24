import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { useMediaQuery } from '../functions/hooks.js';

export default function Footer() {
    const isWide = useMediaQuery('(min-width: 800px)');
    return (
        <footer className={styles.footer} data-aos="zoom-in">
            <div className={styles.footer__contact} style={{ width: isWide ? "55%" : "80%" }}>
                <div className={styles.footer__contact__image_wrapper} style={{ float: isWide ? "left" : "none", marginRight: isWide ? "20px" : "0", textAlign: "center" }}>
                    <Image src={"/logo.png"} width={286} height={286} />
                </div>
                <div className={styles.footer__contact__text_wrapper} style={{ marginLeft: isWide ? "20px" : "0", float: isWide ? "right" : "none", overflowWrap: "break-word" }}>
                    <h1 className={styles.footer__contact__title}>Contáctanos</h1>
                    <p className={styles.footer__contact__text}>Instagram: @sonrisasdelmanana_</p>
                    <p className={styles.footer__contact__text}>Correo: sdelmanana@gmail.com</p>
                </div>
            </div>

            <div className={styles.footer__copyright_notice__wrapper}>
                <span className={styles.footer__copyright_notice__text}>Copyright © 2022 por Sonrisas del Mañana. Todos los derechos reservados.</span>
            </div>
        </footer>
    );
}

