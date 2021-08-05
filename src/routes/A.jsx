import React from "react";
import { TextHeading, Img } from "../components/letters/DisplayComps";
import CallMadeIcon from '@material-ui/icons/CallMade';

function A() {
    return (
        <div className="display" id={"display"}>
            <TextHeading heading="About Me" />
            <p style={{float: "right"}}><Img figcaption="Saigon raised, going everywhere" 
            src="./img/me-in-chicago-2.JPG" /></p>
            <p className="text"><b>I'm Thi</b> (pronounced like "tea 🍵&nbsp;").
            I'm currently a sophomore at the University of North Carolina – Chapel Hill
            where I study Computer Science.</p>
            <p className="text"><b>In the last year</b>, &nbsp;
            {/* TODO: Add a project page to display all projects*/}
            I built websites and learned about web development <a href="https://github.com/thi-lee"><CallMadeIcon /></a> 
            organized interviews and branch hiring process at Fitness and Lifestyle Group Vietnam <a href="https://www.fitlg.com/"><CallMadeIcon /></a>
            and annotated image data for 1 month until I decided to quit and focus on coding<a href="https://alcherainc.com/en/"><CallMadeIcon /></a>.
            </p>
            <p className="text"><b>When in community college</b>, I took a breadth of gen-ed classes, 
            helped migrate WCC's Learning Center to virtual operations while led tutor team for 1 year <a href="/"><CallMadeIcon /></a>
            and was a VP of Campus Christian Fellowship where I raised ~$3,000 for 40 students to participate in a 200+ student weekend camp <a href="/"><CallMadeIcon /></a>.</p>
            <p className="text"><b>Since Sep 21 I have</b>, spent two weeks in quarantine camp where I played card game with friends from all around Vietnam<a href="/"><CallMadeIcon /></a>
            scrapped walls and painted walls <a href="/"><CallMadeIcon /></a>
            and enjoyed Tet with homegrown veggies and wonderful cousins at grandparents' after 3 years <a href="/"><CallMadeIcon /></a>.</p>

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
        </div> 
        
    )
}

export default A;