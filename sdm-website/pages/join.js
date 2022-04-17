import Head from 'next/head'
import Footer from './Footer.js';
import Presentation from './Presentation.js';
import { NavigationBar, NavigationBarButton } from './NavigationBar';
import { DescriptiveContentBox, DescriptiveContent } from './DescriptiveContent.js';
import styles from '../styles/main.module.css';

export default function JoinSite() {
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
                <Presentation title={"¡Únete a Sonrisas del Mañana!"} subtitle={"Ser voluntario es una experiencia única y aleccionadora de dar y recibir."} />
                <DescriptiveContentBox title={"¿Por qué volverse voluntario?"}>
                    <DescriptiveContent title={"Dar oportunidades"} imgSrc={'/give.png'} invertOrder={true}>
                        En Sonrisas del Mañana tenemos un gran compromiso social por ayudar a otras personas, siendo que
                        buscamos permitir que los benificiarios del programa tengan la oportunidad de desarrollarse de forma
                        íntegra a pesar de las desfavorables condiciones que hayan podido tener. De esta forma, al participar
                        como voluntario en Sonrisas del Mañana, podrás expresar todo tu agradecimiento y contribuir a hacer
                        un futuro mejor de  igualdad y bien común.
                    </DescriptiveContent>
                    <DescriptiveContent title={"Recibir aprendizaje"} imgSrc={'/certificate.png'} invertOrder={true}>
                        Al ser voluntario, podrás desarrollar muchas de tus habilidades. Te conocerás mejor a ti mismo,
                        mejorarás tus habilidades de trabajo en equipo y de trabajo personal y podrás relacionarte más
                        estrechamente con cuestiones de importancia global. También mejorarás tus habilidades relacionadas
                        al área en el que has elegido participar y conocerás otras personas con intereses en el mismo. Si
                        esto no fuese suficiente, al final del programa nuestra organización certifica tu compromiso para
                        que puedas hacer saber a otras personas del trabajo que has realizado con nosotros.
                    </DescriptiveContent>
                </DescriptiveContentBox>
                <DescriptiveContentBox title={"Elegibilidad y requisitos"}>
                    <DescriptiveContent title={"Al postular"} imgSrc={'/check.png'}>
                        Para postular como voluntario en Sonrisas Del Mañana, debes de cumplir los siguientes requisitos:
                        <br />1. Tener como mínimo 15 años.
                        <br />2. Ser estudiante en un colegio, universidad o instituto.
                        <br />3. Saber hablar español indiferentemente de si es tu primera lengua o no.
                    </DescriptiveContent>
                    <DescriptiveContent title={"Al participar"} imgSrc={'/handshake.png'}>
                        Así pues, es importante notar que una vez que hayas sido aceptado, durante toda tu participación de Sonrisas Del Mañana, se requrerirá que:
                        <br />1. Participes de reuniones semanales.
                        <br />2. Firmes la ficha de compromiso.
                        <br />3. Tengas suficiente disponibilidad de tiempo para realizar las labores que se te encarguen por parte de Sonrisas del Mañana.
                    </DescriptiveContent>
                </DescriptiveContentBox>
                <Footer />
            </main>

            <footer>
            </footer>
        </div>
    )
}