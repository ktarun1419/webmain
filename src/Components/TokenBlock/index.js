import React, { useEffect } from 'react' ;
import './index.css' ;
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const TokenBlock = () => {
  useEffect(() => {
// swiper element
const swiperEl = document.querySelector('swiper-container');

// swiper parameters
const swiperParams = {
  slidesPerView: 3,
  breakpoints: {
    440 : {
      slidesPerView : 1 ,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
    mousewheel: {
      forceToAxis: true,
    },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();
  }, [])
  return (
    <>
      <div className="container-2">
        <h1>TOKEN SALE EVENTS</h1>
        <h2>TOTAL SUPPLY 25,000,000 $ARTY</h2>
          <swiper-container init="false">
            <swiper-slide>
            <div className="card" id='cardHighlighted'>
              <div class="cardButtondiv">
                <span class="cardButton">Presale 2</span>
              </div>
              <hr></hr>
              <div class="card-rows">
                <div className='rowStyle' >
                  <span >$ARTY price</span>
                  <span style={{color:'#f3ba2f'}} >$0.30</span>
                </div>
                <div className='rowStyle'>
                  <span >Date</span>
                  <span >Ongoing</span>
                </div>
                <div className='rowStyle'>
                  <span >Minimum</span>
                  <span >$100</span>
                </div>
                <div className='rowStyle'>
                  <span >Maximum</span>
                  <span >$10000</span>
                </div>
              </div>
              <div class="text-center">
                <a href="https://launchpad.artyfact.game" className="ico-block-link" tabindex="-1">Buy $ARTY</a>
              </div>
          </div>
            </swiper-slide>
            <swiper-slide>
            <div className="card">
              <div class="cardButtondiv">
                <span class="cardButton2">LISTINGS</span>
              </div>
              <hr></hr>
              <div className="card-rows">
                
                <div className="rowStyle">
                  <span >$ARTY price</span>
                  <span style={{color : '#f3ba2f'}} >Higher</span>
                </div>
                <div className='rowStyle' >
                  <span >Date</span>
                  <span >Soon</span>
                </div>
                
                
                <div className='iconsHeading' >
                  <span>Exchanges:</span>
                </div>
                <div class="card__logo-section">
                  <img src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/mexc.jpg" class="card__logo"/>
                  <img src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/coming-soon.jpg" class="card__logo"/>
                  <img src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/coming-soon.jpg"/>
                  <img src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/PancakeSwap.jpg" class="card__logo"/>
                </div>
              </div>
              <div class="text-center">
                <a href="https://launchpad.artyfact.game" className="ico-block-link2" tabindex="-1">Buy $ARTY</a>
              </div>
          </div>
            </swiper-slide>
            </swiper-container>
          
          
      </div>
    </>
  )
}

export default TokenBlock