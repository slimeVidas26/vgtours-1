import React from 'react'

function HomePage() {
    return (
       <div id="page-wrapper">

{/* Default Header with a White Background & Dark text. */}

{/* <!--DEFAULT HEADER--> */}

<header className="header-section ths header-shadow header-sticky header-slide-up equal-tablet-header-items equal-mobile-header-items header-transparent is-transparent">
<div className="header-content">

<div className="ui container grid">
    <div className="header-item header-left flex-order-tablet-second flex-order-mobile-second flex-grow-tablet-true flex-grow-mobile-true">
        
<a href="homepage.html" className="logo item">
<img src="assets/images/logo-mybnb-transparent.png" srcset="assets/images/logo-mybnb-transparent.png 1x, assets/images/logo-mybnb-transparent@2x.png 2x" alt="mybnb logo" className="logo-transparent"/>

<img src="assets/images/logo-mybnb.png" srcset="assets/images/logo-mybnb.png 1x, assets/images/logo-mybnb@2x.png 2x" alt="mybnb logo"/>
</a>


    </div>

    <div className="header-item header-center flex-align-left flex-order-tablet-first flex-order-mobile-first flex-grow-large-desktop-true flex-grow-desktop-true flex-grow-tablet-false flex-grow-mobile-false">
       
    </div>
    
    <div className="header-item header-right flex-order-tablet-third flex-order-mobile-third flex-shrink-true flex-align-right">
        
        {/* <!-- Sidemenu Trigger --> */}
        <a className="sidemenu-trigger close-sq hamburger hamburger-spin item hidden-desktop hidden-large-desktop" data-trigger-for="menu01">
           
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
        </a>
      
        {/* <!-- Include Menu --> */}
        
{/* <!-- Header Menu--> */}
        
<div className="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">

<ul className="main-menu">
                
    <li><a href="become_a_vendor.html" className="item">
            <span>Become a Vendor</span>
        </a>
    </li>
    
    <li className="has-submenu">
        <a href="#" className="item">
            <span>Features</span>
        </a>
        <ul className="submenu">
            <li><a href="../features/fts_default_grid.html" className="item"><span>Default Grid</span></a></li>
            <li><a href="../features/fts_divided_container.html" className="item"><span>Divided Container</span></a></li>
            <li><a href="../features/fts_magic_grid.html" className="item"><span>Magic Grid</span></a></li>
            <li>
                <hr/>
            </li>
            <li><a href="../features/fts_header.html" className="item"><span>Header</span></a></li>
            <li><a href="../features/fts_menu.html" className="item"><span>Menu Default</span></a></li>
            <li><a href="../features/fts_dashboard_menu.html" className="item"><span>Dashboard Menu</span></a></li>
            <li><a href="../features/fts_logo.html" className="item"><span>Logo</span></a></li>
            <li><a href="../features/fts_buttons.html" className="item"><span>Buttons</span></a></li>
            <li><a href="../features/fts_icons.html" className="item"><span>Icons</span></a></li>
            <li><a href="../features/fts_form_elements.html" className="item"><span>Form Elements</span></a></li>
            <li><a href="../features/fts_floating_placeholder.html" className="item"><span>Floating Placeholder</span></a></li>
            <li><a href="../features/fts_sticky_element.html" className="item"><span>Sticky Element</span></a></li>
            <li><a href="../features/fts_property_items.html" className="item"><span>Property Items</span></a></li>
            <li><a href="../features/fts_articles.html" className="item"><span>Articles</span></a></li>
            <li><a href="../features/fts_promo_section.html" className="item"><span>Promo Sections</span></a></li>
            <li><a href="../features/fts_modals.html" className="item"><span>Modals</span></a></li>
            <li><a href="../features/fts_accordion.html" className="item"><span>Accordion</span></a></li>
            <li><a href="../features/fts_hero_search_horizontal.html" className="item"><span>Hero Search Horizontal</span></a></li>
            <li><a href="../features/fts_hero_search_vertical.html" className="item"><span>Hero Search Vertical</span></a></li>
            <li><a href="../features/fts_slick_carousel.html" className="item"><span>Slick Carousel</span></a></li>
            <li><a href="../features/fts_slick_hero_big.html" className="item"><span>Slick Hero Big</span></a></li>
            <li><a href="../features/fts_slick_full_page_search.html" className="item"><span>Slick Full Page Search</span></a></li>
            <li><a href="../features/fts_charts.html" className="item"><span>Charts</span></a></li>
            <li><a href="../features/fts_progressbar.html" className="item"><span>Progressbar</span></a></li>
            <li><a href="../features/fts_hamburger_icon.html" className="item"><span>Hamburger Icon</span></a></li>
            <li><a href="../features/fts_calendar.html" className="item"><span>Calendar</span></a></li>
            <li><a href="../features/fts_price_range_slider.html" className="item"><span>Price Range Slider</span></a></li>
            <li>
                <hr/>
            </li>
            <li><a href="../features/fts_typography.html" className="item"><span>Typography</span></a></li>
            <li><a href="../features/fts_code.html" className="item"><span>Code</span></a></li>
            <li><a href="../features/fts_image.html" className="item"><span>Image</span></a></li>
            <li><a href="../features/fts_image_gallery.html" className="item"><span>Image Gallery</span></a></li>
            <li><a href="../features/fts_table.html" className="item"><span>Table</span></a></li>
            
        </ul>
    </li>
    
    <li><a href="#" className="item modal-ui-trigger" data-trigger-for="modal01">
            <span>Sign Up</span>
        </a>
    </li>

    <li><a href="#" className="item modal-ui-trigger" data-trigger-for="modal02">
            <span>Log In</span>
        </a>
    </li>

</ul>
</div>

{/* <!-- End of Header Menu--> */}

        
    </div>
</div>

</div>    
</header>











{/* <!-- Hero Full Page --> */}
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
            <a className="button anchor-sq" href="#top">
                <i className="icon big icon-compass"></i>
                <span>Explore</span>
            </a>
        </div>

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src="assets/images/hero/hero_big_28.jpg" alt=""/>
            </div>
        </div>
    </div>

    {/* <!--Slide 02--> */}
    <div>
        <div className="caption-content">
           <h1 className="font-weight-extrabold-sq">New Feelings</h1>
        </div>
        
        <div className="caption-outside">
            <a className="button anchor-sq" href="#top">
                <i className="icon big icon-compass"></i>
                <span>Find</span>
            </a>
        </div>

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src="assets/images/hero/hero_big_29.jpg" alt=""/>
            </div>
        </div>
    </div>

    {/* <!--Slide 03--> */}
    <div>
        <div className="caption-content">
           <h1 className="font-weight-extrabold-sq">New Stories</h1>
        </div>
        
        <div className="caption-outside">
            <a className="button anchor-sq" href="#top">
                <i className="icon big icon-compass"></i>
                <span>Read</span>
            </a>
        </div>

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src="assets/images/hero/hero_big_30.jpg" alt=""/>
            </div>
        </div>
    </div>

    {/* <!--Slide 04--> */}
    <div>
        <div className="caption-content">
           <h1 className="font-weight-extrabold-sq">New Locations</h1>
        </div>
        <div className="caption-outside">
            <a className="button anchor-sq" href="#top">
                <i className="icon big icon-compass"></i>
                <span>View</span>
            </a>
        </div>

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src="assets/images/hero/hero_big_31.jpg" alt=""/>
            </div>
        </div>
    </div>

  </div>

</div>

<div className="ui layout" id="top">
<div className="ui grid container">
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
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_photo_01.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- typography container--> */}
                            <a href="listing_page.html" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before="Greece" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Lefkada</p>
                            </a>

                        </div>
                    </div>

                    {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">

                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_photo_02.jpg" alt=""/>
                                    </div>
                                </div>       
                            </div>

                            {/* <!-- typography container--> */}
                            <a href="listing_page.html" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before="Netherlands" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Amsterdam</p>
                            </a>

                        </div>
                    </div>

                    {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">

                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_photo_03.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- typography container--> */}
                            <a href="listing_page.html" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before="France" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Paris</p>
                            </a>

                        </div>
                    </div>

                    {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">

                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_photo_04.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- typography container--> */}
                            <a href="listing_page.html" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before="Czech" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Prague</p>
                            </a>

                        </div>
                    </div>

                </div>
                
                <a className="more-trigger" data-more="See All" href="listing_page.html">
                   <i className="icon icon-arrow-down-122"></i>
                </a>
            </div>
            
        </div>
        
        
        
    </div>
</div>

<div className="promo-section">
   
   {/* <!-- content --> */}
    <div className="ui container grid centered">
        <div className="row">
            <div className="ui twelve wide mobile ten wide tablet eight wide computer six wide large screen six wide widescreen column">
                <div className="promo-content style-01">
                    <h2>Explore the world</h2>
                    <p>Spectacular natural wonders and astonishing man-made structures. The list of great landmarks are often limited to seven, but the world is filled with wonders.</p>
                    
                    <a href="listing_page.html" className="button-sq see-through-sq"> See Map </a>
                </div>

            </div>
        </div>    
    </div>
    
    {/* <!-- picture --> */}
    <div className="image-wrapper">
        <div className="image-inner">
            <img className="image-sq" src="assets/images/promo_section/promo_section_01.jpg" alt=""/>
        </div>
    </div>
</div>

<div className="ui grid container">
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
                               <a className="add-wishlist modal-ui-trigger" href="" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </a>
                
                                <a className="image-sq" href="property_page.html">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src="assets/images/property/property_little_01.jpg" alt="" className=""/>
                                        </span>
                                    </span>
                                </a>
                
                                <div className="main-details">
                                   <div className="title-row">
                                       <a href="property_page.html" className="title-sq">Downtown Sweet House</a>
                                       <a href="vendor_details.html" className="avatar-sq">
                                           <img src="assets/images/avatar/avatar_01.jpg" alt=""/>
                                       </a>
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
                                   <a className="add-wishlist modal-ui-trigger" href="" data-trigger-for="wishlist">
                                       <i className="icon icon-add-wishlist"></i>
                                   </a>
                                   
                                   
                                    <a className="image-sq" href="property_page.html">
                                        <span className="image-wrapper">
                                            <span className="image-inner">
                                                <img src="assets/images/property/property_little_02.jpg" alt="" className=""/>
                                            </span>
                                        </span>
                                    </a>
                
                                    <div className="main-details">
                
                                       <div className="title-row">
                                           <a href="property_page.html" className="title-sq">Large and confortable double room</a>
                                           <a href="vendor_details.html" className="avatar-sq">
                                               <img src="assets/images/avatar/avatar_02.jpg" alt=""/>
                                           </a>
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
                               <a className="add-wishlist modal-ui-trigger" href="" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </a>
                
                                <a className="image-sq" href="property_page.html">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src="assets/images/property/property_little_03.jpg" alt="" className=""/>
                                        </span>
                                    </span>
                                </a>
                
                
                                <div className="main-details">
                
                                   <div className="title-row">
                                       <a href="property_page.html" className="title-sq">Modern studio flat with garden</a>
                                       <a href="vendor_details.html" className="avatar-sq">
                                           <img src="assets/images/avatar/avatar_03.jpg"
                                            alt=""/>
                                       </a>
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
                               <a className="add-wishlist modal-ui-trigger" href="" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </a>
                               
                                <a className="image-sq" href="property_page.html">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src="assets/images/property/property_little_04.jpg" alt="" className=""/>
                                        </span>
                                    </span>
                                </a>
                                
                
                                <div className="main-details">
                                   <div className="title-row">
                                       <a href="property_page.html" className="title-sq">Bright clean room close to Brixton</a>
                                       <a href="vendor_details.html" className="avatar-sq">
                                           <img src="assets/images/avatar/avatar_04.jpg" alt=""/>
                                       </a>
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
                               <a className="add-wishlist modal-ui-trigger" href="" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </a>
                
                                <a className="image-sq" href="property_page.html">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src="assets/images/property/property_little_05.jpg" alt="" className=""/>
                                        </span>
                                    </span>
                                </a>
                
                                <div className="main-details">
                
                                   <div className="title-row">
                                       <a href="property_page.html" className="title-sq">Romantic Suite in family home</a>
                                       <a href="vendor_details.html" className="avatar-sq">
                                           <img src="assets/images/avatar/avatar_05.jpg" alt=""/>
                                       </a>
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
                               <a className="add-wishlist modal-ui-trigger" href="" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </a>
                
                
                                <a className="image-sq" href="property_page.html">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src="assets/images/property/property_little_06.jpg" alt="" className=""/>
                                        </span>
                                    </span>
                                </a>
                
                                <div className="main-details">
                
                                   <div className="title-row">
                                       <a href="property_page.html" className="title-sq">Quit and bright room in the heart of Amsterdam</a>
                                       <a href="vendor_details.html" className="avatar-sq">
                                           <img src="assets/images/avatar/avatar_06.jpg" alt=""/>
                                       </a>
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
                
                <a href="listing_page.html" className="more-trigger" data-more="Discover All">
                   <i className="icon icon-arrow-down-122"></i>
                </a>
            </div>
        </div>
    </div>
</div>

<div className="promo-section">
   
   {/* <!-- content --> */}
    <div className="ui container grid centered">
        <div className="row">
            <div className="ui twelve wide mobile ten wide tablet eight wide computer six wide large screen six wide widescreen column">
                <div className="promo-content style-02">
                    <h2>Beautiful Experiences</h2>
                    <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                    
                    <a href="listing_page.html" className="button-sq see-through-sq"> See Map </a>
                </div>

            </div>
        </div>    
    </div>
    
    {/* <!-- picture --> */}
    <div className="image-wrapper">
        <div className="image-inner">
            <img className="image-sq" src="assets/images/promo_section/promo_section_02.jpg" alt=""/>
        </div>
    </div>
</div>

<div className="ui grid container">
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
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_category_special_01.png" alt=""/>
                
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <a href="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Wildlife</p>
                            </a>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_category_special_02.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <a href="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Adventure</p>
                            </a>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_category_special_03.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <a href="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Beaches</p>
                            </a>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_category_special_04.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <a href="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Monuments</p>
                            </a>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_category_special_05.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <a href="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Food</p>
                            </a>
                
                        </div>
                    </div>
                    
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_category_special_06.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <a href="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Party</p>
                            </a>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_category_special_07.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <a href="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">Museum</p>
                            </a>
                
                        </div>
                    </div>
                </div>
            </div>
            
            <hr/>
           
            <div className="typo-section-sq bottom-big">	
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">News</h2>
                    <p className="text-align-center-sq"> Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>
                </div>
                
                
                <div className="magic-grid article-sq hover-scale">
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <a className="image-sq" href="article.html">
                                <span className="image-wrapper">
                                    <span className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_article_01.jpg" alt=""/>
                                    </span>
                                </span>
                            </a>
                
                            {/* <!-- typography container--> */}
                            <div className="typo-sq">
                                <p className="typo-label-sq" data-label-before="Travel" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Getting Cheap Airfare For Last Minute Travel</p>
                                <p className="typo-desc-sq">The city of southern California, san diego is locally known as ‘America’s Finest City’. It’s located on San Diego Bay, an inlet of the Pacific Ocean near the Mexican border. San Diego is the second largest city in</p>
                
                                <a href="article.html" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                            </div>
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <a className="image-sq" href="article.html">
                                <span className="image-wrapper">
                                    <span className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_article_02.jpg" alt=""/>
                                    </span>
                                </span>
                            </a>
                
                            {/* <!-- typography container--> */}
                            <div className="typo-sq">
                                <p className="typo-label-sq" data-label-before="Beauty" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">10 Steps To Look Younger</p>
                                <p className="typo-desc-sq">Lots of people are unaware of the fact that adult acne exists and they seem not to know how to treat adult acne. People have this misconception that acne only happens during teenage years and gradually wears off as they age. For most people, this fact may be true but it is important to note that acne does not start during teenage years only. However, it is important to note that there are a significant number of adults that experience such condition.</p>
                
                                <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                            </div>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <a className="image-sq" href="article.html">
                                <span className="image-wrapper">
                                    <span className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_article_03.jpg" alt=""/>
                                    </span>
                                </span>
                            </a>
                
                            {/* <!-- typography container--> */}
                            <div className="typo-sq">
                                <p className="typo-label-sq" data-label-before="Cooking" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">The Benefits And Drawbacks Of Buying Designer Kitchenware Products</p>
                                <p className="typo-desc-sq">When it is time to bake cookies, we usually think that it is complicated, that it takes a lot of time. In one word : that it is not worthwhile ! We will show you hereunder that it is simply not true. Baking cookies is easy, fast and, most important, fun. Come and join all our readers who decided to give it a try and now,</p>
                
                
                                <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                            </div>
                
                        </div>
                    </div>
                
                   {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <a className="image-sq" href="article.html">
                                <span className="image-wrapper">
                                    <span className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_article_04.jpg" alt=""/>
                                    </span>
                                </span>
                            </a>
                
                            {/* <!-- typography container--> */}
                            <div className="typo-sq">
                
                                <p className="typo-label-sq" data-label-before="Advertising" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Enhance Your Brand Potential With Giant Advertising Blimps</p>
                                <p className="typo-desc-sq">It is a small world after all. Globalization is that great process that started perhaps with Mr. Marco Polo, but has since regained its prestige after a short stint of protectionism following the great depression</p>
                
                                <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                            </div>
                
                        </div>
                    </div>
                
                    {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <a className="image-sq" href="article.html">
                                <span className="image-wrapper">
                                    <span className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_article_05.jpg" alt=""/>
                                    </span>
                                </span>
                            </a>
                
                            {/* <!-- typography container--> */}
                            <div className="typo-sq">
                                <p className="typo-label-sq" data-label-before="Motivation" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Counting Your Chicken Before They Hatch</p>
                                <p className="typo-desc-sq">Be more concerned with your character than with your reputation. Your character is what you really are while your reputation is merely what others think you are.</p>
                
                                <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                            </div>
                
                        </div>
                    </div>
                
                    {/* <!-- item--> */}
                   <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <a className="image-sq" href="article.html">
                                <span className="image-wrapper">
                                    <span className="image-inner">
                                        <img className="image-sq" src="assets/images/magic_grid/magic_grid_article_06.jpg" alt=""/>
                                    </span>
                                </span>
                            </a>
                
                            {/* <!-- typography container--> */}
                            <div className="typo-sq">
                                <p className="typo-label-sq" data-label-before="Tech" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">Download Anything Now A Days</p>
                                <p className="typo-desc-sq">Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble! Downloading music to your Ipod has more than one pitfall associated with it, and this article will tell you the best way to download free song for Ipod.</p>
                
                                <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                            </div>
                
                        </div>
                    </div>
                
                </div>
                
                <a href="article_listing.html" className="more-trigger" data-more="View More">
                   <i className="icon icon-arrow-down-122"></i>
                </a>
            </div>
            
        </div>
    </div>
</div>

</div>

{/* <!-- Modals --> */}

{/* <!-- Sign Up --> */}
<div className="ui full modal" data-for="modal01">
<div className="modal-full-background">
    <img src="assets/images/modal/modal_background_001.jpg" alt=""/>
</div>

<i className="icon icon-close close-modal"></i>

<div className="header center">
    Sign Up Now
</div>

<div className="content">
    <a href="" className="button-sq fullwidth-sq modal-ui-trigger" data-trigger-for="modal03">
        <i className="icon icon-email-2"></i>
        <span>Sign Up with Email</span>
    </a>

    <a href="" className="button-sq fullwidth-sq facebook-button">
        <i className="icon icon-logo-facebook2"></i>
        <span>Sign Up with Facebook</span>
    </a>

    <a href="" className="button-sq fullwidth-sq google-button">
        <img src="assets/images/icon-google-plus.svg" alt=""/>
        <span>Sign Up with Google</span>
    </a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
</div>

<div className="actions">
    <div className="border-container">
        <div className="button-sq link-sq modal-ui-trigger" data-trigger-for="modal02">Already a member?</div>

        <div className="button-sq link-sq login-sq modal-ui-trigger" data-trigger-for="modal02">
            Log In
            <i className="icon icon-person-lock-2"></i>
        </div>
    </div>
</div>
</div>

{/* <!-- Log In --> */}
<div className="ui full modal" data-for="modal02">
<div className="modal-full-background">
    <img src="assets/images/modal/modal_background_001.jpg" alt=""/>
</div>

<i className="icon icon-close close-modal"></i>

<div className="header center">
    Log In
</div>

<div className="content">
    <div className="div-c">
        <div className="divided-column">
            <input type="text" placeholder="E-mail Adress"/>
        </div>
        <div className="divided-column">
            <input type="text" placeholder="Password"/>
        </div>
    </div>

    <div className="button-sq fullwidth-sq">Sign Up</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
</div>

<div className="actions">
    <div className="border-container">
        <div className="button-sq link-sq modal-ui-trigger" data-trigger-for="modal01">Don’t have an account?</div>

        <div className="button-sq link-sq login-sq modal-ui-trigger" data-trigger-for="modal01">
            Sign Up
            <i className="icon icon-person-add-1"></i>
        </div>
    </div>
</div>
</div>

{/* <!-- Sign Up with mail --> */}
<div className="ui full modal" data-for="modal03">
<div className="modal-full-background">
    <img src="assets/images/modal/modal_background_001.jpg" alt=""/>
</div>

<i className="icon icon-close close-modal"></i>

<div className="header center">
    Sign Up Now
</div>

<div className="content">

   <div className="div-c inline-2">
        <div className="divided-column">
           <input type="text" placeholder="First Name"/>
        </div>
        <div className="divided-column">
           <input type="text" placeholder="Last Name"/>
        </div>
    </div>

    <div className="div-c">
        <div className="divided-column">
            <input type="text" placeholder="E-mail Adress"/>
        </div>
        <div className="divided-column">
            <input type="text" placeholder="Password"/>
        </div>
    </div>

    <div className="div-c inline-3 one-label">
        <label>Birthday</label>
        <div className="divided-column">
            <select name="dropdown"  className="dropdown">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">...</option>
            </select>
        </div>
        <div className="divided-column">
            <select name="dropdown"  className="dropdown">
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">...</option>
            </select>
        </div>  
        <div className="divided-column">
            <select name="dropdown"  className="dropdown">
                <option value="1">1985</option>
                <option value="2">1986</option>
                <option value="3">1987</option>
                <option value="4">1988</option>
                <option value="5">1989</option>
                <option value="6">...</option>
            </select>
        </div>     
    </div>
    
    <div className="button-sq fullwidth-sq">Sign Up</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>  

</div>

<div className="actions">
    <div className="border-container">
        <div className="button-sq link-sq"></div>

        <div className="button-sq link-sq login-sq modal-ui-trigger" data-trigger-for="modal01">
            Log In
            <i className="icon icon-person-lock-2"></i>
        </div>
    </div>
</div>
</div>

{/* <!-- Wishlist --> */}
<div className="ui modal small" data-for="wishlist">
<i className="icon icon-close close-modal"></i>

<div className="header center">
    <h4>Wishlist</h4>
</div>

<div className="content">
    <p>Mauris malesuada leo libero, vitae tempor ante sagittis vitae. Suspendisse consectetur facilisis enim.</p>
    <br/>
    <input type="checkbox" id="c01"/>
    <label for="c01">Beautiful Places</label>
    <input type="checkbox" id="c02"/>
    <label for="c02">For Summer</label>
    <input type="checkbox" id="c03"/>
    <label for="c03">Dream Houses</label>
</div>

<div className="actions">
    <div className="div-c inline-2">
        <div className="divided-column">
            <div className="button-sq cancel-sq fullwidth-sq">Cancel</div>
        </div>

        <div className="divided-column">
            <div className="button-sq fullwidth-sq">OK</div>
        </div>
    </div>
</div>

</div>
                 

{/* <!--FOOTER--> */}
<div id="footer">

<div className="footer-top">

<div className="ui grid container">
   <div className="row">
       <div className="ui six wide tablet four wide computer column">
           <h5>Hosting</h5>
           
           <ul className="list-default-sq">
               <li><a href="">Etiam consequat</a></li>
               <li><a href="">Phasellus sed neque </a></li>
               <li><a href="">Morbi suscipit convallis</a></li>
               <li><a href="">Praesent diam</a></li>
           </ul>
           
       </div>
       <div className="ui six wide tablet four wide computer column">
           <h5>Useful Links</h5>
           
           <ul className="list-default-sq">
               <li><a href="">Aenean sit amet ipsum</a></li>
               <li><a href="">Sed mollis</a></li>
               <li><a href="">Aliquam porttitor</a></li>
               <li><a href="">Nulla vitae</a></li>
           </ul>
       </div>
       <div className="ui twelve wide tablet four wide computer column">
           <h5>Title</h5>
           
           <p><em>In hac habitasse platea dictumst. Integer quis tortor enim. Integer et elit nec magna ultricies convallis. In venenatis eu erat et facilisis. Vestibulum congue enim nisl. Fusce arcu enim, porta a auctor vel, hendrerit a libero. Vivamus vel dapibus sem.</em></p>
       </div>
   </div>
</div>


</div>

<div className="footer-bottom">
<div className="ui grid container">
   <div className="row">
       <div className="ui twelve wide mobile eight wide computer column">
           <a href="" className="footer-logo">
               <img src="assets/images/logo-mybnb-transparent.png" srcset="assets/images/logo-mybnb-transparent.png 1x, assets/images/logo-mybnb-transparent@2x.png 2x" alt="mybnb logo" />
               © SeventhQueen 2018                   </a>
       </div>
       <div className="ui twelve wide mobile four wide computer column">
           <ul className="social-links-sq list-style-inline-sq list-default-sq">
                <li><a href="" className="fb"><i className="icon icon-logo-facebook2"></i></a></li>

                <li><a href="" className="tw"><i className="icon icon-logo-twitter-bird2"></i></a></li>

                <li><a href="" className="gp"><i className="icon icon-logo-circle-google-plus-22"></i></a></li>
            </ul>
       </div>
   </div>
</div>    
</div>

</div>


</div>
    )
{/* <!--end #page-wrapper--> */}
{/* <script src="assets/library/jquery-2.2.0.min.js"></script>
<script src="assets/library/flexmenu.js"></script>
<script src="assets/library/nouislider.min.js"></script>

<script src="assets/library/wNumb.js"></script>

<script src="assets/library/jrespond.min.js"></script>
<script src="assets/library/scrollspy.min.js"></script>

<script src="assets/library/visibility.js"></script>

<script src="assets/library/accordion.js"></script>
<script src="assets/library/dropdown-custom.js"></script>
<script src="assets/library/sticky.js"></script>

<script src="assets/library/page-transition.js"></script>
<script src="assets/library/checkbox.js"></script>
<script src="assets/library/transition.js"></script>
<script src="assets/library/sidebar.js"></script>

<script src="assets/library/modal.js"></script>
<script src="assets/library/dimmer.js"></script>

<!-- Datepicker -->
<script src="assets/library/popup.js"></script>
<script src="assets/library/calendar.js"></script>

<!-- Slick -->
<script src="assets/library/slick.js"></script>

<script src="assets/library/header.js"></script>
<script src="assets/library/functions.js"></script> */}
    
}

export default HomePage
