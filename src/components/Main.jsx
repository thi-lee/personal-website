import React, { useState } from "react";
import LetterKey from "./main/LetterKey";
import DisplayMain, { Display } from "./main/Display";
import lettersAJ from "./main/letters/lettersAJ";
import lettersKT from "./main/letters/lettersKT";
import lettersUZ from "./main/letters/lettersUZ";

function Main() {
    const [defaultContent, setContent] = useState("Welcome!")
    function onClickKey(newPara) {
        setContent(newPara);
    }

    function createLetterKey(item) {
        return <LetterKey 
            key={item.id}
            letter={item.letter}
            onClickEvent={() => onClickKey(item.content)}
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
        <DisplayMain content={defaultContent} />
    </div>)
}

export default Main;