import React, { useState } from "react";
import LetterKey from "./main/LetterKey";
import DisplayMain, { TextHeading, Text } from "./main/Display";
import firstRow from "./main/letters/firstRow";
import secondRow from "./main/letters/secondRow";
import lastRow from "./main/letters/lastRow";

function Main() {
    const [defaultContent, setContent] = useState(<div>
        <TextHeading heading="Welcome!" />
        <Text text="I'm glad to find you here. How are you doing?" />
        <Text text="This website is inspired by the keyboard most of us use daily.
        Every blue letter on the left associate with a word or phrase, and when clicked,
        the corresponding information will be on display." />
        <Text text="Shall we start? Find 'A' and let the journey begin :) " />
        <Text className="button" text="Navigate to A: About me" onClick={() => {
            setContent(secondRow[0]["content"])
        }} />
    </div>);

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