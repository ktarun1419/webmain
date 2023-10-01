import React from 'react'
import './NFT.css'
import { nfts } from './constant'

const NFT = () => {
  return (
    <>
        <div className="container-6">
            <h1>NFTS</h1>
            <h2>TRULY OWN YOUR GAMING ASSETS</h2>
            <div className='nftRow'>
                {nfts.map((el) => {
                    return <div className='nftitem'>
                        <img src={el?.src} />
                        <div className="title">{el?.title}</div>
                    </div>
                })}
            </div>
        </div>
    </>
  )
}

export default NFT