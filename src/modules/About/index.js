import React from 'react';
import iconAbout from '../../assets/images/000-user-3.svg';

import aboutCartrawler from '../../assets/images/about-cartrawler.jpg';
import aboutOracle from '../../assets/images/about-oracle.jpg';
import aboutEnventure from '../../assets/images/about-enventure.jpg';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const About = () => (
<div className="aaz-container justify-top">
  <div className="w-100 dt no-repeat bg-lightest-blue bg-center cover center w-100 aaz-banner-about">
    <div className="mw8 center">
      <div className="pa2-ns pt0 tl">
        <article data-name="article-full-bleed-background cf">
          <div className="cf">
            <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3">
              <header className="bb b--black-20 pb4">
                <h3 className="f2 fw7 lh-title mt0 mb3 heading-font fw7">about me</h3>
                <h4 className="f3 fw4 lh-title ma0">I'm a creative front‑end developer based in Melbourne, Australia.</h4>
              </header>
              <section className="pv4">
                <p className="lh-copy measure f4 mt0">
                I enjoy building beautiful web pages focused on crafting clean html and delivering user‑friendly experiences.
                <br /><br />
                I could work on any applications written in any languages, be it java play, react, angular, asp or php, quickly adapt to the workflow and work well with the team to get it built.
                <br /><br />
                I believe in joining hands to create things that can a make a difference!
                </p>  
              </section>
            </div>
          </div>
        </article>
        <div className="bb b--black-20 mv3 cf"></div>
      </div>
    </div>
  </div>

  {/* START CAROUSEL */}
  <div className="bg-white-10 pv3 w-100">
    <div className="w-100 mw8 center">
    <div className="pa2 pt0 tl">
      <header className="bb b--black-20 pb4 pt4 ph4">
        <h3 className="f2 fw7 lh-title mt0 mb3 heading-font fw7 white">start ups and my contribution</h3>
        <h4 className="f3 fw4 lh-title ma0 white mb3">I've worked for 'start up' companies in Ireland and India, helped them grow into a world-class leader in their respective domain.</h4>
      </header>

      <div className="w-100 mw8 center ba b--dark-gray">
      <CarouselProvider className="center bg-black-30 relative ph5-ns pv4-ns ph4 pv2"
        naturalSlideWidth={120}
        naturalSlideHeight={46}
        totalSlides={3}
        isPlaying={true}
        infinite={true}
        lockOnWindowScroll={true}
        interval={30000}
      >
        <Slider className="f4 tl overflow-y-auto ba b--white-70">
          <Slide index={0}>
          <article>
          <div className="dt w-100 h-100 bg-white">
            <div className="dtc w-40 black lh-copy f4 mt0 pa3 v-top">
            In the last company, Cartrawler, where I started working from early 'startup' years, I've played a key part in the integration of car hire booking engine for top airlines and travel sites. Cartrawler today is one of the best places to work for in Ireland and I'm proud to be part of this highly successful years.

            </div>
            <div className="dtc w-60 v-top">
              <a href="https://www.cartrawler.com/" className="dib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={aboutCartrawler}
                  className="aaz-icon-linkedin w-100"
                  alt="Cartrawler"
                />
              </a>
            </div>
          </div>
          </article>
          </Slide>
          <Slide index={1}>
          <article>
          <div className="dt w-100 h-100 bg-white">
            <div className="dtc w-40 black lh-copy f4 mt0 pa3 v-top">
            I'm a former employee of i-flex solutions limited now Oracle Financial Services Software Limited, I was part of the transition of Reveleus Operational Risk Product from Capco, a global management and technology consultancy company, in 2005 (startup at that time).
            </div>
            <div className="dtc w-60 v-top">
              <a href="https://en.wikipedia.org/wiki/Oracle_Financial_Services_Software/" className="dib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={aboutOracle}
                  className="aaz-icon-linkedin w-100"
                  alt="Oracle"
                />
              </a>
            </div>
          </div>
          </article>
          </Slide>
          <Slide index={2}>
          <article>
          <div className="dt w-100 h-100 bg-white">
            <div className="dtc w-40 black lh-copy f4 mt0 pa3 v-top">
            I worked for enventure from the early startup years. Although joined as Electronic Engineer, I volunteered to build intranet, my first web project ever. After this my passion for web design and development never stopped :)
            </div>
            <div className="dtc w-60 v-top">
              <a href="https://www.enventure.com/" className="dib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={aboutEnventure}
                  className="aaz-icon-linkedin w-100"
                  alt="enventure"
                />
              </a>
            </div>
          </div>
          </article>
          </Slide>
        </Slider>
        <ButtonBack className="f2-ns f4 times no-underline grow dib v-mid bg-black-10 white blue:hover ba b--black-10 ph3-ns ph1 pv2 absolute left-0 top-0 bottom-0">&lt;</ButtonBack>
        <ButtonNext className="f2-ns f4 times no-underline grow dib v-mid bg-black-10 white blue:hover ba b--black-10 ph3-ns ph1 pv2 absolute right-0 top-0 bottom-0">&gt;</ButtonNext>
      </CarouselProvider>
      </div>
      </div>
    </div>
  </div>
  {/* END CAROUSEL */}

  {/* START LEISURE */}
  <div className="w-100 dt no-repeat bg-light-blue bg-center cover center w-100 aaz-banner-adventure">
    <div className="mw8 center">
      <div className="pa2-ns pt0 tl">
        <article data-name="article-full-bleed-background cf">
          <div className="cf">
            <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3">
              <header className="bb b--black-20 pb4">
                <h3 className="f2 fw7 lh-title mt0 mb3 heading-font fw7">last but not least</h3>
                <h4 className="f3 fw4 lh-title ma0">family time, adventure, fun...</h4>
              </header>
              <section className="pv4">
                <p className="lh-copy measure f4 mt0">
                When I'm not coding, love strumming my guitar, go out with my family on my favourite car.
                <br /><br />
                I live with my wife and two kids, keeping them busy with loads of fun activities :)
                </p>  
              </section>
            </div>
          </div>
        </article>
        <div className="bb b--black-20 mv3 cf"></div>
      </div>
    </div>
  </div>
  {/* END LEISURE */}

</div>
);

export default {
    routeProps: {
        path: '/about',
        component: About
    },
    name: 'About',
    icon: iconAbout,
    imgStyle: 'aaz-icon-about w2 bg-white-70 br-100 b--white ba',
    linkStyle: 'f6 fw4 hover-white no-underline white-70 dib ml2 pv1 pl1 grow'
}