import React from 'react'
import { Link } from "react-router-dom";


import logo_mybnb_transparent from '../../assets/images/logo-mybnb-transparent.png';
import logo_mybnb_transparent2x from '../../assets/images/logo-mybnb-transparent@2x.png';
import logo_mybnb from '../../assets/images/logo-mybnb.png';
import logo_mybnb2x from '../../assets/images/logo-mybnb@2x.png';

function DefaultGrid() {
    return (
        <div id="page-wrapper">
             {/* <!-- for background color & freeze on sidemenu visible --> */}

{/* <!--DEFAULT HEADER--> */}

<header class="header-section ths header-shadow equal-tablet-header-items equal-mobile-header-items header-sticky header-slide-up">
<div class="header-content">

<div class="ui container grid">
    <div class="header-item header-left flex-order-tablet-second flex-order-mobile-second flex-grow-tablet-true flex-grow-mobile-true">
        
<Link to="" class="logo item">
<img src={logo_mybnb_transparent} srcSet={`${logo_mybnb_transparent} 1x ,${logo_mybnb_transparent2x} 2x `} alt="mybnb logo" className="logo-transparent"/>
<img src={logo_mybnb} srcSet= {`${logo_mybnb} 1x , ${logo_mybnb2x} 2x`} alt="mybnb logo"/>
<span class="item">features</span>

</Link>




    </div>

    <div class="header-item header-center flex-align-left flex-order-tablet-first flex-order-mobile-first flex-grow-large-desktop-true flex-grow-desktop-true flex-grow-tablet-false flex-grow-mobile-false"></div>
    
       <div class="header-item header-right flex-order-tablet-third flex-order-mobile-third flex-shrink-true flex-align-right">
        
         {/* <!-- Sidemenu Trigger --> */}
        <a class="sidemenu-trigger close-sq hamburger hamburger-spin item hidden-desktop hidden-large-desktop" data-trigger-for="menu01">
           
            {/* <!--<i class="icon icon-navigation-show-more-22"></i>--> */}
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
        </a>
      
        {/* <!-- Include Menu --> */}
        {/* <!-- Header Menu--> */}
        
<div class="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">

<ul class="main-menu">
    
    <li><a href="https://seventhqueen.com/themes/mybiz-html/mybnb" class="item">
            <span>myBnb</span>
        </a>
    </li>
    <li><a href="https://seventhqueen.com/themes/mybiz-html/myboat/homepage.html" class="item">
            <span>myBoat</span>
        </a>
    </li>
    <li><a href="https://seventhqueen.com/themes/mybiz-html/mycar/homepage.html" class="item">
            <span>myCar</span>
        </a>
    </li>
    <li><a href="https://seventhqueen.com/themes/mybiz-html/myhotel/homepage.html" class="item">
            <span>myHotel</span>
        </a>
    </li>
    <li><a href="https://seventhqueen.com/themes/mybiz-html/mytent/homepage.html" class="item">
            <span>myTent</span>
        </a>
    </li>
    
</ul>
</div>

{/* <!-- End of Header Menu--> */}
        
    </div>
</div>

</div>    
</header>

<div class="ui layout">

{/* <!-- grid --> */}
<div class="ui grid container">
   
    <div class="row">
       
       <div class="ui twelve wide tablet three wide computer three wide widescreen three wide large screen column">
           
            <div class="sticky-element sticky-desktop sticky-large-desktop under-ths">
               
                <div class="dashboard-sticky">
                    <div class="dashboard-sticky-inner">
                        <div class="dashboard-menu has-submenu">
                            <a href="#" class="item">
                                <i class="icon icon-side-sticky-menu"></i>
                            </a>
                            <ul class="submenu">
<li>
<div class="ui accordion ">

   <div class="title accordion-trigger ">
       <a class="">Getting started</a>
   </div>
   <div class="content ">
       <div class="accordion">
           <div class="title"><a href="fts_getting_started.html#getting-started" class="item">General Info</a></div>
           <div class="title"><a href="fts_getting_started.html#installation" class="item">Installation</a></div>
           <div class="title"><a href="fts_getting_started.html#whats-included" class="item">What's Included</a></div>
           <div class="title"><a href="fts_getting_started.html#html" class="item">HTML Structure</a></div>
           <div class="title"><a href="fts_getting_started.html#less" class="item">Compiling LESS</a></div>
           <div class="title"><a href="fts_getting_started.html#fonts" class="item">Changing Fonts</a></div>
           <div class="title"><a href="fts_getting_started.html#vector-icons" class="item">Vector Icons</a></div>
           <div class="title"><a href="fts_getting_started.html#optimization" class="item">Site Optimization</a></div>
       </div>
   </div>

    <div class="title accordion-trigger active">
        <a class="">Layout</a>
    </div>
    <div class="content active">
       <div class="accordion">
           <div class="title active"><a href="fts_default_grid.html" class="item">Default Grid</a></div>
           <div class="title "><a href="fts_divided_container.html" class="item">Divided Container</a></div>
           <div class="title "><a href="fts_magic_grid.html" class="item">Magic Grid</a></div>
       </div>
    </div>


    <div class="title accordion-trigger ">
        <a class="">Components</a>
    </div>
    <div class="content ">
       <div class="accordion">
            <div class="title "><a href="fts_header.html" class="item">Header</a></div>
            <div class="content"></div>

            <div class="title accordion-trigger "><a class="item">Menus</a></div>
            <div class="content ">
               <div class="accordion">
                   <div class="title "><a href="fts_menu.html" class="item">Menu Default</a></div>
                   <div class="title "><a href="fts_dashboard_menu.html" class="item">Dashboard Menu</a></div>
               </div>
            </div>
            
           <div class="title "><a href="fts_logo.html" class="item">Logo</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_buttons.html" class="item">Buttons</a></div>
           <div class="content"></div>
           
           <div class="title "><a href="fts_icons.html" class="item">Icons</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_form_elements.html" class="item">Form Elements</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_floating_placeholder.html" class="item">Floating Placeholder</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_sticky_element.html" class="item">Sticky Element</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_property_items.html" class="item">Property Items</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_articles.html" class="item">Articles</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_promo_section.html" class="item">Promo Section</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_modals.html" class="item">Modals</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_accordion.html" class="item">Accordion</a></div>
           <div class="content"></div>


           <div class="title accordion-trigger "><a class="item">Hero Search</a></div>
           <div class="content ">
               <div class="accordion">
                   <div class="title "><a href="fts_hero_search_horizontal.html" class="item">Hero Seach Horizontal</a></div>
                   <div class="title "><a href="fts_hero_search_vertical.html" class="item">Hero Seach Vertical</a></div>
               </div>

            </div>

           <div class="title accordion-trigger "><a class="item">Carousel</a></div>
           <div class="content ">
               <div class="accordion">
                   <div class="title "><a href="fts_slick_carousel.html" class="item">Slick Carousel</a></div>
                   <div class="title "><a href="fts_slick_hero_big.html" class="item">Slick Hero Big</a></div>
                   <div class="title "><a href="fts_slick_full_page_search.html" class="item">Slick Full Page Search</a></div>
               </div>

            </div>

           <div class="title "><a href="fts_charts.html" class="item">Charts</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_progressbar.html" class="item">Progressbar</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_hamburger_icon.html" class="item">Hamburger Icon</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_calendar.html" class="item">Calendar</a></div>
           <div class="content"></div>

           <div class="title "><a href="fts_price_range_slider.html" class="item">Price Range Slider</a></div>
           <div class="content"></div>

       </div>

    </div>

    <div class="title accordion-trigger ">
        <a class="">Content</a>
    </div>
    <div class="content ">
       <div class="accordion">
           <div class="title "><a href="fts_typography.html" class="item">Typography</a></div>
           <div class="title "><a href="fts_code.html" class="item">Code</a></div>
           <div class="title "><a href="fts_image.html" class="item">Image</a></div>
           <div class="title "><a href="fts_image_gallery.html" class="item">Image Gallery</a></div>
           <div class="title "><a href="fts_table.html" class="item">Table</a></div>
       </div>
    </div>
</div>
</li>
</ul>                                </div>
                    </div>
                </div>
            </div>
            
       </div>
       
       <div class="ui twelve wide tablet nine wide computer nine wide widescreen nine wide large screen column">
           <div class="ui grid">
               <div class="row">
                 
                   <div class="ui twelve wide computer grey column">
                      <div class="ui grid">
                          <div class="row">
                           
                            <div class="ui twelve wide computer column">
                                <div class="typo-section-sq top-default bottom-default">
                                    <h2>Default Grid</h2>
                                    
                                    <p class="definition-sq"><strong>Default Grid</strong> is actually the grid from <a href="https://semantic-ui.com/collections/grid.html" target="_blank">semantic UI</a>.</p>
                                    <br/>
                                    <p>You can see here all the details on how to use the semantic UI grid by <a href="https://semantic-ui.com/collections/grid.html" target="_blank">clicking here</a>.</p>
                                    <hr class="padded-sq"/>
                                </div>
                            </div>
                                           
                            
                          </div>
                      </div>
                   </div>
            </div>
           </div>
       </div>
       
       
    </div>
</div>
</div>    
</div>
 )
{/* <!--end #page-wrapper--> */}
   
}

export default DefaultGrid
