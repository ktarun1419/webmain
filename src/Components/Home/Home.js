import React from 'react'
import SVG from "react-inlinesvg";
import './Home.css'
import { socialIcons } from './constant';

const Home = () => {
  return (
    <>
        <div className='Scroll-container'>
            <div className='flex-container'>
                <img className='logo-img' src='https://artyfact.game/wa-data/public/site/themes/artyfact/logo/logo2.gif'/>
                <h1>ARTYFACT</h1>
                <h2>The Future of Gaming</h2>
                <h3>Play games, earn money, trade NFTs, make events, and much more!</h3>
                <div className='icondiv'>
                    {
                        socialIcons.map((el) => {
                            return <SVG src={el?.src} /> 
                        })
                    }
                </div>
                <div className='button-bar'>
                    <button className='button1'>WHITEPAPER</button>
                    <button className='button2'>LAUNCHPAD</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home