import styles from "../styles/main.module.css";
import Footer from './Footer.js';
import { NavigationBar, NavigationBarButton } from './NavigationBar.js'
import { DescriptiveContentBox, DescriptiveContent } from './DescriptiveContent.js';
import { TestimoniesBox, Testimony } from './Testimonies.js';
import { useRef } from "react";
import Presentation from "./Presentation.js";

export default function HomePage() {
    const aboutUsRef = useRef(null);
    const testimoniesRef = useRef(null);
    const contactRef = useRef(null);
    const goToJoin = () => window.location.href = '/join';
    const scrollToAboutUs = () => aboutUsRef.current.scrollIntoView();
    const scrollToTestimonies = () => testimoniesRef.current.scrollIntoView();
    const scrollToContact = () => contactRef.current.scrollIntoView();
    return (
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
    );
}