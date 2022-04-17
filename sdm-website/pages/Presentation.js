import styles from '../styles/Presentation.module.css';
import Image from 'next/image';

export default function Presentation(props) {
    return (
        <div className={styles.presentation}>
            <div className={styles.presentation__main_wrapper}>
                <div className={props.imgSrc ? styles.presentation__main_wrapper_with_logo__text : styles.presentation__main_wrapper__text}>
                    <h1 className={styles.presentation__main_title}>{props.title}</h1>
                    <h2 className={styles.presentation__main_subtitle}>{props.subtitle}</h2>
                </div>
                {props.imgSrc && <div className={styles.presentation__main_wrapper__logo}>
                    <Image alt="logo" src={props.imgSrc} width={350} height={350} />
                </div>}
            </div>
        </div>
    );
}

