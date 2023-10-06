import React,{useEffect} from 'react'
import './RoadMap.css'
import { roadmap } from './constant'
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


const RoadMap = () => {
    useEffect(() => {
        // swiper element
  const swiperEl = document.querySelector('swiper-container');

  // swiper parameters
  const swiperParams = {
    slidesPerView: 3,
    breakpoints: {

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
            <div className='container-7'>
                <h1>ROADMAP</h1>
                <h2>BECOME A PART OF CICCA COMMUNITY</h2>
                {true && <swiper-container
                
                >
                    {roadmap.map((el) => {
                        return <swiper-slide><div className="mapCards">
                            <div class="cardButtondiv">
                                <span class="cardButton">{el.title}</span>
                            </div>
                            <hr></hr>
                            <div class="card-rows">
                                {Object.keys(el.list).map((x) => {
                                    return <div className='rowStyle2' >
                                        {el.list[x] && <img src='https://artyfact.game/wa-data/public/site/themes/artyfact/icons/check_g.svg?v=2' className='progress' />}
                                        {x}
                                    </div>
                                })}
                            </div>
                        </div>
                        </swiper-slide>
                    })}
                </swiper-container>
                }
                {false && <div className='cardSlider'>
                    {roadmap.map((el) => {
                        return <div className="mapCards">
                            <div class="cardButtondiv">
                                <span class="cardButton">{el.title}</span>
                            </div>
                            <hr></hr>
                            <div class="card-rows">
                                {Object.keys(el.list).map((x) => {
                                    return <div className='rowStyle2' >
                                        {el.list[x] && <img src='https://artyfact.game/wa-data/public/site/themes/artyfact/icons/check_g.svg?v=2' className='progress' />}
                                        {x}
                                    </div>
                                })}
                            </div>
                        </div>
                    })}
                </div>}
            </div>
        </>
    )
}

export default RoadMap