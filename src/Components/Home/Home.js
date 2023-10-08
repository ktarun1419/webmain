import React from 'react'
import SVG from "react-inlinesvg";
import './Home.css'
import { socialIcons } from './constant';
import TokenBlock from '../TokenBlock';
import About from '../About/About';
import Feature from '../Features/Feature';
import Games from '../Games/Games';
import NFT from '../NFT/NFT';

import Bounce from '../Bounce/Bounce';
import Timeline from '../Timeline/Timeline';
// import Bounce from '../Bounce';

const Home = () => {
  return (
    <>
        <div className='Scroll-container'>
            <div className='flex-container'>
                {/* <img className='logo-img' src={require('../../Sources/cicca.png')}/> */}
                {/* <h1>Cicca Defi</h1>
                <h2>The Future of Gaming</h2> */}
                <h3>Defi Web3Game, staking dApp, #Nft Minting AI chat, </h3> <h3> #Metaverse & more! Swap, stake, play-to-earn, & dive into new realms.</h3>
                
                    <Bounce />
                <div className='button-bar'>
                    <button className='button1'>WHITEPAPER</button>
                    <button className='button2'>LAUNCHPAD</button>
                </div>
                {/* <div className='powered_h1'>
                    POWERED BY
                </div>
                <div className='powered-bar'>
                    <img src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/unreal4.png" width="85px" class="img-fluid"/>
                    <img src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/binance.png" width="85px" class="img-fluid"/>
                </div> */}
                {/* <div className='powered_h1'>
                    SECURITY AUDIT BY
                </div>
                <div className='powered-bar'>
                    <img data-cfsrc="/wa-data/public/site/themes/artyfact/logo/certik.png" class="img-fluid" src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/certik.png"/>
                </div> */}
                {/* <div className='powered_h1'>
                    TEST CICCA
                </div> */}
                <div className='powered-bar'>
                    <button className='btn button1'>CICCA DEMO</button>
                </div>
            </div>
            {/* <TokenBlock/> */}
            <About/>
            {/* <Bounce /> */}
            {/* <Feature/> */}
            {/* <Games/> */}
            <NFT/>
            <Timeline />
            {/* <RoadMap/> */}
        </div>
    </>
  )
}

export default Home