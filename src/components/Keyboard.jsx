import React from "react";
import Letter from "./letters/Letter";
import firstRow from "./letters/letters/firstRow";
import secondRow from "./letters/letters/secondRow";
import lastRow from "./letters/letters/lastRow";

function Keyboard() {
    function createLetterKey(item) {
        return(<Letter 
                key={item.id}
                letter={item.letter}
                container={
                    (item.link !== "/") 
                    ? "container" 
                    : "container-inactive"
                }
                to={item.link}
                name={item.name}
            />)
    }

    // when a key is clicked, show the difference

    return (
        <div className="keyboard" id={"keyboard"}>
            <div className="letter-row">{firstRow.map(createLetterKey)}</div>
            <div className="letter-row">{secondRow.map(createLetterKey)}</div>
            <div className="letter-row">{lastRow.map(createLetterKey)}</div>
        </div>)
}

export default Keyboard;