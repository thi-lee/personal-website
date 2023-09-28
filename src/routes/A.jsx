import React from "react";
import { TextHeading, Img } from "../components/letters/DisplayComps";
import CallMadeIcon from '@material-ui/icons/CallMade';

function A() {
    return (
        <div className="display" id={"display"}>
            <TextHeading heading="About Me" />
            {/* <Img figcaption="Saigon raised, going everywhere" 
            src="./img/thi-le.JPG" /> */}
            <p className="text"><b>I'm Thi</b> (pronounced like "tea 🍵&nbsp;").
            I'm currently a senior at the University of North Carolina – Chapel Hill, 
            majoring in Computer Science and minoring in Information Systems & Data Science.</p>
            <p className="text"><b>From Aug 2021 to now</b>,&nbsp;
                I lead sponsorship committee with HackNC <a href="https://hacknc.com/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>, 
                create a hacker portal for HackNC 400+ participants, 
                build website for NC locals to fight chronicle illnesses with CS+SG <a href="https://cssgunc.org/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>, and 
                manage content for Carolina Analytics and Data Science <a href="http://carolinadata.unc.edu/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>. 
                I am also on the sponsorship committee for Pearl Hacks <a href="https://pearlhacks.com/" target="_blank" rel="noreferrer"><CallMadeIcon /></a> 
                and am a teaching assistant for UNC Girls Who Code <a href="https://girlswhocode.web.unc.edu/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>. 
                Through these activities, I get to hone my soft and hard skills, as well as build relationships with other CS fellows and staff @ UNC. 
            </p>
            <p className="text"><b>From Jun 2020 to Aug 2021</b>,&nbsp;
            {/* TODO: Add a project page to display all projects*/}
            I built websites (full-stack, front-end focused, and backend-focused) 
            <a href="https://github.com/thi-lee" target="_blank" rel="noreferrer"><CallMadeIcon /></a>,  
            coordinated the hiring process for 3 Fitness and Lifestyle Group Vietnam branches 
            <a href="https://www.fitlg.com/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>, and 
            wrote documentation for a buy now-pay later start-up Fundiin 
            <a href="https://fundiin.vn/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>.
            I also spent two weeks in quarantine camp in Uong Bi, Quang Ninh, Vietnam, 
            volunteered to translate 30+ Math videos to Vietnamese 
            <a href="https://vi.khanacademy.org/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>
            , and ran multiple 10K's. 
            </p>
            <p className="text"><b>From Sep 2017 to Jun 2020</b>, I migrated the WCC's Learning Center 
            to virtual operations while leading the Writing Center tutor team for 1 year 
            <a href="https://www.whatcom.edu/student-services/tutoring-learning-center" target="_blank" 
            rel="noreferrer"><CallMadeIcon /></a>and was a VP of Campus Christian Fellowship where I 
            raised ~$3,000 for 40 students to participate in a 200+ student weekend camp 
            <a href="https://www.ccfwhatcom.com/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>.</p>
            <p className="text">I've done a wide variety of things and I enjoyed the experience I had.
            Currently, I focus on finishing my CS degree while making the most out of my student life.
            If you want to grab a coffee and chat about the many exciting things in life, you can find me
            at thi.le@unc.edu.</p>
            {/* <p className="text"><b>Since Sep 21 I have</b>, spent two weeks in quarantine camp where I played card game with friends from all around Vietnam<a href="/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>
            scrapped walls and painted walls <a href="https://drive.google.com/drive/folders/1VZ4KMY5C7uCdNvZ0j_fyIU87pjS8f30F?usp=sharing" target="_blank" rel="noreferrer"><CallMadeIcon /></a>
            and enjoyed Tet with homegrown veggies and wonderful cousins at grandparents' after 3 years <a href="/" target="_blank" rel="noreferrer"><CallMadeIcon /></a>.</p> */}

            {/* <Text text="I am from Vietnam, Saigon born and raised. 
            I went to the US in 2017 to get a high school diploma and 
            an Associate's degree at a community college in the Pacific Northwest.
            Bellingham, which is two hours north of Seattle, is not well-known
            but surely a beautiful and welcoming place. A city girl like me got to
            hike many trails, kayak in many lakes, and observe the beautiful outlines 
            of islands along the coast of Bellingham. And people, obviously, are 
            the best part of everything. "/>

            <Img src="./img/fall-woburn.jpg"
            figcaption="This is Bellingham" />

            <Text text="The college I attended offered mostly gen-ed classes, 
            so I got to explore the natural sciences, social sciences, and 
            other areas of study. This wide-range of classes benefited me, 
            as I gain new perspectives and understandings of myself and what's going on around me.
            However, it surprisingly put my transfer application in a disadvantageous place 
            because I couldn't prove I have taken the right courses for any majors." />

            <Img src="./img/example-transcript.png"
            figcaption="You name a category, I took a class in it." />

            <Text text="At the time I thought I was doomed, even though I had actually
            enjoyed every single course I took and was eager to learn anything." />

            <Text text="But right now, that concern seems insignificant.
            If anything, I was lucky. As I got a chance to try many 
            things, fail many times, and get up many times, I became more 
            aware of my strengths," />

            <div className="cards">
                <Mycard cardHeader="Growth mindset" cardContent="An example of strength" />
                <Mycard cardHeader="Adaptability" cardContent="I can adapt very quickly" />
                <Mycard cardHeader="Strength" cardContent="An example of strength" />
            </div>

            <Text text="and weaknesses:" />

            <div className="cards">
                <Mycard cardHeader="Weakness" cardContent="An example of weakness" />
                <Mycard cardHeader="Weakness" cardContent="An example of weakness" />
                <Mycard cardHeader="Weakness" cardContent="An example of weakness" />
            </div>

            <Text text="I learned this not by taking easy paths–easy classes, easy 
            teachers, or easy responsibilities–but by putting myself out there
            and trust however the outcome, I will learn something, and that 
            something is the fuel for my growth. I called myself 'the experience
            collector.' Whenever I get to experience, just anything, that in itself
            already makes my day. " />

            <Text text="Looking back, sometimes I wish I took more major-focused
            courses (just to save some $💸$), but to be honest I had no clue who 
            I wanted to become and thus what exactly 'that' major would be. 
            I could have dived into any popular major and 
            would never stop wondering what's beyond those classes and area of study. 
            Sometimes I envy my friends who went straight to a four-year university, 
            yet when things settle as time flies, I am grateful for the path I could 
            take." />

            <Text text="I have set my mind on Computer Science major. I might become 
            an engineer, or a developer, or a researcher. I can become someone that
            uses technology in education, in healthcare, or in journalism. That someone
            might be completely strange to the present Thi. But whoever that stranger is,
            I am confident I have gotten the tools to handle her and her decisions. :)" />*/}

            <p className="text" style={{color: "#62929E"}}>
            ***This personal website is inspired by the keyboard most of us use daily.
            Every light-colored letter above associates with a word or phrase,
            and when they are clicked, the corresponding information will be on display.
            Click 'S' to go to Skills page.***
            </p>
        </div> 
        
    )
}

export default A;