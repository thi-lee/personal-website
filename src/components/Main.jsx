import React, { useState } from "react";
import LetterKey from "./main/LetterKey";
import DisplayMain from "./main/Display";
import firstRow from "./main/letters/firstRow";
import secondRow from "./main/letters/secondRow";
import lastRow from "./main/letters/lastRow";

function Main() {
    const [defaultContent, setContent] = useState("Welcome!");

    function onClickEvent(newContent) {
        setContent(newContent)
    }

    function createLetterKey(item) {
        return <LetterKey 
            key={item.id}
            letter={item.letter}
            onClickEvent={() => onClickEvent(item.content)}
            className={item.content ? "container" : "container-inactive"}
        />
    }

    return (<div className="main">
        <div className="letters">
            <div className="letter-row">{firstRow.map(createLetterKey)}</div>
            <div className="letter-row">{secondRow.map(createLetterKey)}</div>
            <div className="letter-row">{lastRow.map(createLetterKey)}</div>
        </div>
        <DisplayMain content={defaultContent} />
    </div>)
}

export default Main;