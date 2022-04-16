import Image from 'next/image';
import styles from "../styles/DescriptiveContent.module.css";

function DescriptiveContentBox(props) {
    return (
        <div className={styles.descriptive_content_box}>
            <h1 className={styles.descriptive_content_box__title}>{props.title}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}

function DescriptiveContent(props) {
    return (
        <div className={styles.descriptive_content_box__element__wrapper}>
            <div className={styles.descriptive_content_box__element__image_wrapper} style={{ float: props.invertOrder ? "right" : "left" }}>
                <Image src={props.imgSrc} width={358} height={237} />
            </div>
            <div className={styles.descriptive_content_box__element__text_wrapper} style={{ float: props.invertOrder ? "left" : "right" }}>
                <h2 className={styles.descriptive_content_box__element__title}>{props.title}</h2>
                <p className={styles.descriptive_content_box__element__text}>
                    {props.children}
                </p>
            </div>

        </div>
    );
}

export { DescriptiveContentBox, DescriptiveContent };