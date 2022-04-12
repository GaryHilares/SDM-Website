import styles from "../styles/ContentStyles.module.css";
import Image from 'next/image';

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
            <div className={styles.section_2}>
            </div>
        </div>
    );
}