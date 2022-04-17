import Head from 'next/head'
import Footer from './Footer.js';
import Presentation from './Presentation.js';
import { NavigationBar, NavigationBarButton } from './NavigationBar';
import styles from '../styles/main.module.css';

export default function ThanksSite() {
    const goToHome = () => window.location.href = '/';
    return (
        <div>
            <Head>
                <title>Sonrisas del Mañana</title>
                <meta name="description" content="Sonrisas del Mañana: Un camino hacia el futuro." />
                <link rel="icon" href="/sdm.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <main className={styles.content}>
                <NavigationBar>
                    <NavigationBarButton onClick={goToHome}>Inicio</NavigationBarButton>
                </NavigationBar>
                <Presentation title={"¡Gracias por rellenar el formulario!"} subtitle={"Por favor espera mientras revisamos tu solicitud y te contactamos de vuelta."} />
                <Footer />
            </main>

            <footer>
            </footer>
        </div>
    )
}