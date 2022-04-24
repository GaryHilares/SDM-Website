import styles from "../styles/Testimonies.module.css";
import { useMediaQuery } from '../functions/hooks.js';

function TestimoniesBox(props) {
    return (
        <div>
            <h1 className={styles.testimony_box__title} data-aos="fade-up">{props.title}</h1>
            <div className={styles.testimony_box__elements_wrapper}>
                {props.children}
            </div>
        </div>
    );
}

function Testimony(props) {
    const isWide = useMediaQuery('(min-width: 800px)');
    return (
        <div className={styles.testimony_box__element} style={{
            backgroundColor: props.backgroundColor,
            float: isWide ? (props.goRight ? "right" : "left") : "none",
            margin: isWide ? (props.goRight ? "0 12.5% 5% 0" : "0 0 5% 12.5%") : "0 5% 5%",
            textAlign: isWide ? (props.goRight ? "left" : "right") : "center",
        }}
            data-aos={props.goRight ? "fade-left" : "fade-right"}
        >
            <div>
                {props.children}
            </div>
            <span className={styles.testimony_box__element__author}>~{props.author} ({props.year})</span>
        </div>
    );
}

export { TestimoniesBox, Testimony };