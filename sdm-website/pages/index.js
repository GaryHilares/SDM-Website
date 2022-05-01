import Head from 'next/head';
import styles from "../styles/main.module.css";
import Footer from '../components/Footer.js';
import { NavigationBar, NavigationBarButton } from '../components/NavigationBar.js'
import { DescriptiveContentBox, DescriptiveContent } from '../components/DescriptiveContent.js';
import { TestimoniesBox, Testimony } from '../components/Testimonies.js';
import { useRef } from "react";
import Presentation from "../components/Presentation.js";

export default function Home() {
    const aboutUsRef = useRef(null);
    const testimoniesRef = useRef(null);
    const contactRef = useRef(null);
    const goToJoin = () => window.location.href = '/join';
    const scrollToAboutUs = () => aboutUsRef.current.scrollIntoView();
    const scrollToTestimonies = () => testimoniesRef.current.scrollIntoView();
    const scrollToContact = () => contactRef.current.scrollIntoView();
    return (
        <div>
            <Head>
                <title>Sonrisas del Mañana</title>
                <meta charSet='utf-8' />
                <meta name="description" content="Sonrisas del mañana nació como una idea para ayudar a quienes más lo necesitan y a quienes la pandemia los afectó en mayor medida, ya sea, interrumpiendo sus estudios o afectando su aprendizaje. Es un programa que brinda ayuda mediante campañas de voluntariado, recolección de víveres y/o talleres." />
                <link rel="icon" href="/sdm.ico" />
                <meta name="keywords" content="sonrisas, manana, mañana, voluntariado, ayuda" />
                <meta name="author" content="Gary Hilares" />
                <meta name="copyright" content="Gary Hilares" />
                <meta name="robots" content="index" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="og:title" content="Voluntariado Sonrisas del Mañana: Un camino hacia el futuro" />
                <meta name="og:description" content="Sonrisas del mañana nació como una idea para ayudar a quienes más lo necesitan y a quienes la pandemia los afectó en mayor medida." />
                <meta name="og:image" content="https://sonrisasdelmanana.org.pe/_next/image?url=%2Flogo.png&w=256&q=75" />
                <meta name="og:url" content="https://sonrisasdelmanana.org.pe/" />

                {/* Font links */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
                {/* /Font links */}

                {/* TwitterCard metadata */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@MananaSonrisas" />
                <meta name="twitter:title" content="Voluntariado Sonrisas del Mañana: Un camino hacia el futuro" />
                <meta name="twitter:description" content="Sonrisas del mañana nació como una idea para ayudar a quienes más lo necesitan y a quienes la pandemia los afectó en mayor medida." />
                <meta name="twitter:image" content="https://sonrisasdelmanana.org.pe/_next/image?url=%2Flogo.png&w=256&q=75" />
                {/* /TwitterCard metadata */}
            </Head>

            <main>
                <div className={styles.content} >
                    <NavigationBar>
                        <NavigationBarButton onClick={goToJoin} highlight={true}>¡Únete!</NavigationBarButton>
                        <NavigationBarButton onClick={scrollToAboutUs}>Nosotros</NavigationBarButton>
                        <NavigationBarButton onClick={scrollToTestimonies}>Testimonios</NavigationBarButton>
                        <NavigationBarButton onClick={scrollToContact}>Contacto</NavigationBarButton>
                    </NavigationBar>
                    <Presentation title={"Sonrisas del Mañana"} subtitle={"Un camino hacia el futuro"} imgSrc={"/SDM Happy Face.png"} />
                    <div ref={aboutUsRef}></div>
                    <DescriptiveContentBox title={"Nosotros"}>
                        <DescriptiveContent title={"¿Quiénes somos?"} imgSrc={"/people.png"}>
                            Sonrisas del mañana nació como una idea para ayudar a quienes más lo necesitan y a quienes la pandemia
                            los afectó en mayor medida, ya sea, interrumpiendo sus estudios o afectando su aprendizaje. Es un programa
                            que brinda ayuda mediante campañas de voluntariado, recolección de víveres y/o talleres. Para nosotros,
                            es de vital importancia que haya un compromiso por parte de los voluntarios, líderes de grupo y fundadoras
                            con el fin de potenciar el compromiso individual y colectivo y nos proponemos metas grupales, con el fin
                            de eliminar el individualismo de la sociedad.
                        </DescriptiveContent>
                        <DescriptiveContent title={"Nuestra misión"} imgSrc={"/flag.png"} invertOrder={true}> {/* ImgDimensions: width={293} height={384} */}
                            El programa tiene como objetivo ayudar a los niños en edad escolar, tal como dice nuestro lema buscamos
                            trazar “Un camino hacia el futuro”. Queremos que los niños que pertenezcan se desarrollen integralmente,
                            que la experiencia que vivan durante el programa sea diferente, que les enriquezca a nivel personal,
                            que tengan oportunidad de vivir experiencias culturales y poder impactar en sus vidas y por ende en sus
                            entornos para con ello tener líderes competitivos del futuro y así mejorar como sociedad.
                        </DescriptiveContent>
                    </DescriptiveContentBox>
                    <div ref={testimoniesRef}></div>
                    <TestimoniesBox title={"Testimonios"}>
                        <Testimony backgroundColor="#F6A800" author="Alguien" year={"Año"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis leo nec eros fringilla lacinia.
                            Vestibulum rutrum, sem et elementum aliquet, massa enim pulvinar odio, a convallis quam mauris sed odio.
                            Proin varius est mi. Fusce tincidunt nec augue in gravida.
                        </Testimony>
                        <Testimony backgroundColor="#FDD513" goRight={true} author="Alguien" year={"Año"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis leo nec eros fringilla lacinia.
                            Vestibulum rutrum, sem et elementum aliquet, massa enim pulvinar odio, a convallis quam mauris sed odio.
                            Proin varius est mi. Fusce tincidunt nec augue in gravida.
                        </Testimony>
                        <Testimony backgroundColor="#FDD513" author="Alguien" year={"Año"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis leo nec eros fringilla lacinia.
                            Vestibulum rutrum, sem et elementum aliquet, massa enim pulvinar odio, a convallis quam mauris sed odio.
                            Proin varius est mi. Fusce tincidunt nec augue in gravida.
                        </Testimony>
                        <Testimony backgroundColor="#F6A800" goRight={true} author="Alguien" year={"Año"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis leo nec eros fringilla lacinia.
                            Vestibulum rutrum, sem et elementum aliquet, massa enim pulvinar odio, a convallis quam mauris sed odio.
                            Proin varius est mi. Fusce tincidunt nec augue in gravida.
                        </Testimony>
                    </TestimoniesBox>
                    <div ref={contactRef}></div>
                    <Footer />
                </div >
            </main>
        </div>
    )
}
