import React from 'react'
import './About.css'
import { links } from './constant'

const About = () => {
    return (
        <>
            <div className='container-3'>
                {/* <h1>ABOUT CICCA</h1>
                <h2>WELCOME TO THE REVOLUTION IN GAME</h2> */}
                {links.map((el) => {
                    return <iframe title="Cicca Gameplay Trailer | Metaverse game" src={el} allowfullscreen="" allow="autoplay;" __idm_id__="20520962">
                    </iframe>
                })}
                {/* <div className='aboutfooter'>
                    Artyfact is the next generation Gaming Metaverse with integrated
                    innovative GameFi experiences. Artyfact users are able to play AAA
                    GameFi games and earn $ARTY, buy and trade game assets as NFTs, as
                    well as attend virtual events such as concerts, NFT exhibitions,
                    runway shows and eSport tournaments.
                </div> */}
            </div>
        </>
    )
}

export default About