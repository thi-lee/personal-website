import React from "react";
import LetterKey from "./LetterKey";
import firstRow from "./letters/firstRow";
import secondRow from "./letters/secondRow";
import lastRow from "./letters/lastRow";
import ScrollIntoView from "react-scroll-into-view";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Keyboard() {
    function createLetterKey(item) {
        return <LetterKey 
            key={item.id}
            letter={item.letter}
            container={(item.link !== "/") ? "container" : "container-inactive"}
            to={`${item.link}`}
        />
    }

    return (
        <div className="keyboard" id={"keyboard"}>
            <div className="letter-row">{firstRow.map(createLetterKey)}</div>
            <div className="letter-row">{secondRow.map(createLetterKey)}</div>
            <div className="letter-row">{lastRow.map(createLetterKey)}</div>
            <ScrollIntoView selector="#display">
                <KeyboardArrowDownIcon 
                style={{
                    color: "#DDA15E",
                    width: "100%",
                    fontSize: "70px",
                    padding: "0",
                    cursor: "pointer"
                }} />
            </ScrollIntoView>
        </div>)
}

export default Keyboard;