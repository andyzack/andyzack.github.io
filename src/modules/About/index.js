import React from 'react';

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
              <header className="bb b--black-20 pb3">
                <h3 className="lh-title mt0 mb1 f2-ns f3 heading-font">About me</h3>
                <h4 className="lh-title ma0 f3-ns f4 fw4">I'm a creative front‑end developer based in Melbourne, Australia.</h4>
              </header>
              <section className="lh-copy measure f4-ns f5 mt0">
                <p>
                I enjoy building beautiful web pages focused on crafting clean html and delivering user‑friendly experiences.
                </p>
                <p>
                I could work on any applications written in any languages, be it java play, react, angular, asp or php, quickly adapt to the workflow and work well with the team to get it built.
                </p>
                <p>
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
      <header className="bb b--black-20 pb2 pt2 ph2">
        <h3 className="lh-title mt0 mb1 f2-ns f3 heading-font white">Start ups and my contribution</h3>
        <h4 className="lh-title ma0 f3-ns f4 fw4 white mb1">I've worked for 'start up' companies in Ireland and India, helped them grow into a world-class leader in their respective domain.</h4>
      </header>

      <div className="w-100 mw8 center ba b--dark-gray">
      <CarouselProvider className="center bg-black-30 relative ph5-ns pv4-ns ph2 pv3"
        naturalSlideWidth={120}
        naturalSlideHeight={46}
        totalSlides={3}
        isPlaying={true}
        infinite={true}
        lockOnWindowScroll={true}
        interval={30000}
      >
        <Slider className="f4-ns f5 white-70 tc tj-ns overflow-y-auto vh-50 h-auto-l aaz-blockquote">
          <Slide index={0}>
          <article>
          <div className="dt w-100 h-100 bg-white">
            <div className="dtc w-40-ns w-100 black lh-copy mt0 pa3 v-top-ns">
            In the last company, Cartrawler, where I started working from early 'startup' years, I've played a key part in the integration of car hire booking engine for top airlines and travel sites. Cartrawler today is one of the best places to work for in Ireland and I'm proud to be part of this highly successful years.

            </div>
            <div className="dtc w-60-ns w-100 v-top-ns">
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
            <div className="dtc w-40-ns w-100 black lh-copy mt0 pa3 v-top">
            I'm a former employee of i-flex solutions limited now Oracle Financial Services Software Limited, I was part of the transition of Reveleus Operational Risk Product from Capco, a global management and technology consultancy company, in 2005 (startup at that time).
            </div>
            <div className="dtc w-60-ns w-100 v-top">
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
            <div className="dtc w-40-ns w-100 black lh-copy mt0 pa3 v-top">
            I worked for enventure from the early startup years. Although joined as Electronic Engineer, I volunteered to build intranet, my first web project ever. After this my passion for web design and development never stopped :)
            </div>
            <div className="dtc w-60-ns w-100 v-top">
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
        <ButtonBack className="f2-ns f5 times no-underline grow dib v-mid bg-black-10 white blue:hover ba b--white-10 ph3-ns mt2 mt0-ns ph1 pv2-ns pv1 absolute left-0 top-0-ns top--2 bottom-0-ns">
          <span className="dtc tc v-mid grow pa1 pa0-ns ba bw0-ns b--white-60 br-100 bg-black">&lt;</span>
        </ButtonBack>
        <ButtonNext className="f2-ns f5 times no-underline grow dib v-mid bg-black-10 white blue:hover ba b--white-10 ph3-ns mt2 mt0-ns ph1 pv2-ns pv1 absolute right-0 top-0-ns top--2 bottom-0-ns">
          <span className="dtc tc v-mid grow pa1 pa0-ns ba bw0-ns b--white-60 br-100 bg-black">&gt;</span>
        </ButtonNext>
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
              <header className="bb b--black-20 pb3">
                <h3 className="lh-title mt0 mb1 f2-ns f3 heading-font">Last but not least</h3>
                <h4 className="lh-title ma0 f3-ns f4 fw4">I'm a creative front‑end developer based in Melbourne, Australia.</h4>
              </header>
              <section className="lh-copy measure f4-ns f5 mt0">
                <p>
                When I'm not coding, love strumming my guitar, go out with my family on my favourite car.
                </p>
                <p>
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

export default About;