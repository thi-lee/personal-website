import React, { useState } from "react";
import LetterKey from "./main/LetterKey";
import DisplayMain, { TextHeading, Text } from "./main/Display";
import firstRow from "./main/letters/firstRow";
import secondRow from "./main/letters/secondRow";
import lastRow from "./main/letters/lastRow";
import { Route } from "react-router-dom";
import { Home, A, B } from "../components/main/letterComp/A";

function Main() {
    function createLetterKey(item) {
        return <LetterKey 
            key={item.id}
            letter={item.letter}
            container={(item.link !== "/") ? "container" : "container-inactive"}
            to={`${item.link}`}
        />
    }

    return (<div className="main">
        <div className="letters">
            <div className="letter-row">{firstRow.map(createLetterKey)}</div>
            <div className="letter-row">{secondRow.map(createLetterKey)}</div>
            <div className="letter-row">{lastRow.map(createLetterKey)}</div>
        </div>
        <Route path="/home" component={Home} />
        <Route path="/A" component={A} />
        <Route path="/B" component={B} />
    </div>)
}

export default Main;