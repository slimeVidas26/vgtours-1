import React , {useState} from 'react'
import { Link } from "react-router-dom";


//import images
import magic_grid_article_01 from '../../assets/images/magic_grid/magic_grid_article_01.jpg';
import magic_grid_article_02 from '../../assets/images/magic_grid/magic_grid_article_02.jpg';
import magic_grid_article_03 from '../../assets/images/magic_grid/magic_grid_article_03.jpg';
import magic_grid_article_04 from '../../assets/images/magic_grid/magic_grid_article_04.jpg';
import magic_grid_article_05 from '../../assets/images/magic_grid/magic_grid_article_05.jpg';
import magic_grid_article_06 from '../../assets/images/magic_grid/magic_grid_article_06.jpg';

function MagicGridArticles() {
    const [magicGridArticles , setMagicGridArticles] = useState([
        {image : magic_grid_article_01 , title : "Getting Cheap Airfare For Last Minute Travel" , desc : "The city of southern California, san diego is locally known as ‘America’s Finest City’. It’s located on San Diego Bay, an inlet of the Pacific Ocean near the Mexican border. San Diego is the second largest city in"},
        {image : magic_grid_article_02 , title : "10 Steps To Look Younger" , desc : "Lots of people are unaware of the fact that adult acne exists and they seem not to know how to treat adult acne. People have this misconception that acne only happens during teenage years and gradually wears off as they age. For most people, this fact may be true but it is important to note that acne does not start during teenage years only. However, it is important to note that there are a significant number of adults that experience such condition."},
        {image : magic_grid_article_03 , title : "The Benefits And Drawbacks Of Buying Designer Kitchenware Products" , desc : "When it is time to bake cookies, we usually think that it is complicated, that it takes a lot of time. In one word : that it is not worthwhile ! We will show you hereunder that it is simply not true. Baking cookies is easy, fast and, most important, fun. Come and join all our readers who decided to give it a try and now,"},
        {image : magic_grid_article_04 , title : "Enhance Your Brand Potential With Giant Advertising Blimps" , desc : "It is a small world after all. Globalization is that great process that started perhaps with Mr. Marco Polo, but has since regained its prestige after a short stint of protectionism following the great depression"},
        {image : magic_grid_article_05 , title : "Download Anything Now A Days" , desc : "Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble! Downloading music to your Ipod has more than one pitfall associated with it, and this article will tell you the best way to download free song for Ipod."},
        {image : magic_grid_article_06 , title : "Counting Your Chicken Before They Hatch" , desc : "When it is time to bake cookies, we usually think that it is complicated, that it takes a lot of time. In one word : that it is not worthwhile ! We will show you hereunder that it is simply not true. Baking cookies is easy, fast and, most important, fun. Come and join all our readers who decided to give it a try and now,"},

    ])
    return (
          <div className="row">
        <div className="ui column">
          <div className="typo-section-sq bottom-big">	
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">News</h2>
                    <p className="text-align-center-sq"> Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>
                </div>
                
                
                <div className="magic-grid article-sq hover-scale">
                {magicGridArticles.map((mga)=>{
                const alterImage = mga.image.split('/');
                  return (
                    <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <Link to ="article.html" className="image-sq" >
                                <span className="image-wrapper">
                                    <span className="image-inner">
                                        <img className="image-sq" src={mga.image} alt={alterImage[3]}/>
                                    </span>
                                </span>
                            </Link>
                
                            {/* <!-- typography container--> */}
                            <div className="typo-sq">
                                <p className="typo-label-sq" data-label-before="Travel" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">{mga.title}</p>
                                <p className="typo-desc-sq">{mga.desc}</p>
                
                                <Link to="article.html" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></Link>
                            </div>
                        </div>
                    </div>
                   
                  )
                })}
                   
                </div>
                
                <Link to="article_listing.html" className="more-trigger" data-more="View More">
                   <i className="icon icon-arrow-down-122"></i>
                </Link>
            </div>
            </div>
    </div>
    )
}

export default MagicGridArticles
