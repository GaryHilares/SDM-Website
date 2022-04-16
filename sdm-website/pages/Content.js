import styles from "../styles/ContentStyles.module.css";
import Image from 'next/image';

function Footer() {
    return (
        <footer style={{ backgroundColor: "#00A2AD", borderRadius: "113px 113px 0 0", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>

            <div style={{ padding: "50px", overflow: "auto", width: "55%", margin: "auto" }}>
                <div style={{ float: "left", marginRight: "20px" }}>
                    <Image src={"/logo.png"} width={286} height={286} />
                </div>
                <div style={{ marginLeft: "20px" }}>
                    <h1 style={{ fontWeight: "bold", fontSize: "1.875rem" }}>Contáctanos</h1>
                    <p style={{ fontSize: "1.875rem" }}>Instagram: @sonrisasdelmanana_</p>
                    <p style={{ fontSize: "1.875rem" }}>Correo: sdelmanana@gmail.com</p>
                </div>
            </div>

            <div style={{ clear: "both", color: "white", backgroundColor: "black", textAlign: "center" }}>
                <span style={{ display: "block", fontStyle: "italic", fontSize: "1.25rem", padding: "0.25rem" }}>Copyright © 2022 por Sonrisas del Mañana. Todos los derechos reservados.</span>
            </div>
        </footer >
    );
}

function DescriptiveContentBox(props) {
    return (
        <div className={styles.section_2} style={{ overflow: "hidden" }}>
            <h1 className={styles.section_2__title}>{props.title}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}

function DescriptiveContent(props) {
    return (
        <div style={{ overflow: "hidden", padding: "30px 0" }}>
            <div style={{ float: props.invertOrder ? "right" : "left", width: "50%", textAlign: "center" }}>
                <Image src={props.imgSrc} width={358} height={237} />
            </div>
            <div style={{ float: props.invertOrder ? "left" : "right", width: "50%" }}>
                <h2 className={styles.section_2__subtitle} style={{ textAlign: "center", padding: "10px" }}>{props.title}</h2>
                <p className={styles.section_2__text} style={{ lineHeight: "27px" }}>
                    {props.children}
                </p>
            </div>

        </div>
    );
}

function TestimoniesBox(props) {
    return (
        <div>
            <h1 style={{ textAlign: "center", fontSize: "4.25rem", fontWeight: "bold", margin: "3rem 0" }}>{props.title}</h1>
            <div style={{ overflow: "hidden" }}>
                {props.children}
            </div>
        </div>
    );
}

function Testimony(props) {
    return (
        <div style={{
            backgroundColor: props.backgroundColor,
            float: props.goRight ? "right" : "left",
            borderRadius: "32px",
            margin: props.goRight ? "0 12.5% 5% 0" : "0 0 5% 12.5%",
            width: "30%",
            padding: "2.5%",
            textAlign: props.goRight ? "left" : "right",
            lineHeight: "27px"
        }}>
            <div>
                {props.children}
            </div>
            <span style={{ display: "block", width: "100%", textAlign: "right", fontWeight: "bold" }}>~{props.author} ({props.year})</span>
        </div>
    );
}

export default function Content() {
    return (
        <div className={styles.content}>
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