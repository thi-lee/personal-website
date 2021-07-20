import React from "react";
import { TextHeading, Text } from "../Display";

// contact icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

// skills icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faHtml5, faCss3, faNodeJs, faJs } from '@fortawesome/free-brands-svg-icons'

// these routes contain mostly information about me

function Home() {
    return (
        <div className="display">
            <TextHeading heading="Welcome!" />
            <Text text="I'm glad to find you here. How are you doing?" />
            <Text text="This website is inspired by the keyboard most of us use daily.
            Every blue letter on the left associate with a word or phrase, and when clicked,
            the corresponding information will be on display." />
            <Text text="Shall we start? Find 'A' and let the journey begin :) " />
        </div>
    )
}

function A() {
    return (
        <div className="display">
            <TextHeading heading="About Me" />
            <Text text="My name is Thi Le (pronounced like 'tea 🍵'), 
            and I am an incoming transfer student and a CS sophomore 
            at the University of North Carolina – Chapel Hill. " />
        </div>
    )
}

function B() {
    return (
        <div className="display">
            <TextHeading heading="Burrito" />
            <Text text="When I first came to America, I didn't like burrito.
            Eating them results in a big mess that I didn't want to deal with." />
            <Text text="However, in my third year, everyone can make me happy
            by giving me a burrito. I love the ones with beef and rice. " />
        </div>
    )
}

function C() {
    const info = [
        {
            href: "https://www.linkedin.com/in/thilehy/",
            icon: <LinkedInIcon style={{ fontSize: 50 }} />
        },
        {
            href: "https://github.com/thi-lee",
            icon: <GitHubIcon style={{ fontSize: 40 }} />
        },
        {
            // when clicked, transform to the left and display email
            href: "thi.le@unc.edu",
            icon: <MailIcon style={{ fontSize: 50 }} />
        }
    ];
    function createIcon(eachIcon) {
        return(
            <a
            className="icon"
            href={eachIcon.href}
            target="_blank"
            rel="noreferrer">
                {eachIcon.icon}
            </a>
        )
    }

    return (
        <div className="display">
            <TextHeading heading="Contact" />
            <p className="text icons" style={{textAlign: "center"}}>
            {info.map(createIcon)}
            </p>
        </div>
    )
}

export { Home, A, B, C };