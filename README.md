# Personal Website

## Table of contents

- [Overview](https://github.com/thi-lehoangy/personal-website#overview)
    - [The challenge](https://github.com/thi-lehoangy/personal-website#the-challenge)
    - [Screenshot](https://github.com/thi-lehoangy/personal-website#screenshot)
    - [Links](https://github.com/thi-lehoangy/personal-website#links)
- [My process](https://github.com/thi-lehoangy/personal-website#my-process)
    - [Built with](https://github.com/thi-lehoangy/personal-website#built-with)
    - [What I learned](https://github.com/thi-lehoangy/personal-website#what-i-learned)
    - [Continued development](https://github.com/thi-lehoangy/personal-website#continued-development)
    - [Useful resources](https://github.com/thi-lehoangy/personal-website#useful-resources)
- [Author](https://github.com/thi-lehoangy/personal-website#author)
- [Acknowledgments](https://github.com/thi-lehoangy/personal-website#acknowledgments)

## Overview

### The challenge

- Intuitive navigation and transition between pages:
    - Since this page doesn’t have the conventional layout, it can be hard to navigate for some people. It takes a lot of feedback for me to recognize what works and does not work for someone who’s visiting for the first time.
- Keeping files short and sweet — reusable and maintainable
    - I just don’t want to look at my code and moan
    - But who can guarantee that will never happen
    - I just try to avoid that as much as possible
    
### Screenshot

<img width="1920" alt="personal-website1" src="https://user-images.githubusercontent.com/60861845/177077721-b88906bb-ccd9-4409-b23a-b0eec0a54d40.png">
<img width="1920" alt="personal-website2" src="https://user-images.githubusercontent.com/60861845/177077727-45016676-05d7-4ab6-9327-31d3724e2743.png">


### Links

Live Site URL: [thilehoangy.com](https://www.notion.so/Github-Personal-website-0c5fa603d9174833ae9e1e9d731bcf63)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [React](https://reactjs.org/) - JS library

### What I learned

```jsx
// JS code that I'm proud of
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

    // Generating the keyboard from the key component

    return (
        <div className="keyboard" id={"keyboard"}>
            <div className="letter-row">{firstRow.map(createLetterKey)}</div>
            <div className="letter-row">{secondRow.map(createLetterKey)}</div>
            <div className="letter-row">{lastRow.map(createLetterKey)}</div>
        </div>)
}

export default Keyboard;

```

### Continued development

- [ ]  Add technical projects
- [ ]  Add resume + email
- [ ]  Add personal non-technical projects
- [ ]  A back-end to store photos

### Useful resources

- [React documentation](https://reactjs.org/) - Always a good place to refer to for any React questions
- Some buddies who never code, so they can point out what’s not working without knowing that a feature can takes me half a day to work on

## Author

- Website - [Thi Le](https://www.github.com/thi-lehoangy)

## Acknowledgments

- Again, my buddies
- And React documentation
- And the Internet
