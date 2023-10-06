import React from 'react'
import './bounc.css'
const Bounce = () => {
  return (
    <div class="stage">
    <div class="bouncer-holder"  style={{animationDuration:'3s'}}>
        <div class="bouncer" style={{backgroundColor:'rgb(255, 176, 151)' , animationDuration:'12s'}}>NFTs</div>
    </div>
    <div class="bouncer-holder"  style={{animationDuration:'4s'}}>
        <div class="bouncer" style={{backgroundColor:'rgb(255, 245, 151)' , animationDuration:'9s'}} >Web3 Games</div>
    </div>
    <div class="bouncer-holder"  style={{animationDuration:'5s'}}>
        <div class="bouncer" style={{backgroundColor:'rgb(197, 151, 255)' , animationDuration:'5.2s'}}>Metaverse</div>
    </div>
    <div class="bouncer-holder" style={{animationDuration:'6s'}}>
        <div class="bouncer" style={{backgroundColor:'rgb(197, 151, 255)' , animationDuration:'2.5s'}}>Staking</div>
    </div>
    <div class="bouncer-holder"  style={{animationDuration:'8s'}}>
        <div class="bouncer" style={{backgroundColor:'rgb(197, 151, 255)' , animationDuration:'7s'}}>Defi</div>
    </div>
    <div class="bouncer-holder"  style={{animationDuration:'7s'}}>
        <div class="bouncer" style={{backgroundColor:'rgb(255, 176, 151)' , animationDuration:'8.2s'}}>Crypto</div>
    </div>
    <div class="bouncer-holder"  style={{animationDuration:'10s'}}>
        <div class="bouncer" style={{backgroundColor:'rgb(151, 224, 255)' , animationDuration:'4s'}} >Community</div>
    </div>
    <div class="bouncer-holder" style={{animationDuration:'9s'}}>
        <div class="bouncer" style={{backgroundColor:'rgb(255, 245, 151)' , animationDuration:'10s'}} >Fiat</div>
    </div>
    <div class="bouncer-holder"  style={{animationDuration:'11s'}}>
        <div class="bouncer" style={{backgroundColor:'rgb(197, 151, 255)' , animationDuration:'11s'}}>#Cicca</div>
    </div>
</div>
  )
}

export default Bounce