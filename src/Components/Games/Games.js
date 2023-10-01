import React from 'react'
import './Games.css'
import { games } from './constant'

const Games = () => {
    return (
        <>
            <div className='container-5'>
                <h1>GAME MODES</h1>
                <div className="grid2">
                    {games.map((el) => <div className="grid-card">
                        <img src={el.src} alt="" />
                        <div className='title'>{el.title}</div>
                        <div className='description'>{el.description}</div>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Games