import React from 'react';
import iconGallery from '../../assets/images/000-internet.svg';
import logoCartrawler from '../../assets/images/logo-cartrawler.png';

import snapshotXairasia from '../../assets/images/snapshot/airasia.jpg';
import snapshotXflybondi from '../../assets/images/snapshot/flybondi.jpg';
import snapshotXjetstar from '../../assets/images/snapshot/jetstar.jpg';
import snapshotXswiss from '../../assets/images/snapshot/swiss.jpg';
import snapshotXwestjet from '../../assets/images/snapshot/westjet.jpg';
import snapshotXaurigny from '../../assets/images/snapshot/aurigny.jpg';
import snapshotXaerlingus from '../../assets/images/snapshot/aerlingus.jpg';
import snapshotXatlasgbl from '../../assets/images/snapshot/atlasgbl.jpg';
import snapshotXemirates from '../../assets/images/snapshot/emirates.jpg';
import snapshotXernest from '../../assets/images/snapshot/ernest-airlines.jpg';
import snapshotXnorwegian from '../../assets/images/snapshot/norwegian.jpg';
import snapshotXthaismile from '../../assets/images/snapshot/thaismile.jpg';
import snapshotXtix from '../../assets/images/snapshot/tix.jpg';
import snapshotXvirginaustralia from '../../assets/images/snapshot/virginaustralia.jpg';

import snapshotWairasia from '../../assets/images/snapshot/airasia-w.jpg';
import snapshotWcondor from '../../assets/images/snapshot/condor-w.jpg';
import snapshotWryanair from '../../assets/images/snapshot/ryanair-w.jpg';

const Gallery = () => (
<div className="aaz-container justify-top">
  <div className="w-100 dt no-repeat bg-center cover center w-100 aaz-banner-gallery">
    <div className="mw8 center">
      <div className="pa2-ns pt0 tl">
        {/* START POSTER */}
        <main className="cf pa0">
          <div className="fl w-100 w-50-ns ph2-ns">
            <div className="pb2 db no-underline black">
              <div className="bg-white pa3 pa4-ns">
              <header className="bb b--black-20 pb4">
                <h3 className="f2 fw7 lh-title mt0 mb3 heading-font">my work @ Cartrawler</h3>
                <h4 className="f3 fw4 lh-title ma0">Nov 2006 – Present</h4>
              </header>
              <section className="pt4 pb1">
                <p className="lh-copy measure f4 mt0 mb0">
                Most of my time in Cartrawler, I was responsible for building user interface, maintaining, expanding car rental and mobility microsites and widgets. I have integrated white label solutions to more than 100 websites including top airlines and travel sites.
                <br /><br />
                I'm a team player, highly motivated, flexible individual. I've been through many transitions in the company and have always supported every change, and here we go, still proud to be associated with Cartrawler.
                <br /><br />
                Since I moved to Australia, I've actively involved in technical assistance to clients, liaising with stakeholders to create a full design and get it built.
                <br /><br />
                <a href="https://www.cartrawler.com/" className="dib"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={logoCartrawler}
                      className="aaz-logo-cartrawler w-100"
                      alt="Cartrawler"
                    />
                  </a>
                </p>
              </section>
              {/* 
              Actively involved in the Jetstar car rental transition. <br />
              <a className="no-underline pv2 grow db" 
                href="https://www.autorentalnews.com/139187/cartrawler-appointed-as-car-rental-partner-to-jetstar/">
                <img className="db w-100" src={snapshotXmain} alt="cartrawler" />
              </a>
                */}
              </div>
            </div>
            <a className="no-underline pv2 pl2 pr0-ns pr2 grow db" 
              href="https://www.jetstar.com/au/en/car-hire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXjetstar} alt="cartrawler" />
            </a>
            <a className="no-underline pv2 pl2 pr0-ns pr2 grow db" 
              href="http://cars.airasia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXairasia} alt="cartrawler" />
            </a>
            <a className="no-underline pv2 pl2 pr0-ns pr2 grow db" 
              href="https://www.aurignycarhire.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXaurigny} alt="cartrawler" />
            </a>
          </div>
          <div className="fl w-50 w-25-ns ph2">
            <a className="no-underline pv2 grow db" 
              href="https://autos.westjet.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXwestjet} alt="cartrawler" />
            </a>
            <a className="no-underline pv2 grow db" 
              href="http://cars.swiss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXswiss} alt="cartrawler" />
            </a>
            <a className="no-underline pv2 grow db" 
              href="https://autos.flybondi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXflybondi} alt="cartrawler" />
            </a>
            <a className="no-underline pv2 grow db"
              href="https://www.cartrawler.com/atlasglb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXatlasgbl} alt="cartrawler" />
            </a>
            <a className="pv2 grow db no-underline black"
              href="https://www.cartrawler.com/emirates/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXemirates} alt="cartrawler" />
            </a>
            <a className="pv2 grow db no-underline black"
              href="https://www.cartrawler.com/flyernest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXernest} alt="cartrawler" />
            </a>
            <a className="pv2 grow db no-underline black"
              href="https://www.cartrawler.com/norwegian-new/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXnorwegian} alt="cartrawler" />
            </a>
          </div>
          <div className="fl w-50 w-25-ns ph2">
            <a className="pv2 grow db no-underline black"
              href="https://cars.cartrawler.com/thaismileair/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXthaismile} alt="cartrawler" />
            </a>
            <a className="pv2 grow db no-underline black"
              href="http://autohuur.tix.be/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXtix} alt="cartrawler" />
            </a>
            <a className="pv2 grow db no-underline black"
              href="https://cartrawler.virginaustralia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXvirginaustralia} alt="cartrawler" />
            </a>
            <a className="pv2 grow db no-underline black"
              href="https://cars.cartrawler.com/airasia/widget?type=html&clientId=575248&lang=en&locCode=ams&curr=EUR&residencyId=IE&pkDateTime=202008291000&rtDateTime=202009071000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotWairasia} alt="cartrawler" />
            </a>
            <a className="pv2 grow db no-underline black"
              href="https://cars.cartrawler.com/condor/widget?type=html&clientId=813384&lang=en&num=4&locCode=ams&curr=EUR&residencyId=IE&pkDateTime=202008291000&rtDateTime=202009071000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotWcondor} alt="cartrawler" />
            </a>
            <a className="pv2 grow db no-underline black"
              href="https://www.cartrawler.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotWryanair} alt="cartrawler" />
            </a>
            <a className="pv2 grow db no-underline black"
              href="https://www.cartrawler.com/aerlingus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="db w-100" src={snapshotXaerlingus} alt="cartrawler" /> 
            </a>
          </div>
        </main>
        {/* END POSTER */}
      </div>
    </div>
  </div>      
</div>
);

export default {
    routeProps: {
        path: '/gallery',
        component: Gallery
    },
    name: 'Gallery',
    icon: iconGallery,
    imgStyle: 'aaz-icon-gallery w2 bg-white-70 br-100 b--white ba',
    linkStyle: 'f6 fw4 hover-white no-underline white-70 dib ml2 pv1 pl1 grow',
}