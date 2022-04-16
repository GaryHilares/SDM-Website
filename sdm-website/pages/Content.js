import styles from "../styles/ContentStyles.module.css";
import Image from 'next/image';
import Footer from './Footer.js';
import NavigationBar from './NavigationBar.js'
import { DescriptiveContentBox, DescriptiveContent } from './DescriptiveContent.js';
import { TestimoniesBox, Testimony } from './Testimonies.js';

export default function HomePage() {
    return (
        <div className={styles.content} >
            <NavigationBar />
            <div className={styles.section_1}>
                <div className={styles.section_1__main_wrapper}>
                    <div className={styles.section_1__main_wrapper__text}>
                        <h1 className={styles.section_1__main_title}>Sonrisas del Mañana</h1>
                        <h2 className={styles.section_1__main_subtitle}>Un camino hacia el futuro</h2>
                    </div>
                    <div className={styles.section_1__main_wrapper__logo}>
                        <Image alt="logo" src="/SDM Happy Face.png" width={350} height={350} />
                    </div>
                </div>
            </div>
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
            <Footer />
        </div >
    );
}