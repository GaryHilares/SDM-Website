import Head from 'next/head'
import Footer from '../components/Footer.js';
import Presentation from '../components/Presentation.js';
import { NavigationBar, NavigationBarButton } from '../components/NavigationBar';
import { DescriptiveContentBox, DescriptiveContent } from '../components/DescriptiveContent.js';
import styles from '../styles/main.module.css';
import JoinForm from '../components/joinForm.js';
import { PhotoDisplay, PhotosDisplayBox } from '../components/PhotosDisplay.js';

export default function JoinSite() {
    const goToHome = () => window.location.href = '/';
    return (
        <div>
            <Head>
                <title>Sonrisas del Mañana</title>
                <meta charSet='utf-8' />
                <meta name="description" content="Únete a Sonrisas del mañana, el voluntariado que nació como una idea para ayudar a quienes más lo necesitan y a quienes la pandemia los afectó en mayor medida." />
                <link rel="icon" href="/sdm.ico" />
                <meta name="keywords" content="sonrisas, manana, mañana, voluntariado, ayuda, unirse" />
                <meta name="author" content="Gary Hilares" />
                <meta name="copyright" content="Gary Hilares" />
                <meta name="robots" content="index" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Font links */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
                {/* /Font links */}

                {/* TwitterCard metadata */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@MananaSonrisas" />
                <meta name="twitter:title" content="Únete al Voluntariado Sonrisas del Mañana: Un camino hacia el futuro" />
                <meta name="twitter:description" content="Sonrisas del mañana nació como una idea para ayudar a quienes más lo necesitan y a quienes la pandemia los afectó en mayor medida, ya sea, interrumpiendo sus estudios o afectando su aprendizaje. Es un programa que brinda ayuda mediante campañas de voluntariado, recolección de víveres y/o talleres." />
                <meta name="twitter:image" content="https://sonrisasdelmanana.org.pe/_next/image?url=%2Flogo.png&w=256&q=75" />
                {/* /TwitterCard metadata */}
            </Head>

            <main className={styles.content}>
                <NavigationBar>
                    <NavigationBarButton onClick={goToHome}>Inicio</NavigationBarButton>
                </NavigationBar>
                <Presentation title={"¡Únete a Sonrisas del Mañana!"} subtitle={"Ser voluntario es una experiencia única y aleccionadora de dar y recibir."} />
                <DescriptiveContentBox title={"¿Por qué participar?"}>
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
                <PhotosDisplayBox title={"¿Qué puedo hacer?"}>
                    <PhotoDisplay imgSrc="/logo.png">
                        En el equipo de marketing tenemos diferentes comisiones a las que podrás elegir unirte. Entre las actividades que podrás hacer están:
                        <br />- Crear contenido para nuestras redes sociales.
                        <br />- Participar en el desarrollo de nuestro sitio web.
                        <br />- Dar a conocer el programa a potenciales voluntarios.
                        <br />- Realizar entrevistas a personas interesadas en unirse.
                        <br />- Interactuar y analizar las estadísticas de creador de contenido de nuestras redes sociales.
                    </PhotoDisplay>
                    <PhotoDisplay imgSrc="/logo.png">
                        Si decides unirte al equipo de contactos, tu trabajo será:
                        <br />- Presentar las propuestas de la organización a otras entidades como ONG&apos;s, casa hogares o cualquier otro potencial aliado.
                        <br />- Buscar posibles aliados y presentarlos a la directiva para su aprobación y para empezar el contacto con ellos.
                        <br />- Una vez la propuesta haya sido aprobada, iniciar el contacto con nuestros nuevos posibles aliados para establecer una alianza.
                        <br />- Coordinar con nuestras aliados para realizar planes de ayuda mutua.
                    </PhotoDisplay>
                    <PhotoDisplay imgSrc="/logo.png">
                        Aquellos que deciden unirse al equipo de proyectos se encargan de:
                        <br />- Crear, recibir y transmitir ideas de proyectos que pudiese realizar la organización.
                        <br />- Redactar propuestas las propuestas de trabajo y enviárselos a los supervisores del equipo para su aprobación.
                        <br />- Planificar las propuestas de trabajo aprobadas y sus detalles en colaboración de los supervisores y la directiva. Esto implica establecer metas, objetivos, estrategias horarios y más.
                    </PhotoDisplay>
                </PhotosDisplayBox>
                <DescriptiveContentBox title={"¿Cuáles son los requisitos?"}>
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
                <JoinForm />
                <Footer />
            </main>
        </div>
    )
}