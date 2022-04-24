import Image from 'next/image';
import styles from "../styles/DescriptiveContent.module.css";
import { useMediaQuery } from '../functions/hooks.js';

function DescriptiveContentBox(props) {
    return (
        <div className={styles.descriptive_content_box} ref={props.ref}>
            <h1 className={styles.descriptive_content_box__title} data-aos="fade-up">{props.title}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}

function DescriptiveContent(props) {
    const isWide = useMediaQuery('(min-width: 1200px)');
    return (
        <div className={styles.descriptive_content_box__element__wrapper}>
            <div className={styles.descriptive_content_box__element__image_wrapper} data-aos={props.invertOrder ? "fade-left" : "fade-right"}
                style={{
                    float: isWide ? (props.invertOrder ? "right" : "left") : "none",
                }}>
                <Image src={props.imgSrc} width={350} height={350} objectFit='contain' />
            </div>
            <div className={styles.descriptive_content_box__element__text_wrapper} data-aos={props.invertOrder ? "fade-right" : "fade-left"}
                style={{
                    float: isWide ? (props.invertOrder ? "left" : "right") : "none",
                }}>
                <h2 className={styles.descriptive_content_box__element__title}>{props.title}</h2>
                <p className={styles.descriptive_content_box__element__text}>
                    {props.children}
                </p>
            </div>

        </div >
    );
}

export { DescriptiveContentBox, DescriptiveContent };