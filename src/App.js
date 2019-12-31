import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import photograph from './assets/images/profile-pic-original.jpg';
import autograph from './assets/images/andrew-az.png';
import logo from './assets/images/logo.png';
import iconAbout from './assets/images/000-user-3.svg';
import iconGallery from './assets/images/000-picture-1.svg';
import iconContact from './assets/images/000-email.svg';
import iconLinkedin from './assets/images/010-linkedin.svg';
import iconFacebook from './assets/images/001-facebook.svg';
import iconWhatsapp from './assets/images/003-whatsapp.svg';

import aboutCartrawler from './assets/images/about-cartrawler.jpg';
import aboutOracle from './assets/images/about-oracle.jpg';
import aboutEnventure from './assets/images/about-enventure.jpg';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './assets/sass/App.scss';

function App() {
  return (
    <Router>
      <div className="cover bg-left bg-center-l aaz-banner-main">
        <div className="bg-black-80 pb3 pb4-m pb5-l">
          <header className="bg-black">
            <nav className="dt w-100 mw8 center"> 
              <div className="dtc w2 v-mid pa3">
                <Link className="dib h2 pa1 grow-large border-box" to="/">
                  <img
                    src={logo}
                    className="w4 mw-none"
                    alt="AAZ"
                  />
                </Link>
              </div>
              <div className="dtc v-mid tr pa3">
                <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 ph1 grow" to="/About">
                  <img
                    src={iconAbout}
                    className="aaz-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                    alt="Andrew's Linkedin"
                  />
                </Link>
                <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 ph1 grow" to="/Gallery">
                  <img
                    src={iconGallery}
                    className="aaz-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                    alt="Andrew's Linkedin"
                  />
                </Link>
                <a
                  className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 ph1 grow"
                  href="https://www.linkedin.com/in/andrew-zacharias/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={iconLinkedin}
                    className="aaz-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                    alt="Andrew's Linkedin"
                  />
                </a>
                <a
                  className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 ph1 grow"
                  href="mailto:andyzack@gmail.com"
                  rel="noopener noreferrer"
                >
                  <img
                    src={iconContact}
                    className="aaz-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                    alt="Andrew's Linkedin"
                  />
                </a>
                <a
                  className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 ph1 grow"
                  href="https://www.facebook.com/andrewazweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={iconFacebook}
                    className="aaz-icon-facebook w2 bg-white-70 br-100 b--white ba"
                    alt="Andrew's Facebook"
                  />
                </a>
                <a
                  className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 ph1 grow"
                  href="tel:&#43;&#54;&#49;&#52;&#54;&#56;&#51;&#54;&#54;&#56;&#50;&#48;"
                  rel="noopener noreferrer"
                >
                  <img
                    src={iconWhatsapp}
                    className="aaz-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                    alt="Andrew's Phone"
                  />
                </a>
              </div>
            </nav>
          </header>
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>

            <footer className="fixed w-100 bottom-0 bg-black-60">
              <div className="mw8 w-100 center dt">
                <div className="white-50 dtc tc v-mid pa2">
                © 2019 andrewaz
                </div>
              </div>
            </footer>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home(home) {
  return (
    <div className="App">
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
        
        <div className="w-100 mw8 center">
        <CarouselProvider className="center bg-black-30 relative ph5 pv4"
          naturalSlideWidth={120}
          naturalSlideHeight={40}
          totalSlides={5}
          isPlaying={true}
          infinite={true}
          lockOnWindowScroll={true}
          interval={10000}
        >
          <Slider className="f4 white-70 tj aaz-blockquote overflow-auto">
            <Slide index={0}>
            Andrew is a passionate and dedicated individual and could work on any platform or technology. He's a quick learner and a hard worker. I've seen him grow from a Web designer to web developer - expanding his ability and knowledge and being part of an awesome team. He was part of Cartrawler and its journey to become the world’s leading B2B travel tech company, and a strong asset to the company. Andrew continues his association by providing his services and support to Cartrawler even after he moved to Australia. I wish him all the success and am proud to have known him professionally and personally all these years. He's a really great team player and all round great guy and I'm happy to recommend him.<br /><br />
            <div className="fw6 tc">Bobby Healy
            <a href="https://www.linkedin.com/in/bhealy/" className="dib pa1">
              <img
                src={iconLinkedin}
                className="aaz-icon-linkedin w1 bg-white-70 br-100 b--white ba"
                alt="Bobby Healy's Linkedin"
              />
            </a>
            <span className="i fw2 db">CEO and Founder, Manna.aero</span></div>
            </Slide>
            <Slide index={1}>
            I have worked with Andrew in Oracle. We were team mates working on product development of Risk and Compliance products for the Financial Services Industry. Andrew was the front-end developer in the project. I must say that he was a really creative and a very knowledgeable developer. He always made sure the user interfaces had impressive aesthetics, were intuitive and high performing. He was also a very good team player and would co-operate very well with the rest of the developers in the team. Andrew would always be up to date with new UI technologies and would recommend best practices and UI widgets suitable for the product UIs. Andrew also has demonstrated a great level of commitment to the project and the organization often working long hours and ensuring product deliverables and customer commitments are successfully met.<br /><br />
            <div className="fw6 tc">Lovell Mathews
            <a href="https://www.linkedin.com/in/lovellmathews/" className="dib pa1">
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
            <a href="https://www.linkedin.com/in/bdimauroh/" className="dib pa1">
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
            <a href="https://www.linkedin.com/in/alhicks/" className="dib pa1">
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
            <a href="https://www.linkedin.com/in/clarkedeborah/" className="dib pa1">
              <img
                src={iconLinkedin}
                className="az-icon-linkedin w1 bg-white-70 br-100 b--white ba"
                alt="Deborah Clarke's Linkedin"
              />
            </a>
            <span className="i fw2 db">Principal Product Manager, Head of Seller Trust and Loyalty at Amazon</span></div>
            </Slide>
          </Slider>
          <ButtonBack className="f6 no-underline grow dib v-mid bg-black-10 white blue:hover ba b--black-10 ph3 pv2 absolute left-0 top-0 bottom-0">&lt;</ButtonBack>
          <ButtonNext className="f6 no-underline grow dib v-mid bg-black-10 white blue:hover ba b--black-10 ph3 pv2 absolute right-0 top-0 bottom-0">&gt;</ButtonNext>
        </CarouselProvider>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <div className="aaz-container justify-top">
        <div className="w-100 dt no-repeat bg-center cover center w-100 aaz-banner-about">
          <div className="mw8 center">
            <div className="pa2 pt0 tl">
              <article data-name="article-full-bleed-background cf">
                <div className="cf">
                  <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3">
                    <header className="bb b--black-20 pv4">
                      <h3 className="f1 fw7 lh-title mt0 mb3 heading-font fw7">about me</h3>
                      <h4 className="f3 fw4 lh-title ma0">I'm a creative front‑end developer based in Melbourne, Australia.</h4>
                    </header>
                    <section className="pv4">
                      <p className="lh-copy measure f4 mt0">
                      I enjoy building beautiful web pages focused on crafting clean html and delivering user‑friendly experiences.
                      <br /><br />
                      I believe in joining hands in making things that can a make a difference!
                      <br /><br />
                      I could work on any applications written in any languages, be it java play, react, angular, asp or php, quickly adapt to the workflow and work well with the team to get it built.
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
        <div className="bg-black-90 pv3 w-100">
          <div className="w-100 mw8 center">
            <header className="bb b--black-20 pv4">
              <h3 className="f1 fw7 lh-title mt0 mb3 heading-font fw7 white">start ups and my contribution</h3>
              <h4 className="f3 fw4 lh-title ma0 white mb3">I've worked for 'start up' companies in Ireland and India, helped them grow into a world-class leader in their respective domain.</h4>
            </header>

            <CarouselProvider className="center bg-black-30 relative ph5 pv4"
              naturalSlideWidth={120}
              naturalSlideHeight={40}
              totalSlides={3}
              isPlaying={true}
              infinite={true}
              lockOnWindowScroll={true}
              interval={10000}
            >
              <Slider className="f4 tl">
                <Slide index={0}>
                <article className="ba b--white-70">
                <div className="dt w-100 h-100 bg-white">
                  <div className="dtc w-40 black lh-copy f4 mt0 pa3 v-top">
                  In the last company, Cartrawler, where I served for 13 years, I've played a key part in the integration of car hire booking engine for top airlines, hotels and travel agents.
                  </div>
                  <div className="dtc w-60 v-top">
                    <a href="https://www.cartrawler.com/" className="dib">
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
                <article className="ba b--white-70">
                <div className="dt w-100 h-100 bg-white">
                  <div className="dtc w-40 black lh-copy f4 mt0 pa3 v-top">
                  I'm a former employee of i-flex solutions limited now Oracle Financial Services Software Limited, I was part of the transition of Reveleus Operational Risk Product from Capco, a global management and technology consultancy company, in 2005 (startup at that time).
                  </div>
                  <div className="dtc w-60 v-top">
                    <a href="https://en.wikipedia.org/wiki/Oracle_Financial_Services_Software/" className="dib">
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
                <article className="ba b--white-70">
                <div className="dt w-100 h-100 bg-white">
                  <div className="dtc w-40 black lh-copy f4 mt0 pa3 v-top">
                  Worked for enventure from the early startup years, although joined as Electronic Engineer, volunteered to build intranet, my first web project. After this my passion for web design and development never stopped :)
                  </div>
                  <div className="dtc w-60 v-top">
                    <a href="https://www.enventure.com/" className="dib">
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
              <ButtonBack className="f6 no-underline grow dib v-mid bg-black-10 white blue:hover ba b--black-10 ph3 pv2 absolute left-0 top-0 bottom-0">&lt;</ButtonBack>
              <ButtonNext className="f6 no-underline grow dib v-mid bg-black-10 white blue:hover ba b--black-10 ph3 pv2 absolute right-0 top-0 bottom-0">&gt;</ButtonNext>
            </CarouselProvider>
          </div>
        </div>
        {/* END CAROUSEL */}

        {/* START LEISURE */}
        <div className="w-100 dt no-repeat bg-center cover center w-100 aaz-banner-adventure">
          <div className="mw8 center">
            <div className="pa2 pt0 tl">
              <article data-name="article-full-bleed-background cf">
                <div className="cf">
                  <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3">
                    <header className="bb b--black-20 pv4">
                      <h3 className="f1 fw7 lh-title mt0 mb3 heading-font fw7">last but not least</h3>
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
    </div>
  );
}

function Gallery() {
  return (
    <div className="App">
      <div className="aaz-container justify-top">
        <div className="w-100 dt no-repeat bg-center cover center w-100 aaz-banner-gallery">
          <div className="mw8 center">
            <div className="pa2 pt0 tl">
{/* START POSTER */}
<main className="cf pa2">
  <div className="fl w-100 w-50-ns ph2">
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters030211_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="no-underline pv2 grow db"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="no-underline pv2 grow db"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/pink-and-noseworthy-22.12.10-cargo_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg" alt="cartrawler" /></a>
  </div>
  <div className="fl w-50 w-25-ns ph2">
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw18-240112-cc_960.jpg" alt="cartrawler" /> </a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-residency-cargo_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/orchid-2-mnkr_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/O270711_960-2.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-020510_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-130610_960.jpg" alt="cartrawler" /></a>
  </div>
  <div className="fl w-50 w-25-ns ph2">
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zach-hurd-101218_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/cc-shanee_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/ZachHurd-190111s_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw170211pie-cargo_960.jpg" alt="cartrawler" /></a>
    <a href="http://www.cartrawler.com/" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-191110_960.jpg" alt="cartrawler" /></a>
  </div>
</main>
{/* END POSTER */}
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="App">
      <div className="aaz-container">
        <h2>Resume</h2>
      </div>
    </div>
  );
}

export default App;
