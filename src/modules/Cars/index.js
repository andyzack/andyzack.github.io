import React, { Component } from 'react'
import Typical from 'react-typical'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Cars extends Component {

  componentWillMount() {
    let script = document.createElement('script');
    script.setAttribute('id', 'ctEngineEmbed');
    script.src = "https://ajaxgeo.cartrawler.com/webapp-abe-latest/app-desktop.js";
    document.getElementsByTagName('body')[0].appendChild(script);

      let newScript = document.createElement('script');
      let inlineScript = document.createTextNode('var CT = { ABE: {  Settings: { clientID: "420684", theme: { primary: "#10b2de", secondary: "#ff766a", complimentary: "#ccced1" }, step1: { orientation: "landscape", strings: { headingText: " " }, hideLabels: true, advancedOptions: { carGroup: false, currency: false, residency: false, email: false, age: false } } } } };');
      newScript.setAttribute('id', 'ctEnginePlaceholder');
      newScript.appendChild(inlineScript); 
      document.getElementsByTagName('head')[0].appendChild(newScript);
  }

  componentWillUnmount () {
   let ctEngineEmbed = document.getElementById('ctEngineEmbed');
   let ctEnginePlaceholder = document.getElementById('ctEnginePlaceholder');
   if (ctEngineEmbed && ctEnginePlaceholder) {
    ctEngineEmbed.remove(); 
    ctEnginePlaceholder.remove();
   }
  }

  render() {
    return (
      <div className="aaz-cars-container justify-top">
      {/* MAIN SECTION: HERO BANNER */}
        <div className="az-hero bg-dark-gray bg-center cover no-repeat center">

          {/* SUB SECTION: SALE */}
          <section className="az-sale dn pt6 pb4 relative">
            <div className="mw8 center w-100">
              <h3 className="az-title lh-title mt0 mb1 f1-ns f3 heading-font white tshadow"> 
                <Typical
                  steps={[
                    'Car rental', 2500,
                    'Car rental search', 2500,
                    'Car rental best deals', 2500,
                    'Car rental compare & save', 2500,
                    'Car rental best price guarantee', 2500,
                    'Car rental worlds biggest online service', 2500,
                    'Car rental biggest brands you love', 2500,
                    'Car rental biggest brands you love', 2500,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </h3>
              <h4 className="lh-title ma0 f3-ns f4 fw4 white tshadow">Get exclusive rates for your trip using the search box below...</h4>
            </div>
          </section>

          {/* SUB SECTION: ENGINE */}
          <section className="az-engine ph2 relative">
            <div className="mw8 center w-100">
              <div className="az-engine-s1 bg-white-70 near-black pointer relative br2 br--top ph4 pt4">
                <div ct-app="ct-app" className="absolute pa2 pa0-ns z-5"></div>
              </div>
            </div>
          </section>

          {/* SUB SECTION: SUPPLIER LOGOS */}
          <section className="az-supplier-logos ph2">
            <div className="mw8 center w-100">
              <div className="w-100 dt pv3 ph4 bg-white-60">
                <span className="dtc tc pa1">
                  <img height="32" src="https://ct-supplierimage.imgix.net/car/firefly.pdf?auto=format&w=80&bg=FFF&border=1,9b9b9b&pad=4" alt="firefly" />
                </span>
                <span className="dtc tc pa1">
                  <img height="32" src="https://ct-supplierimage.imgix.net/car/avis.pdf?auto=format&w=80" alt="avis" />	
                </span>
                <span className="dtc tc pa1">
                  <img height="32" src="https://ct-supplierimage.imgix.net/car/sixt.pdf?auto=format&w=80" alt="sixt" />
                </span>
                <span className="dtc tc pa1">
                  <img height="32" src="https://ct-supplierimage.imgix.net/car/enterprise.pdf?auto=format&w=80" alt="enterprise" />
                </span>
                <span className="dtc tc pa1">
                  <img height="32" src="https://ct-supplierimage.imgix.net/car/budget.pdf?auto=format&w=80" alt="budget" />
                </span>
                <span className="dtc tc pa1">
                  <img height="32" src="https://ct-supplierimage.imgix.net/car/hertz-alt.pdf?auto=format&w=80" alt="hertz" />
                </span>
                <span className="dtc tc pa1">
                  <img height="32" src="https://ct-supplierimage.imgix.net/car/alamo.pdf?auto=format&w=80" alt="alamo" />
                </span>
                <span className="dtc tc pa1">
                  <img height="32" src="https://ct-supplierimage.imgix.net/car/thrifty.pdf?auto=format&w=80&bg=FFF&border=1,8b8b8b&pad=4" alt="thrifty" />
                </span>
                <span className="dtc tc pa1">
                  <img height="32" src="https://ct-supplierimage.imgix.net/car/national.pdf?auto=format&w=80" alt="national" />
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* SPECIAL OFFERS */}
<article className="az-destinations dn pb4 bg-light-gray">
   <div className="dt w-100 mw8 center tc">
      <div className="tc ph2 pv2">
         <p className="f2 fw8 dark-gray pt4 pb3 tc ma0">Explore deals in our top destinations</p>
      </div>
      <section className="dt w-100 aq-mw75 center ph3-m">
         <div className="fl w-50-ns w-100 vh-25 vh-50-ns pa2 overflow-hidden">
            <a href="/atlasglb/book/?clientId=518129&amp;pickupLocationId=4513&amp;returnLocationId=4513&amp;&amp;currency=try&amp;countryId=GB&amp;carGroup=0&amp;pickupHour=10&amp;pickupMinute=0&amp;returnHour=10&amp;returnMinute=0&amp;residencyId=TR&amp;age=30&amp;pickupMonth=2&amp;pickupYear=2020&amp;pickupDate=2&amp;returnMonth=2&amp;returnYear=2020&amp;returnDate=16&amp;residence=Turkey&amp;residency=Turkey&amp;tp=CT_SPECIAL_OFFER_FEED/" className="link dib w-100 bg-silver">
               <div className="dib w-100 vh-25 vh-50-ns dt dt--fixed dim cover no-repeat bg-center az-car1">
                  <div className="v-mid dtc vh-25 vh-50-ns tc w-100">
                     <h2 className="ma0 pa0 tc w-auto dib mb2 f2 white">Heathrow Airport</h2>
                     <div className="f4 white"> from <span className="f3 b">₺72</span> / day </div>
                  </div>
               </div>
            </a>
         </div>
         <div className="fl w-100 w-50-ns vh-25 pa2 pb3-ns overflow-hidden">
            <a href="/atlasglb/book/?clientId=518129&amp;pickupLocationId=54028&amp;returnLocationId=54028&amp;&amp;currency=try&amp;countryId=AE&amp;carGroup=0&amp;pickupHour=10&amp;pickupMinute=0&amp;returnHour=10&amp;returnMinute=0&amp;residencyId=TR&amp;age=30&amp;pickupMonth=2&amp;pickupYear=2020&amp;pickupDate=2&amp;returnMonth=2&amp;returnYear=2020&amp;returnDate=16&amp;residence=Turkey&amp;residency=Turkey&amp;tp=CT_SPECIAL_OFFER_FEED/" className="link dib w-100 bg-silver">
               <div className="dib w-100 vh-25 dt dt--fixed dim cover no-repeat bg-center az-car2">
                  <div className="v-mid dtc vh-25 tc w-100 ">
                     <h2 className="ma0 pa0 tc w-auto dib mb2 f2 white">Dubai</h2>
                     <div className="f4 white"> from <span className="f3 b">₺138</span> / day </div>
                  </div>
               </div>
            </a>
         </div>
         <div className="fl w-100 w-25-ns vh-25 pa2 pv3-ns overflow-hidden">
            <a href="/atlasglb/book/?clientId=518129&amp;pickupLocationId=55664&amp;returnLocationId=55664&amp;&amp;currency=try&amp;countryId=SG&amp;carGroup=0&amp;pickupHour=10&amp;pickupMinute=0&amp;returnHour=10&amp;returnMinute=0&amp;residencyId=TR&amp;age=30&amp;pickupMonth=2&amp;pickupYear=2020&amp;pickupDate=2&amp;returnMonth=2&amp;returnYear=2020&amp;returnDate=16&amp;residence=Turkey&amp;residency=Turkey&amp;tp=CT_SPECIAL_OFFER_FEED/" className="link dib w-100 bg-silver">
               <div className="dib w-100 vh-25 dt dt--fixed dim cover no-repeat bg-center az-car3">
                  <div className="v-mid dtc vh-25 tc w-100 ">
                     <h2 className="ma0 pa0 tc w-auto dib mb2 f2 white">Singapore</h2>
                     <div className="f4 white"> from <span className="f3 b">₺249</span> / day </div>
                  </div>
               </div>
            </a>
         </div>
         <div className="fl w-100 w-25-ns vh-25 pa2 pv3-ns overflow-hidden">
            <a href="/atlasglb/book/?clientId=518129&amp;pickupLocationId=2640&amp;returnLocationId=2640&amp;&amp;currency=try&amp;countryId=PT&amp;carGroup=0&amp;pickupHour=10&amp;pickupMinute=0&amp;returnHour=10&amp;returnMinute=0&amp;residencyId=TR&amp;age=30&amp;pickupMonth=2&amp;pickupYear=2020&amp;pickupDate=2&amp;returnMonth=2&amp;returnYear=2020&amp;returnDate=16&amp;residence=Turkey&amp;residency=Turkey&amp;tp=CT_SPECIAL_OFFER_FEED/" className="link dib w-100 bg-silver">
               <div className="dib w-100 vh-25 dt dt--fixed dim cover no-repeat bg-center az-car4">
                  <div className="v-mid dtc vh-25 tc w-100 ">
                     <h2 className="ma0 pa0 tc w-auto dib mb2 f2 white">Lisbon</h2>
                     <div className="f4 white"> from <span className="f3 b">₺52</span> / day </div>
                  </div>
               </div>
            </a>
         </div>
      </section>
   </div>
</article>
        
        {/* TESTIMONIALS */}
        <div className="az-testimonials bg-center pt4">
          <div className="mw8 center w-100 relative">
            <section className="center">
              <div className="w-100 near-black pointer">
                <div className="w-100 br2 ba b--white-10 ph0 pt1">
                <CarouselProvider className="center bg-black-10 relative ph5-ns pv4-ns ph2 pv3"
                  naturalSlideWidth={120}
                  naturalSlideHeight={20}
                  totalSlides={4}
                  isPlaying={true}
                  infinite={true}
                  lockOnWindowScroll={true}
                  interval={10000}
                >
                  <Slider className="f3-ns f4 white-70 tc tj-ns overflow-y-auto h-auto-l">
                    <Slide index={0}>
                    "The reception was very good and the car exactly as specified. Excellent service throughout."<br /><br />
                    <div className="fw6 tc">Andrew, United Kingdom</div>
                    </Slide>
                    <Slide index={1}>
                    "A lovely experience. The staff were excellent. Very friendly and helpful."<br /><br />
                    <div className="fw6 tc">Heather, Australia</div>
                    </Slide>
                    <Slide index={2}>
                    "Easy to find and found staff friendly and helpful, would use again" <br /><br />
                    <div className="fw6 tc">Daniel, Canada</div>
                    </Slide>
                    <Slide index={3}>
                    "Every time that I have used your services I have received 5 * quality, thank you" <br /><br />
                    <div className="fw6 tc">Valdemar, Latvia</div>
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
            </section>
          </div>
        </div>
      </div>
    );
  }

}

export default Cars;