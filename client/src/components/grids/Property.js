import React from 'react'
import { Link } from "react-router-dom";

//import images
import property_little_01 from '../../assets/images/property/property_little_01.jpg'
import property_little_02 from '../../assets/images/property/property_little_02.jpg'
import property_little_03 from '../../assets/images/property/property_little_03.jpg'
import property_little_04 from '../../assets/images/property/property_little_04.jpg'
import property_little_05 from '../../assets/images/property/property_little_05.jpg'
import property_little_06 from '../../assets/images/property/property_little_06.jpg'

import avatar_01 from '../../assets/images/avatar/avatar_01.jpg'
import avatar_02 from '../../assets/images/avatar/avatar_02.jpg'
import avatar_03 from '../../assets/images/avatar/avatar_03.jpg'
import avatar_04 from '../../assets/images/avatar/avatar_04.jpg'
import avatar_05 from '../../assets/images/avatar/avatar_05.jpg'
import avatar_06 from '../../assets/images/avatar/avatar_06.jpg'

function Property() {
    return (
         <div className="row">
        <div className="ui column">
            
            <div className="typo-section-sq bottom-big">
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">Popular Places</h2>
                    
                    <p className="text-align-center-sq">Find the most visited places in entire world.</p>
                </div>
                
                <div className="ui grid">
                   
                    <div className="twelve wide mobile four wide tablet four wide computer column">
                        <div className="property-item">
                            <div className="property-item-inner">
                
                               <div className="price-tag-sq">112 &euro; <span>/ night</span></div>
                               <Link to = "" className="add-wishlist modal-ui-trigger" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </Link>
                
                                <Link to ="property_page.html"  className="image-sq">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src={property_little_01} alt="" className=""/>
                                        </span>
                                    </span>
                                </Link>
                
                                <div className="main-details">
                                   <div className="title-row">
                                       <Link to="property_page.html" className="title-sq">Downtown Sweet House</Link>
                                       <Link to="vendor_details.html" className="avatar-sq">
                                           <img src={avatar_01} alt=""/>
                                       </Link>
                                   </div>
                
                                   <div className="icons-row">
                                       <div className="icons-column">
                                           <i className="icon icon-heart"></i> 8.6
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-account-group-5"></i> x 4
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-door-simple"></i> x 6
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-bed-double"></i> x 2
                                       </div>
                                   </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                
                    <div className="twelve wide mobile four wide tablet four wide computer column">
                        <div className="property-item">
                                <div className="property-item-inner">
                
                                   <div className="price-tag-sq">78 &euro; <span>/ night</span></div>
                                   <Link to = "" className="add-wishlist modal-ui-trigger" data-trigger-for="wishlist">
                                       <i className="icon icon-add-wishlist"></i>
                                   </Link>
                                   
                                   
                                    <Link to = "property_page.html" className="image-sq">
                                        <span className="image-wrapper">
                                            <span className="image-inner">
                                                <img src={property_little_02} alt="" className=""/>
                                            </span>
                                        </span>
                                    </Link>
                
                                    <div className="main-details">
                
                                       <div className="title-row">
                                           <Link to="property_page.html" className="title-sq">Large and confortable double room</Link>
                                           <Link to="vendor_details.html" className="avatar-sq">
                                               <img src={avatar_02} alt=""/>
                                           </Link>
                                       </div>
                
                                       <div className="icons-row">
                                       <div className="icons-column">
                                           <i className="icon icon-heart"></i> 7.8
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-account-group-5"></i> x 2
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-door-simple"></i> x 3
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-bed-double"></i> x 2
                                       </div>
                                   </div>
                
                                    </div>
                
                                </div>
                        </div>
                    </div>
                
                    <div className="twelve wide mobile four wide tablet four wide computer column">
                        <div className="property-item">
                            <div className="property-item-inner">
                
                               <div className="price-tag-sq">51 &euro; <span>/ night</span></div>
                               <Link to = "" className="add-wishlist modal-ui-trigger" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </Link>
                
                                <Link to = "property_page.html" className="image-sq">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src={property_little_03} alt="" className=""/>
                                        </span>
                                    </span>
                                </Link>
                
                
                                <div className="main-details">
                
                                   <div className="title-row">
                                       <Link to="property_page.html" className="title-sq">Modern studio flat with garden</Link>
                                       <Link to="vendor_details.html" className="avatar-sq">
                                           <img src={avatar_03}
                                            alt=""/>
                                       </Link>
                                   </div>
                
                                   <div className="icons-row">
                                       <div className="icons-column">
                                           <i className="icon icon-heart"></i> 7.5
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-account-group-5"></i> x 2
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-door-simple"></i> x 1
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-bed-double"></i> x 3
                                       </div>
                                   </div>
                
                                </div>
                
                            </div>
                        </div>
                    </div>
                    
                    <div className="twelve wide mobile four wide tablet four wide computer column">
                        <div className="property-item">
                            <div className="property-item-inner">
                
                               <div className="price-tag-sq">130 &euro; <span>/ night</span></div>
                               <Link to  = ""  className="add-wishlist modal-ui-trigger" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </Link>
                               
                                <Link to  = "property_page.html" className="image-sq">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src={property_little_04} alt="" className=""/>
                                        </span>
                                    </span>
                                </Link>
                                
                
                                <div className="main-details">
                                   <div className="title-row">
                                       <Link to="property_page.html" className="title-sq">Bright clean room close to Brixton</Link>
                                       <Link to="vendor_details.html" className="avatar-sq">
                                           <img src={avatar_04} alt=""/>
                                       </Link>
                                   </div>
                
                                   <div className="icons-row">
                                       <div className="icons-column">
                                           <i className="icon icon-heart"></i> 8.1
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-account-group-5"></i> x 2
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-door-simple"></i> x 2
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-bed-double"></i> x 2
                                       </div>
                                   </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                
                    <div className="twelve wide mobile four wide tablet four wide computer column">
                        <div className="property-item">
                            <div className="property-item-inner">
                
                               <div className="price-tag-sq">59 &euro; <span>/ night</span></div>
                               <Link to ="" className="add-wishlist modal-ui-trigger" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </Link>
                
                                <Link to ="property_page.html"  className="image-sq">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src={property_little_05} alt="" className=""/>
                                        </span>
                                    </span>
                                </Link>
                
                                <div className="main-details">
                
                                   <div className="title-row">
                                       <Link to="property_page.html" className="title-sq">Romantic Suite in family home</Link>
                                       <Link to="vendor_details.html" className="avatar-sq">
                                           <img src={avatar_05} alt=""/>
                                       </Link>
                                   </div>
                
                                   <div className="icons-row">
                                       <div className="icons-column">
                                           <i className="icon icon-heart"></i> 7.5
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-account-group-5"></i> x 4
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-door-simple"></i> x 2
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-bed-double"></i> x 1
                                       </div>
                                   </div>
                
                                </div>
                
                            </div>
                    </div>
                    </div>
                
                    <div className="twelve wide mobile four wide tablet four wide computer column">
                        <div className="property-item">
                            <div className="property-item-inner">
                
                               <div className="price-tag-sq">32 &euro; <span>/ night</span></div>
                               <Link to ="" className="add-wishlist modal-ui-trigger" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </Link>
                
                
                                <Link to ="property_page.html" className="image-sq">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src={property_little_06} alt="" className=""/>
                                        </span>
                                    </span>
                                </Link>
                
                                <div className="main-details">
                
                                   <div className="title-row">
                                       <Link to="property_page.html" className="title-sq">Quit and bright room in the heart of Amsterdam</Link>
                                       <Link to="vendor_details.html" className="avatar-sq">
                                           <img src={avatar_06} alt=""/>
                                       </Link>
                                   </div>
                
                                   <div className="icons-row">
                                       <div className="icons-column">
                                           <i className="icon icon-heart"></i> 7.5
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-account-group-5"></i> x 7
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-door-simple"></i> x 2
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-bed-double"></i> x 2
                                       </div>
                                   </div>
                
                                </div>
                
                            </div>
                    </div>
                    </div>
                    
                </div>
                
                <Link to="listing_page.html" className="more-trigger" data-more="Discover All">
                   <i className="icon icon-arrow-down-122"></i>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Property
