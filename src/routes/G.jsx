import { TextHeading, Text, Img } from "../components/letters/DisplayComps";

function G() {
    return (<div className="display" id={"display"}>
        <TextHeading heading="Gallery" />
        <Text text="Mostly landscapes of places I have been to. And sometimes unprofessional photos of myself." />
        <p className="text" style={{paddingBottom: "0"}}>Thi in Chicago:</p>
        <div className="photos">
            <Img src="./img/me-in-chicago.jpg" alt="Thi in Chicago" />
            <Img src="./img/me-in-chicago-2.JPG" alt="Thi in Chicago" />
        </div>

        <p className="text" style={{paddingBottom: "0"}}>Fall:</p>
        <div className="photos">
            <Img src="./img/fall-woburn.jpg" alt="Fall on Woburn" />
            <Img src="./img/fall-street.JPEG" alt="Fall in Bham" />
            <Img src="./img/fall-campus.JPEG" alt="Fall in Bham" />
        </div>
    </div>)
}

export default G;

