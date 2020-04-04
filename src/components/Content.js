import React from "react";
import styled from "styled-components";
import Emoji from "react-emoji-render";
import Pdf from './resume.pdf';

import { Section, SectionHeader, Link } from "./Helpers";

const Content = styled.div`
  padding: 50px 30px;idcfr34cdfde
  font-size: 3rem;
  line-height: 2rem;
`;

const BodyP = styled.p`
  font-size: 1.28rem;
  margin: 15px 0;
`;

const About = () => (
  <Section id="about">
    <SectionHeader className="section-header">About</SectionHeader>
    <BodyP>
      <Emoji text=":wave:" />
      Hi, tis a Shubhro, a highschool culture junkie, interested in the arts, music, and interaction design. </BodyP>
      <BodyP>
      Keen on pursuing psychology and fine arts, and an aspiring game designer/developer. 
      </BodyP>
      <BodyP>
      in his free time, he develops games, apps, and websites. Passionate about documentary films, 
      philosophy, books, and photography. Likes Stanley Kubrick, Lord of the Rings, Tame impala, and 
      Pink Floyd.
    </BodyP>
  </Section>
);

const SchoolName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const SchoolDesc = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Education = () => (
  <Section id="education">
    <SectionHeader className="section-header">Education</SectionHeader>
    <div>
      <SchoolName className="schoolname">
        Delhi Public School, Gurgaon
      </SchoolName>
      <SchoolDesc className="schooldesc">Class of '21</SchoolDesc>
      <BodyP>
         Doing <b>mathematics, psychology, economics, political science</b> and <b>fine arts</b> at {" "}
        <Link target="__blank" href="https://www.dpsgurgaon.org/">
        Delhi Public School.
        </Link>{" "}
        
      </BodyP>
      <BodyP>
        Co-headed the {" "}
        <Link target="__blank" href="https://nodeclub.xyz">
        Node Club
        </Link>{" "} designed stuff for TEDx, UMUN, and interschool events. Organized the interschool computer symposium - AlphaNode 2018,
          conducted training sessions for junior classes, participated in various interschool competitions, managed all the 
         digital requirements for the interschool events (websites, opening videos, photography, magazine design, and posters).
      </BodyP>
      <BodyP>
         has also completed various courses from institutes such as <b>Arts University Bournemouth</b> where he learned art principles of graphics, 
         animation, fashion and drama; <b>National Institute of Design</b> where he attended a summer course for Traditional Animation; and <b>Arena 
           Animation</b> where he learnt design tools such as Illustrator, Photoshop and CorelDrawx8.
      </BodyP>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills">
    <SectionHeader className="section-header">Skills</SectionHeader>
    <BodyP>
      <h3>Pro</h3>
      <BodyP>      
        Can make pretty illustrations, User Interfaces and micro-Animations+interactions using Adobe <b>Illustrator, Photoshop, Krita</b>, XD, Figma, Protopie,
        principleForMac and <b>AfterEffects</b>.
      </BodyP>
      <BodyP> Also profecient at Web and App frontend for which he uses <b>Bootstrap, Flutter, Javascript</b> - vanilla, jQuery and electron.<br/><br/>
      </BodyP>
     </BodyP>
  
     <BodyP>
      <h3>Intermediate</h3>
      <BodyP>      
        Currently learning character animation using <b>Adobe Character animator</b> and <b>After Effects</b> (character rigging plugin) along with 
        3D modelling for which he uses <b>cinema4D</b>.
      </BodyP>
      <BodyP>Also learning javascript - <b>React.js + Gatsby, Redux </b>and <b>React Native, </b>and<b> Python (Selenium, OpenCV, and Flask)</b>.
      </BodyP><br />
     </BodyP>

     <BodyP>
      <h3>Noob</h3>
      <BodyP>      
        Developing a <b>sketchbook</b>, trying out new mediums of art [pen + charcoals + watercolors and ink]. Tries making new music using <b>Bosca Ceoil</b> and remixes song using 
        <b> Audition</b>. Learning Animation via <b>Blender.</b>
      </BodyP>
      <BodyP>
        Understanding the concepts of backend, learning <b>Ruby-on-rails, </b> and <b>Django. </b>
        Average knowledge about Databases <b>[mySQL and MongoDB]</b>.
      </BodyP>
     </BodyP>
  </Section>
);

const Contact = () => (
  <Section id="contact">
    <SectionHeader className="section-header">Contact</SectionHeader>
    <BodyP>
      Here's his {" "}<Link href="https://shubhro.in/resume.pdf" target = "_blank"><b>Résumé</b></Link>.<br></br>
      You can email him{" "}
      <Link href="mailto:shubhrogupta117@gmail.com">here</Link>. You could also{" "}
      <Link href="https://twitter.com/shubhrogupta" target="__blank">
        tweet
      </Link>{" "}
      to him or <Link href="https://instagram.com/shubhro.in">follow him on instagram.</Link>
      
    </BodyP>
  </Section>
);

const Footer = () => (
  <Section
    className="footer"
    style={{
      textAlign: "center",
      fontSize: "1rem",
      lineHeight: "1.3rem",
      marginBottom: "30px"
    }}
  >
    
    <div>&copy; Shubhro Gupta 2020</div>
    <div>
      Source available{" "}
      <Link
        style={{ borderWidth: "2px", paddingBottom: "0" }}
        target="_blank"
        href="https://github.com/dotangad/angad.dev"
      >
        here
      </Link>
      .
    </div>
  </Section>
);

export default () => (
  <Content className="content">
    <About />
    <Education />
    <Skills />
    <Contact />
    <Footer />
  </Content>
);
