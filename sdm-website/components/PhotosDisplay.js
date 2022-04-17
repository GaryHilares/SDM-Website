import Image from 'next/image';

function PhotoDisplay(props) {
    return (
        <div>
            <div style={{ fontSize: "1.125em", width: "40%", backgroundColor: "#F6A800", height: "325px", padding: "20px", borderRadius: "32px", lineHeight: "27px", display: 'inline-block', margin: '0 0 25px 15%' }} data-aos="fade-right">
                {props.children}
            </div>
            <div style={{ float: "right", margin: '0 15% 25px 0' }} data-aos="fade-left" >
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