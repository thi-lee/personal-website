import React, { useState } from "react";
// import Letters from "./main/Letters";
import LetterKey from "./main/LetterKey";
import Display from "./main/Display";
import lettersAJ from "./main/letters/lettersAJ";
import lettersKT from "./main/letters/lettersKT";
import lettersUZ from "./main/letters/lettersUZ";

function Main() {
    const [defaultHeading, setHeading] = useState("A");
    const [defaultPara, setPara] = useState("This is A");
    function onClickKey(newLetter, newPara) {
        setHeading(newLetter);
        setPara(newPara);
    }

    function createLetterKey(item) {
        return <LetterKey 
            key={item.id}
            letter={item.letter}
            onClickEvent={() => onClickKey(item.header, item.content)}
        />
    }

    return (<div className="main">
        <div className="letters">
            <div className="letter-row">
                {lettersAJ.map(createLetterKey)}
            </div>
            <div className="letter-row">
                {lettersKT.map(createLetterKey)}
            </div>
            <div className="letter-row">
                {lettersUZ.map(createLetterKey)}
            </div>
        </div>
        <Display heading={defaultHeading} para={defaultPara} />
    </div>)
}

export default Main;