import React from 'react'
import './Feature.css'
import { features } from './constant'

const Feature = () => {
    return (
        <>
            <div className='container-4'>
                <h1>Features</h1>
                <div class="grid-container">
                    {features.map((el,idx) => {
                        return <div id={`item${idx}`} class="grid-item">
                            <img src={el.src} alt="" />
                            <div className='title'>{el.title}</div>
                            <div className='description'>{el.description}</div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Feature