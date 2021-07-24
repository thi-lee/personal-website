import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Logo() {
    return <div>
        <a className="header-logo" href="https://www.linkedin.com/in/thilehy/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="header-logo" icon={faLinkedin} size="2x" />
        </a>
        <a className="header-logo" href="https://github.com/thi-lee" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="header-logo" icon={faGithub} size="2x" />
        </a>
    </div>
}

function Header() {
    return <header>
        <h1>Thi Le</h1>
        <Logo />
        <p></p>
        <div className="navigation" id={"header"}>
            <ScrollIntoView selector="#keyboard">
                {/* <p className="dive-in">→ c o n t i n u e ←</p> */}
                <KeyboardArrowDownIcon className="arrow-icon" 
                style={{ width: "100%", fontSize: "70px", }}/>
            </ScrollIntoView>
        </div>
    </header>
}

export default Header;