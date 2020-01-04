import React from 'react';
import {
  Link
} from "react-router-dom";
import iconHome from '../../assets/images/000-home.svg';
import photograph from '../../assets/images/profile-pic.jpg';
import autograph from '../../assets/images/andrew-az.png';
import iconLinkedin from '../../assets/images/010-linkedin.svg';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Particles from 'react-particles-js';

const Home = () => (
  <div>
    <div className="absolute top-0 bottom-0 left-0 right-0 dn db-ns">
    <Particles
    params={{
      "particles": {
          "number": {
              "value": 160,
              "density": {
                  "enable": false
              }
          },
          "size": {
              "value": 6,
              "random": true,
              "anim": {
                  "speed": 4,
                  "size_min": 0.3
              }
          },
          "line_linked": {
              "enable": false
          },
          "move": {
              "random": true,
              "speed": 1,
              "direction": "top",
              "out_mode": "out"
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "bubble"
              },
              "onclick": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
              },
              "repulse": {
                  "distance": 400,
                  "duration": 4
              }
          }
      }
    }} />
    </div>
    <div className="tc mt2 mt3-m mt4-l ph3">
      <div className="pa3">
        <Link className="aaz-link no-underline dib grow-large" to="/about">
          <img
            src={photograph}
            className="aaz-photograph w4"
            alt="Andrew's Photograph"
          />
        </Link>
      </div>
      <div className="pt3">
        <Link className="aaz-link no-underline dib grow-large" to="/about">
          <img
            src={autograph}
            className="aaz-autograph w5"
            alt="Andrew's Autograph"
          />
        </Link>
      </div>
      <p className="f3 white pt1 pb4 ma0">A passionate front-end web developer</p>
      
      <div className="w-100 mw8 center ba b--dark-gray">
      <CarouselProvider className="center bg-black-30 relative ph5-ns pv4-ns ph4 pv2"
        naturalSlideWidth={120}
        naturalSlideHeight={40}
        totalSlides={5}
        isPlaying={true}
        infinite={true}
        lockOnWindowScroll={true}
        interval={30000}
      >
        <Slider className="f4 white-70 tj overflow-y-auto aaz-blockquote">
          <Slide index={0}>
          Andrew is a passionate and dedicated individual and could work on any platform or technology. He's a quick learner and a hard worker. I've seen him grow from a Web designer to web developer - expanding his ability and knowledge and being part of an awesome team. He was part of Cartrawler and its journey to become the world’s leading B2B travel tech company, and a strong asset to the company. Andrew continues his association by providing his services and support to Cartrawler even after he moved to Australia. I wish him all the success and am proud to have known him professionally and personally all these years. He's a really great team player and all round great guy and I'm happy to recommend him.<br /><br />
          <div className="fw6 tc">Bobby Healy
          <a href="https://www.linkedin.com/in/bhealy/" className="dib pa1" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconLinkedin}
              className="aaz-icon-linkedin w1 bg-white-70 br-100 b--white ba"
              alt="Bobby Healy's Linkedin"
            />
          </a>
          <span className="i fw2 db">CEO and Founder, Manna.aero</span> <span className="i fw2 f6 db">(Former CTO of Cartrawler, now serves as a Non Executive Director)</span></div>
          </Slide>
          <Slide index={1}>
          I have worked with Andrew in Oracle. We were team mates working on product development of Risk and Compliance products for the Financial Services Industry. Andrew was the front-end developer in the project. I must say that he was a really creative and a very knowledgeable developer. He always made sure the user interfaces had impressive aesthetics, were intuitive and high performing. He was also a very good team player and would co-operate very well with the rest of the developers in the team. Andrew would always be up to date with new UI technologies and would recommend best practices and UI widgets suitable for the product UIs. Andrew also has demonstrated a great level of commitment to the project and the organization often working long hours and ensuring product deliverables and customer commitments are successfully met.<br /><br />
          <div className="fw6 tc">Lovell Mathews
          <a href="https://www.linkedin.com/in/lovellmathews/" className="dib pa1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconLinkedin}
              className="aaz-icon-linkedin w1 bg-white-70 br-100 b--white ba"
              alt="Lovell Mathews Linkedin"
            />
          </a>
          <span className="i fw2 db">Director, Oracle Financial Services</span></div>
          </Slide>
          <Slide index={2}>
          I worked in the same team with Andrew for three years. Two years at the same office and one year remotely as he moved to Australia. His work quality was not impacted after this change.<br />

          Andrew is a dedicated person. He's a solution-driven and self-motivated person. His approach to solving a problem is to understand the issue to present the right solution for it. When touching legacy code, he's always making sure to introduce improvements and updating documentation when applicable.<br /><br />

          He is an approachable and friendly person. It's excellent to have him around. He brings unique energy wherever he is. <br /><br />
          <div className="fw6 tc">Bruno De Mauro
          <a href="https://www.linkedin.com/in/bdimauroh/" className="dib pa1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconLinkedin}
              className="aaz-icon-linkedin w1 bg-white-70 br-100 b--white ba"
              alt="Bruno De Mauro's Linkedin"
            />
          </a>
          <span className="i fw2 db">Engineering Manager, Zendesk</span></div>
          </Slide>
          <Slide index={3}>
          It's an absolute pleasure to recommend Andrew. Andrew and I worked together in CarTrawler from the early 'startup' years and through the highly successful years as the company grew to the hundreds of people. Andrew was a key part of the development team on the frontend side, he built and lead many solutions that were key to the success of numerous partner deals. Always a reliable pair of hands with a focus on technical efficiency and mentoring other team members. Andrew cares deeply about high-quality technical solutions and is always bonus to have on a team. <br /><br />
          <div className="fw6 tc">Alan Hicks
          <a href="https://www.linkedin.com/in/alhicks/" className="dib pa1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconLinkedin}
              className="aaz-icon-linkedin w1 bg-white-70 br-100 b--white ba"
              alt="Alan Hicks Linkedin"
            />
          </a>
          <span className="i fw2 db">CTO, Manna.aero</span></div>
          </Slide>
          <Slide index={4}>
          I thoroughly enjoyed working with Andrew in my time at CarTrawler. He was a fantastic engineer and contributor to the team -- dedicated, great team player, diligent and proactively worked to improve practices.<br /><br />
          <div className="fw6 tc">Deborah Clarke 
          <a href="https://www.linkedin.com/in/clarkedeborah/" className="dib pa1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconLinkedin}
              className="az-icon-linkedin w1 bg-white-70 br-100 b--white ba"
              alt="Deborah Clarke's Linkedin"
            />
          </a>
          <span className="i fw2 db">Principal Product Manager, Head of Seller Trust and Loyalty at Amazon</span></div>
          </Slide>
        </Slider>
        <ButtonBack className="f2-ns f4 times no-underline grow dib v-mid bg-black-10 white blue:hover ba b--black-10 ph3-ns ph1 pv2 absolute left-0 top-0 bottom-0">&lt;</ButtonBack>
        <ButtonNext className="f2-ns f4 times no-underline grow dib v-mid bg-black-10 white blue:hover ba b--black-10 ph3-ns ph1 pv2 absolute right-0 top-0 bottom-0">&gt;</ButtonNext>
      </CarouselProvider>
      </div>
    </div>
  </div>
);

export default {
    routeProps: {
        path: '/',
        exact: true,
        component: Home
    },
    name: 'Home',
    icon: iconHome,
    imgStyle: 'aaz-icon-home w2 bg-black-70 br-100 b--white ba',
    linkStyle: 'f6 fw4 hover-white no-underline white-70 dib-ns ml2 pv1 pl1 grow aaz-home dn',
}