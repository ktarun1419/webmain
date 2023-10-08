import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { headings } from "./constant";
import $ from "jquery";
import { toast } from "react-toastify";
import SVG from "react-inlinesvg";
import { socialIcons } from "../Home/constant";
const Navbar = ({openModel,setOpenModel}) => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const changeBackround = () => {
    console.log(window.scrollY);
    if (window.scrollY > 100) {
      console.log("reeeeee");
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };
  $('document').ready(function($) {
    // Set effect velocity in ms
    let velocity = 100;
    
    let shuffleElement = $('.shuffle');
  
    $.each( shuffleElement, function(index, item) {
      $(item).attr('data-text', $(item).text());
    });
  
    let shuffle = function(o) {
      for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };
  
    let shuffleText = function(element, originalText) {
      let elementTextArray = [];
      let randomText = [];
  
      for ( let i=0;i<originalText.length;i++) {
        elementTextArray.push(originalText.charAt([i]));
      };
  
      let repeatShuffle = function(times, index) {
        if ( index == times ) {
          element.text(originalText);
          return;
        } 
  
        setTimeout( function() {
          randomText = shuffle(elementTextArray);
          for (let i=0;i<index;i++) {
            randomText[i] = originalText[i];	
          }
          randomText = randomText.join('');
          element.text(randomText);
          index++;
          repeatShuffle(times, index);
        }, velocity);	
      }
      repeatShuffle(element.text().length, 0);
    }
  
    shuffleElement.mouseenter(function() {
      shuffleText($(this), $(this).data('text'));
    });
  });;
  useEffect(() => {
    window.addEventListener("scroll", changeBackround);
  }, []);
  const handleClick=(link)=>{
    if (link==='soon') {
     toast.success("Coming soon...")
    }else if (link==='nft'){
      document.getElementById("nft_section").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
    else{
      const a = document.createElement('a');
      a.href = link;
      a.target = '_blank';  // Optional: Set the target attribute to open in a new tab/window
      a.click();
    }
  }
  return (
    <nav
      onScrollCapture={changeBackround}
      className={`navbar ${isMenuOpen ? "open" : ""} ${
        activeNavbar ? "activeNavbar" : ""
      }`}
    >
      <div className="LogoLinks">
        <div className="logo">
          <img src={require('../../Sources/cicca.png')} alt="Logo" />
        </div>
        <div className={`links ${isMenuOpen ? "open" : ""}`}>
          {Array.isArray(headings) &&
            headings.length > 0 &&
            headings.map((item) => <a className="shuffle links-click" onClick={()=>handleClick(item?.link)} >{item?.heading}</a>)}
        </div>
      </div>
      <div className="button">
                    <button className='button1nav'>WHITEPAPER</button>
                    <button className='button2nav'>ROADMAP</button>
                    <div className='icondiv'>
                    {
                        socialIcons.map((el) => {
                            return <a className='svg_icons' href={el?.link}><SVG src={el?.src} /></a> 
                        })
                    }
                </div>
                </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
