import React from 'react'
import { Link } from "react-router-dom";
import MagicGridArticles from './MagicGridArticles'


//import images
import magic_grid_category_special_01 from '../../assets/images/magic_grid/magic_grid_category_special_01.png';
import magic_grid_category_special_02 from '../../assets/images/magic_grid/magic_grid_category_special_02.jpg';
import magic_grid_category_special_03 from '../../assets/images/magic_grid/magic_grid_category_special_03.jpg';
import magic_grid_category_special_04 from '../../assets/images/magic_grid/magic_grid_category_special_04.jpg';
import magic_grid_category_special_05 from '../../assets/images/magic_grid/magic_grid_category_special_05.jpg';
import magic_grid_category_special_06 from '../../assets/images/magic_grid/magic_grid_category_special_06.jpg';
import magic_grid_category_special_07 from '../../assets/images/magic_grid/magic_grid_category_special_07.jpg';



function MagicGridCategorySpecial() {
    return (
        <div className="row">
        <div className="ui column">
            <div className="typo-section-sq bottom-big">
            
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">Top Interest</h2>
                    <p className="text-align-center-sq">In hac habitasse platea dictumst. Integer quis tortor enim. Integer et elit nec magna ultricies convallis. <br/> In venenatis eu erat et facilisis. Vestibulum congue enim nisl.</p>
                </div>
                
                <div className="magic-grid category-sq special-sq hover-scale">
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic_grid_category_special_01} alt=""/>
                
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <Link to="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Wildlife</p>
                            </Link>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic_grid_category_special_02} alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <Link to="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Adventure</p>
                            </Link>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic_grid_category_special_03} alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <Link to="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Beaches</p>
                            </Link>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic_grid_category_special_04} alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <Link to="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Monuments</p>
                            </Link>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic_grid_category_special_05} alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <Link to="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Food</p>
                            </Link>
                
                        </div>
                    </div>
                    
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic_grid_category_special_06} alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <Link to="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Party</p>
                            </Link>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic_grid_category_special_07} alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <Link to="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Museum</p>
                            </Link>
                
                        </div>
                    </div>
                </div>
            </div>
            
            <hr/>
           
         <MagicGridArticles/>
            
        </div>
    </div>
    )
}

export default MagicGridCategorySpecial
