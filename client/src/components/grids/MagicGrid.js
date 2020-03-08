import React from 'react'
import { Link } from "react-router-dom";


//import photos
import magic_grid_photo_01 from '../../assets/images/magic_grid/magic_grid_photo_01.jpg';
import magic_grid_photo_02 from '../../assets/images/magic_grid/magic_grid_photo_02.jpg';
import magic_grid_photo_03 from '../../assets/images/magic_grid/magic_grid_photo_03.jpg';
import magic_grid_photo_04 from '../../assets/images/magic_grid/magic_grid_photo_04.jpg';

function MagicGrid() {
    return (
         <div className="row">
        <div className="ui twelve wide computer column">
            <div className="typo-section-sq bottom-big">
                
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">Top Cities to visit</h2>
                    <p className="text-align-center-sq">Discover awesome experiences around the world.</p>
                </div>
                
                <div className="magic-grid photo-sq hover-default hover-center">

                    {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">

                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic_grid_photo_01} alt=""/>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- typography container--> */}
                            <Link to="listing_page.html" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before="Greece" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Lefkada</p>
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
                                        <img className="image-sq" src={magic_grid_photo_02} alt=""/>
                                    </div>
                                </div>       
                            </div>

                            {/* <!-- typography container--> */}
                            <Link to="listing_page.html" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before="Netherlands" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Amsterdam</p>
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
                                        <img className="image-sq" src={magic_grid_photo_03} alt=""/>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- typography container--> */}
                            <Link to="listing_page.html" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before="France" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Paris</p>
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
                                        <img className="image-sq" src={magic_grid_photo_04} alt=""/>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- typography container--> */}
                            <Link to="listing_page.html" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before="Czech" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Prague</p>
                            </Link>

                        </div>
                    </div>

                </div>
                
                <Link to = "listing_page.html" className="more-trigger" data-more="See All">
                   <i className="icon icon-arrow-down-122"></i>
                </Link>
            </div>
            
        </div>
        
        
        
    </div>
    )
}

export default MagicGrid
