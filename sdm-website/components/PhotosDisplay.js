import Image from 'next/image';
import styles from '../styles/PhotosDisplay.module.css';

function PhotoDisplay(props) {
    return (
        <div className={styles.photo_display}>
            <div className={styles.photo_display__description} data-aos="fade-right">
                {props.children}
            </div>
            <div className={styles.photo_display__image_wrapper} data-aos="fade-left">
                <Image src={props.imgSrc} width={360} height={360} />
            </div>
        </div>
    );
}


function PhotosDisplayBox(props) {
    return (
        <div>
            <h1 className={styles.photos_display_box__title} data-aos="fade-up">{props.title}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export { PhotoDisplay, PhotosDisplayBox };