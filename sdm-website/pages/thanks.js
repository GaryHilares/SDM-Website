import Head from 'next/head'
import Footer from '../components/Footer.js';
import Presentation from '../components/Presentation.js';
import { NavigationBar, NavigationBarButton } from '../components/NavigationBar';
import styles from '../styles/main.module.css';

export default function ThanksSite() {
    const goToHome = () => window.location.href = '/';
    return (
        <div>
            <Head>
                <title>Sonrisas del Mañana</title>
                <meta name="description" content="Gracias por rellenar el formulario. Revisaremos tu aplicación y te responderemos proximamente." />
                <link rel="icon" href="/sdm.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />

                {/* TwitterCard metadata */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@MananaSonrisas" />
                <meta name="twitter:title" content="Gracias por tu respuesta" />
                <meta name="twitter:description" content="Gracias por rellenar el formulario. Revisaremos tu aplicación y te responderemos proximamente." />
                <meta name="twitter:image" content="https://sonrisasdelmanana.org.pe/_next/image?url=%2Flogo.png&w=256&q=75" />
                {/* /TwitterCard metadata */}
            </Head>

            <main className={styles.content}>
                <NavigationBar>
                    <NavigationBarButton onClick={goToHome}>Inicio</NavigationBarButton>
                </NavigationBar>
                <Presentation title={"¡Gracias por rellenar el formulario!"} subtitle={"Por favor espera mientras revisamos tu solicitud y te contactamos de vuelta."} />
                <Footer />
            </main>
        </div>
    )
}