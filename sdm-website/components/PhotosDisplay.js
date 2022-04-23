import Image from 'next/image';
import { useMediaQuery } from '../functions/hooks.js';

function PhotoDisplay(props) {
    const isWide = useMediaQuery('(min-width: 800px)');
    return (
        <div style={{ textAlign: isWide ? "inherit" : "center" }}>
            <div style={{
                fontSize: "1.125em",
                width: isWide ? "40%" : "80%",
                backgroundColor: "#F6A800",
                minHeight: "325px",
                padding: "20px",
                borderRadius: "32px",
                lineHeight: "27px",
                display: 'inline-block',
                margin: isWide ? '0 0 25px 15%' : "0 0 25px 0",
            }} data-aos="fade-right">
                {props.children}
            </div>
            <div style={{
                float: isWide ? "right" : "none",
                margin: isWide ? '0 15% 25px 0' : "0 0 25px 0",
            }} data-aos="fade-left" >
                <Image src={props.imgSrc} width={360} height={360} />
            </div>
        </div>
    );
}


function PhotosDisplayBox(props) {
    return (
        <div>
            <h1 style={{ fontSize: "4.375em", textAlign: "center", fontWeight: "bold", margin: "3rem" }} data-aos="fade-up">{props.title}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export { PhotoDisplay, PhotosDisplayBox };