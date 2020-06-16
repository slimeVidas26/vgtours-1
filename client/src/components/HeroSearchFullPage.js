import React , {useState} from 'react'
import { Link } from "react-router-dom";
import HeroSearchForm from './HeroSearchForm'

//import images
import  hero_big_28  from "../assets/images/hero/hero_big_28.jpg";
import  hero_big_29  from "../assets/images/hero/hero_big_29.jpg";
import  hero_big_30  from "../assets/images/hero/hero_big_30.jpg";
import  hero_big_31  from "../assets/images/hero/hero_big_31.jpg";
import  hero_big_32  from "../assets/images/hero/hero_big_32.jpg";

function HeroSearchFullPage() {

   

    const [heroes , setHeroes] = useState([
        {title : "New Experiences" , image : hero_big_28 , verb : "Explore"},
        {title : "New Feelings" , image : hero_big_29 , verb : "Find"},
        {title : "New Stories" , image : hero_big_30 , verb : "Read"},
        {title : "New Locations" , image : hero_big_31 , verb : "View"},
        {title : "New Challenge" , image : hero_big_32 , verb : "Travel"},

    ])
    return (
       <div className="hero-search-full-page next-sq">

{/* <!-- Hero Search --> */}
{/* <!-- .thin .animate .shadow .colored --> */}
<HeroSearchForm />

{/* <!-- Hero Big - Slick --> */}
<div className="sq-slick hero-big slide-up-sq" data-mobile-arrows="false" data-tablet-arrows="false" data-mobile-dots="true" data-tablet-dots="true" data-fade="true" data-speed="500" data-ease="linear">
  {/* <!-- .slide-up .fade .top .bottom --> */}

    
    
    
    {heroes.map((hero)=>{
        const alterImage = hero.image.split('/');
        return (
            <div className="">
        <div className="caption-content">
           <h1 className="font-weight-extrabold-sq">{hero.title}</h1>
        </div>
        <div className="caption-outside">
            <Link to ="#top"  className="button anchor-sq" >
                <i className="icon big icon-compass"></i>
                <span>{hero.verb}</span>
            </Link>
        </div>

        

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src={hero.image} alt={alterImage[3]}/>
            </div>
        </div>
    </div>
  
        )
    })}
  
  </div>

</div>
    )
}

export default HeroSearchFullPage
