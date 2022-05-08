import Head from 'next/head'
import Footer from '../components/Footer.js';
import Presentation from '../components/Presentation.js';
import { NavigationBar, NavigationBarButton } from '../components/NavigationBar';
import styles from '../styles/main.module.css';

export default function ThanksSite() {
    return (
        <div>
            <Head>
                <title>Sonrisas del Mañana</title>
                <meta charSet='utf-8' />
                <meta name="description" content="Gracias por rellenar el formulario. Revisaremos tu aplicación y te responderemos proximamente." />
                <link rel="icon" href="/sdm.ico" />
                <meta name="keywords" content="sonrisas, manana, mañana, voluntariado, ayuda" />
                <meta name="author" content="Gary Hilares" />
                <meta name="copyright" content="Gary Hilares" />
                <meta name="robots" content="noindex" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="og:title" content="Gracias por tu respuesta" />
                <meta name="og:description" content="Gracias por rellenar el formulario. Revisaremos tu aplicación y te responderemos proximamente." />
                <meta name="og:image" content="https://sonrisasdelmanana.org.pe/_next/image?url=%2Flogo.png&w=256&q=75" />
                <meta name="og:url" content="https://sonrisasdelmanana.org.pe/thanks" />
                <meta name="og:locale" content="es_ES" />
                <meta name="og:type" content="website" />

                {/* Font links */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
                {/* /Font links */}

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
                    <NavigationBarButton link={'/'}>Inicio</NavigationBarButton>
                </NavigationBar>
                <Presentation title={"¡Gracias por rellenar el formulario!"} subtitle={"Por favor espera mientras revisamos tu solicitud y te contactamos de vuelta."} />
                <Footer />
            </main>
        </div>
    )
}