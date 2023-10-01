import React from 'react'
import SVG from "react-inlinesvg";
import './Home.css'
import { socialIcons } from './constant';
import TokenBlock from '../TokenBlock';
import About from '../About/About';
import Feature from '../Features/Feature';
import Games from '../Games/Games';
import NFT from '../NFT/NFT';
import RoadMap from '../RoadMap/RoadMap';

const Home = () => {
  return (
    <>
        <div className='Scroll-container'>
            <div className='flex-container'>
                <img className='logo-img' src='https://artyfact.game/wa-data/public/site/themes/artyfact/logo/logo2.gif'/>
                <h1>CICCADEFI</h1>
                <h2>The Future of Gaming</h2>
                <h3>Defi Web3Game, staking dApp, #Nft Minting AI chat, #Metaverse & more! Swap, stake, play-to-earn, & dive into new realms.</h3>
                <div className='icondiv'>
                    {
                        socialIcons.map((el) => {
                            return <a className='svg_icons'><SVG src={el?.src} /></a> 
                        })
                    }
                </div>
                <div className='button-bar'>
                    <button className='button1'>WHITEPAPER</button>
                    <button className='button2'>LAUNCHPAD</button>
                </div>
                <div className='powered_h1'>
                    POWERED BY
                </div>
                <div className='powered-bar'>
                    <img src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/unreal4.png" width="85px" class="img-fluid"/>
                    <img src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/binance.png" width="85px" class="img-fluid"/>
                </div>
                <div className='powered_h1'>
                    SECURITY AUDIT BY
                </div>
                <div className='powered-bar'>
                    <img data-cfsrc="/wa-data/public/site/themes/artyfact/logo/certik.png" class="img-fluid" src="https://artyfact.game/wa-data/public/site/themes/artyfact/logo/certik.png"/>
                </div>
                <div className='powered_h1'>
                    TEST ARTYFACT
                </div>
                <div className='powered-bar'>
                    <button className='btn button1'>ARTYFACT DEMO</button>
                </div>
            </div>
            <TokenBlock/>
            <About/>
            <Feature/>
            <Games/>
            <NFT/>
            <RoadMap/>
        </div>
    </>
  )
}

export default Home