import React from "react";
import { TextHeading, Text } from "../Display";

function Home() {
    return (
        <div>
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
        <div>
            <TextHeading heading="About Me" />
            <Text text="My name is Thi Le (pronounced like 'tea 🍵'), 
            and I am an incoming transfer student and a CS sophomore 
            at the University of North Carolina – Chapel Hill. " />
        </div>
    )
}

function B() {
    return (
        <div>
            <TextHeading heading="Burrito" />
            <Text text="When I first came to America, I didn't like burrito.
            Eating burrito results in a big mess that I didn't want to deal with." />
        </div>
    )
}

export { Home, A, B };