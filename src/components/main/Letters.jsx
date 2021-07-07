import React from "react";
import LetterKey from "./LetterKey";
import lettersAJ from "./letters/lettersAJ";
import lettersKT from "./letters/lettersKT";
import lettersUZ from "./letters/lettersUZ";

function createLetterKey(item) {
    return <LetterKey 
        key={item.id}
        letter={item.letter}
        content={item.content}
        onClickEvent={() => console.log(item.letter)}
    />
}

function Letters() {
    return (<div className="letters">
        <div className="letter-row">
            {lettersAJ.map(createLetterKey)}
        </div>
        <div className="letter-row">
            {lettersKT.map(createLetterKey)}
        </div>
        <div className="letter-row">
            {lettersUZ.map(createLetterKey)}
        </div>
    </div>)
}

export default Letters;