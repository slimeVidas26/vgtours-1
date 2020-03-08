import React from 'react'
import { Link } from "react-router-dom";

//import images
import  hero_big_28  from "../assets/images/hero/hero_big_28.jpg";
import  hero_big_29  from "../assets/images/hero/hero_big_29.jpg";
import  hero_big_30  from "../assets/images/hero/hero_big_30.jpg";
import  hero_big_31  from "../assets/images/hero/hero_big_31.jpg";

function HeroSearchFullPage() {
    return (
       <div className="hero-search-full-page next-sq">

{/* <!-- Hero Search --> */}
{/* <!-- .thin .animate .shadow .colored --> */}
<div className="h-search-h thin-sq shadow-sq animate-sq">    
    <form action="listing_page.html" className="hero-search-form">
       <div className="search-item">
            <div className="fltp">
                <input type="text" value="" required/>
                <label className="placeholder" data-big-placeholder="Where do you travel?" data-little-placeholder="Where?"></label>
            </div>
       </div>

        <div className="search-item">
            <div className="fltp calendar-sq" id="rangestart">
                <input type="text" className="filter" value="" required placeholder="enter date"/>
                <label className="placeholder"  data-big-placeholder="Check in" data-little-placeholder="Start"></label>
            </div>

            <i className="icon icon-little-arrow"></i>

            <div className="fltp calendar-sq" id="rangeend">
                <input type="text" className="filter" value="" required placeholder="enter date"/>
                <label className="placeholder"  data-big-placeholder="Check out" data-little-placeholder="Ends"></label>
            </div>
        </div>

        <div className="search-item">
            <div className="fltp">
                <select name="dropdown" size="13" className="dropdown" required>
                    <option value="0" selected>Guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5">6</option>
                    <option value="5">7</option>
                    <option value="5">8</option>
                    <option value="5">9</option>
                    <option value="5">10</option>
                    <option value="5">11</option>
                    <option value="5">12</option>
                </select>
                <label className="placeholder">Guests</label>
            </div>
        </div>

        <div className="search-item">
            <button className="button-sq hero-search-button">
                <i className="icon icon-search"></i>
            </button>
        </div>

    </form>
</div>

{/* <!-- Hero Big - Slick --> */}
<div className="sq-slick hero-big slide-up-sq" data-mobile-arrows="false" data-tablet-arrows="false" data-mobile-dots="true" data-tablet-dots="true" data-fade="true" data-speed="500" data-ease="linear">
  {/* <!-- .slide-up .fade .top .bottom --> */}

   {/* <!--Slide 01--> */}
    <div className="">
        <div className="caption-content">
           <h1 className="font-weight-extrabold-sq">New Experiences</h1>
        </div>
        <div className="caption-outside">
            <Link to ="#top"  className="button anchor-sq" >
                <i className="icon big icon-compass"></i>
                <span>Explore</span>
            </Link>
        </div>

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src={hero_big_28} alt="hero_big_28.jpg"/>
            </div>
        </div>
    </div>

    {/* <!--Slide 02--> */}
    <div>
        <div className="caption-content">
           <h1 className="font-weight-extrabold-sq">New Feelings</h1>
        </div>
        
        <div className="caption-outside">
            <Link to="#top" className="button anchor-sq" >
                <i className="icon big icon-compass"></i>
                <span>Find</span>
            </Link>
        </div>

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src={hero_big_29} alt=""/>
            </div>
        </div>
    </div>

    {/* <!--Slide 03--> */}
    <div>
        <div className="caption-content">
           <h1 className="font-weight-extrabold-sq">New Stories</h1>
        </div>
        
        <div className="caption-outside">
            <Link to ="#top" className="button anchor-sq" >
                <i className="icon big icon-compass"></i>
                <span>Read</span>
            </Link>
        </div>

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src={hero_big_30} alt=""/>
            </div>
        </div>
    </div>

    {/* <!--Slide 04--> */}
    <div>
        <div className="caption-content">
           <h1 className="font-weight-extrabold-sq">New Locations</h1>
        </div>
        <div className="caption-outside">
            <Link to ="#top"  className="button anchor-sq">
                <i className="icon big icon-compass"></i>
                <span>View</span>
            </Link>
        </div>

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src={{hero_big_31}} alt=""/>
            </div>
        </div>
    </div>

  </div>

</div>
    )
}

export default HeroSearchFullPage
