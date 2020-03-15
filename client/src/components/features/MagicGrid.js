import React, { Component } from 'react'

import '../../assets/library/highlight.css'


export class MagiGrid extends Component {
    render() {
        return (
           
<React.Fragment>
<header class="header-section ths header-shadow equal-tablet-header-items equal-mobile-header-items header-sticky header-slide-up">
    <div class="header-content">

        <div class="ui container grid">
            <div class="header-item header-left flex-order-tablet-second flex-order-mobile-second flex-grow-tablet-true flex-grow-mobile-true">
                
<a href="" class="logo item">
	<img src="assets/images/logo-mybiz-transparent.png" srcSet="assets/images/logo-mybiz-transparent.png 1x, assets/images/logo-mybiz-transparent@2x.png 2x" alt="mybiz logo" class="logo-transparent"/>
       
    <img src="assets/images/logo-mybiz.png" srcSet="assets/images/logo-mybiz.png 1x, assets/images/logo-mybiz@2x.png 2x" alt="mybiz logo"/>
    
    <span class="item">features</span>
    
</a>




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
                   <div class="title "><a href="fts_default_grid.html" class="item">Default Grid</a></div>
                   <div class="title "><a href="fts_divided_container.html" class="item">Divided Container</a></div>
                   <div class="title active"><a href="fts_magic_grid.html" class="item">Magic Grid</a></div>
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
                                            <h2>Magic Grid</h2>
                                            
                                            <p class="definition-sq"><strong>Magic Grid</strong> is a special grid used for images or articles and have a predefined behaviour depending on the screen resolution.</p>
                                            <hr class="padded-sq"/>
                                            
                                            <h3>Default Style</h3>
                                            <br/>
                                            
                                            <p>This is the grid used to list blog categories and it is built using only CSS.</p>
                                            
                                            <p>Magic Grid is built using <strong>.item</strong> elements, each item with an <strong>.image-sq</strong> container and a text container <strong>typo-sq</strong>.</p>
                                            
<div class="magic-grid">
   {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_default_01.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
               <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Category" data-label-after="Category"></p>
                <p class="typo-title-sq">Food</p>
            </a>

        </div>
    </div>

   {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_default_02.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Category" data-label-after="Category"></p>
                <p class="typo-title-sq">Breakfast</p>
            </a>

        </div>
    </div>

   {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_default_03.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Category" data-label-after="Category"></p>
                <p class="typo-title-sq">Tea</p>
            </a>

        </div>
    </div>

   {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
					<div class="image-inner">
						<img class="image-sq" src="assets/images/magic_grid/magic_grid_default_04.jpg" alt=""/>
					</div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Category" data-label-after="Category"></p>
                <p class="typo-title-sq">Healthy Food</p>
            </a>

        </div>
    </div>

   {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                        <div class="image-inner">
                            <img class="image-sq" src="assets/images/magic_grid/magic_grid_default_05.jpg" alt=""/>
                        </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Category" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">Pie</p>
            </a>

        </div>
    </div>

   {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                        <div class="image-inner">
                            <img class="image-sq" src="assets/images/magic_grid/magic_grid_default_06.jpg" alt=""/>
                        </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Greece" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">Fruit Cocktail</p>
            </a>

        </div>
    </div>

</div>
                                                  
<pre><button class="clipboad-copy-sq button-sq link-sq">Copy</button>
<code class="html">&lt;div class=&quot;<mark class="markcode">magic-grid</mark>&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;
        &lt;div class=&quot;item-inner&quot;&gt;
            &lt;!-- image container --&gt;
            &lt;div class=&quot;image-sq&quot;&gt;
                &lt;div class=&quot;image-wrapper&quot;&gt;
                    &lt;div class=&quot;image-inner&quot;&gt;
                        &lt;img class=&quot;image-sq&quot; src=&quot;assets/images/magic_grid/magic_grid_default_01.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;!-- text container--&gt;
            &lt;a href=&quot;&quot; class=&quot;typo-sq&quot;&gt;
				&lt;span class=&quot;typo-whitespace&quot;&gt;&lt;/span&gt;
                &lt;p class=&quot;typo-label-sq&quot; data-label-before=&quot;Category&quot; data-label-after=&quot;Category&quot;&gt;&lt;/p&gt;
                &lt;p class=&quot;typo-title-sq&quot;&gt;Food&lt;/p&gt;
            &lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    
    &lt;div class=&quot;item&quot;&gt; ... &lt;/div&gt;
    ...
&lt;/div&gt;</code></pre>
                                            <br/>
                                            <h4>Hover Effect</h4>
                                            <p>Magic Grid accepts three hover effects that can be applied together or separately. (default Magic container doesn't have a hover effect):</p>
                
                                            <ul>
                                                <li>
                                                    <p><strong>.hover-default</strong> - on hover, image from .item will note scale</p>
                                                </li>
                                                <li>
                                                    <p><strong>.hover-scale</strong> - on hover, image from .item will scale</p>
                                                </li>
                                                <li>
                                                    <p><strong>.hover-center</strong> - on hover, imagine from .item will have an overlay and text will center. This option allows you to have two text options for .typo-label, a default text (data-label-before) and one that appears on hover(data-label-after).</p>
                                                </li>
                                            </ul>
                                            
<pre><button class="clipboad-copy-sq button-sq link-sq">Copy</button>
<code class="html">&lt;div class=&quot;magic-grid <mark class="markcode">hover-default</mark>&quot;&gt;
    ...
&lt;/div&gt;</code></pre>
                                            <br/>
                                            <h4>Responsive Behaviour</h4>
                                            
                                            <p>In its initial form, the grid has the (.items) elements as follows: three on a row on desktop and large-desktop resolution, two on a row on tablet resolution and one element on mobile.</p>
                                            
                                            <hr class="padded-sq"/>
                                            
                                            <h3>Photo Style</h3>
                                            <br/>
                                            
                                            <p>Adding <strong>.photo-sq</strong> class the grid, will look like this:</p>
                                            
<div class="magic-grid photo-sq hover-default hover-center">

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_photo_01.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Greece" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">Lefkada</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_photo_02.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
               <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Netherlands" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">Amsterdam</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_photo_03.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="France" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">Paris</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_photo_04.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Czech" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">Prague</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_photo_05.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Germany" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">Hamburg</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_photo_06.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Romania" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">Bucharest</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_photo_07.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="United Kingdom" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">London</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_photo_08.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-label-sq" data-label-before="Brazil" data-label-after="Book a home in"></p>
                <p class="typo-title-sq">Rio de Janeiro</p>
            </a>

        </div>
    </div>



</div>
                                       
<pre><button class="clipboad-copy-sq button-sq link-sq">Copy</button>
<code class="html">&lt;div class=&quot;magic-grid <mark class="markcode">photo-sq</mark> hover-default hover-center&quot;&gt;
    ...
&lt;/div&gt;</code></pre>        
                                            <br/>           
                                            <h4>Responsive Behaviour</h4>
                                            
                                            <img src="assets/images/magic_grid/magic_grid_photo_responsive.jpg" alt=""/>           
                                                   
                                            <hr class="padded-sq"/>
                                            
                                            <h3>Category Style</h3>
                                            <br/>
                                            <p>To achieve this style you need to add <strong>.category-sq</strong> class.</p>
                                            <p>This style is another category/articles listing representation. In its initial form, the first element represents 1/3 from the container width and the rest of the categories will have 1/3 each from the remaining space.
                                            </p>
                                            <br/>
                                        
<div class="magic-grid category-sq hover-scale hover-default">
   {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_01.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-title-sq">Special Item</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_02.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-title-sq">From Space</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_03.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-title-sq">NASA</p>
            </a>

        </div>
    </div>


    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_04.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-title-sq">On the Moon</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_05.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-title-sq">Galaxy</p>
            </a>

        </div>
    </div>
    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_06.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-title-sq">Another Earth</p>
            </a>

        </div>
    </div>

    {/* <!-- item--> */}
   <div class="item">
        <div class="item-inner">

            {/* <!-- image container --> */}
            <div class="image-sq">
                <div class="image-wrapper">
                    <div class="image-inner">
                        <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_07.jpg" alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" class="typo-sq">
                <span class="typo-whitespace"></span>
                <p class="typo-title-sq">Satellite</p>
            </a>

        </div>
    </div>

</div>
                                        
<pre><button class="clipboad-copy-sq button-sq link-sq">Copy</button>
<code class="html">&lt;div class=&quot;magic-grid <mark class="markcode">category-sq</mark> hover-scale hover-default&quot;&gt;
    ...
&lt;/div&gt;</code></pre> 
                                           <br/>
                                           
                                            <h4>Special Style</h4>
                                            <p>When applying .special class, the first element from the grid will have a bigger height than the container. Check it out in the following example:</p>

                                            <div class="magic-grid category-sq special-sq hover-scale">
                                               {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <div class="image-sq">
                                                            <div class="image-wrapper">
                                                                <div class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_special_01.png" alt=""/>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" class="typo-sq">
                                                           <span class="typo-whitespace"></span>
                                                            <p class="typo-title-sq">Wildlife</p>
                                                        </a>

                                                    </div>
                                                </div>

                                                {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <div class="image-sq">
                                                            <div class="image-wrapper">
                                                                <div class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_special_02.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" class="typo-sq">
                                                           <span class="typo-whitespace"></span>
                                                            <p class="typo-title-sq">Adventure</p>
                                                        </a>

                                                    </div>
                                                </div>

                                                {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <div class="image-sq">
                                                            <div class="image-wrapper">
                                                                <div class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_special_03.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" class="typo-sq">
                                                            <span class="typo-whitespace"></span>
                                                            <p class="typo-title-sq">Beaches</p>
                                                        </a>

                                                    </div>
                                                </div>


                                                {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <div class="image-sq">
                                                            <div class="image-wrapper">
                                                                <div class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_special_04.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" class="typo-sq">
                                                           <span class="typo-whitespace"></span>
                                                            <p class="typo-title-sq">Monuments</p>
                                                        </a>

                                                    </div>
                                                </div>

                                                {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <div class="image-sq">
                                                            <div class="image-wrapper">
                                                                <div class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_special_05.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" class="typo-sq">
                                                           <span class="typo-whitespace"></span>
                                                            <p class="typo-title-sq">Food</p>
                                                        </a>

                                                    </div>
                                                </div>
                                                {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <div class="image-sq">
                                                            <div class="image-wrapper">
                                                                <div class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_special_06.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" class="typo-sq">
                                                           <span class="typo-whitespace"></span>
                                                            <p class="typo-title-sq">Party</p>
                                                        </a>

                                                    </div>
                                                </div>

                                                {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <div class="image-sq">
                                                            <div class="image-wrapper">
                                                                <div class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_category_special_07.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" class="typo-sq">
                                                           <span class="typo-whitespace"></span>
                                                            <p class="typo-title-sq">Museum</p>
                                                        </a>

                                                    </div>
                                                </div>


                                            </div>
                                            
<pre><button class="clipboad-copy-sq button-sq link-sq">Copy</button>
<code class="html">&lt;div class=&quot;magic-grid <mark class="markcode">category-sq</mark> <mark class="markcode">special-sq</mark> hover-scale&quot;&gt;
    ...
&lt;/div&gt;</code></pre> 

                                            <h4>Responsive Behavior</h4>
                                            
                                            <img src="assets/images/magic_grid/magic_grid_category_responsive.jpg" alt=""/>
                                            
                                            <hr class="padded-sq"/>
                                            <h3>Article Style</h3>

                                            <p>By adding the <strong>.article-sq</strong> class, the grid will look like this:</p>


                                            <div class="magic-grid article-sq hover-scale">

                                               {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a class="image-sq" href="#">
                                                            <span class="image-wrapper">
                                                                <span class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_article_01.jpg" alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div class="typo-sq">
                                                           <span class="typo-whitespace"></span>
                                                            <p class="typo-label-sq" data-label-before="Travel" data-label-after="Book a home in"></p>
                                                            <p class="typo-title-sq">Getting Cheap Airfare For Last Minute Travel</p>
                                                            <p class="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" class="read-more-sq">read more <i class="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                               {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a class="image-sq" href="#">
                                                            <span class="image-wrapper">
                                                                <span class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_article_02.jpg" alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div class="typo-sq">
                                                            <span class="typo-whitespace"></span>
                                                            <p class="typo-label-sq" data-label-before="Beauty" data-label-after="Book a home in"></p>
                                                            <p class="typo-title-sq">10 Steps To Look Younger</p>
                                                            <p class="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" class="read-more-sq">read more <i class="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                               {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a class="image-sq" href="#">
                                                            <span class="image-wrapper">
                                                                <span class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_article_03.jpg" alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div class="typo-sq">
                                                            <span class="typo-whitespace"></span>
                                                            <p class="typo-label-sq" data-label-before="Cooking" data-label-after="Book a home in"></p>
                                                            <p class="typo-title-sq">The Benefits And Drawbacks Of Buying Designer Kitchenware Products</p>
                                                            <p class="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>


                                                            <a href="" class="read-more-sq">read more <i class="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                               {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a class="image-sq" href="#">
                                                            <span class="image-wrapper">
                                                                <span class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_article_04.jpg" alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div class="typo-sq">
                                                            <span class="typo-whitespace"></span>

                                                            <p class="typo-label-sq" data-label-before="Advertising" data-label-after="Book a home in"></p>
                                                            <p class="typo-title-sq">Enhance Your Brand Potential With Giant Advertising Blimps</p>
                                                            <p class="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" class="read-more-sq">read more <i class="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                                {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a class="image-sq" href="#">
                                                            <span class="image-wrapper">
                                                                <span class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_article_05.jpg" alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div class="typo-sq">
                                                            <span class="typo-whitespace"></span>
                                                            <p class="typo-label-sq" data-label-before="Motivation" data-label-after="Book a home in"></p>
                                                            <p class="typo-title-sq">Counting Your Chicken Before They Hatch</p>
                                                            <p class="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" class="read-more-sq">read more <i class="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                                {/* <!-- item--> */}
                                               <div class="item">
                                                    <div class="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a class="image-sq" href="#">
                                                            <span class="image-wrapper">
                                                                <span class="image-inner">
                                                                    <img class="image-sq" src="assets/images/magic_grid/magic_grid_article_06.jpg" alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div class="typo-sq">
                                                            <span class="typo-whitespace"></span>
                                                            <p class="typo-label-sq" data-label-before="Architecture" data-label-after="Book a home in"></p>
                                                            <p class="typo-title-sq">Tesla to Build Three More Gigafactories</p>
                                                            <p class="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" class="read-more-sq">read more <i class="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            
                                            
<pre><button class="clipboad-copy-sq button-sq link-sq">Copy</button>
<code class="html">&lt;div class=&quot;magic-grid <mark class="markcode">article-sq</mark> hover-scale&quot;&gt;
    &lt;div class=&quot;item&quot;&gt;
        &lt;div class=&quot;item-inner&quot;&gt;
            &lt;!-- image container --&gt;
            &lt;a class=&quot;image-sq&quot; href=&quot;#&quot;&gt;
                &lt;span class=&quot;image-wrapper&quot;&gt;
                    &lt;span class=&quot;image-inner&quot;&gt;
                        &lt;img class=&quot;image-sq&quot; src=&quot;assets/images/magic_grid/magic_grid_article_01.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/span&gt;
                &lt;/span&gt;
            &lt;/a&gt;
            &lt;!-- typography container--&gt;
            &lt;div class=&quot;typo-sq&quot;&gt;
			    &lt;span class=&quot;typo-whitespace&quot;&gt;&lt;/span&gt;
                &lt;p class=&quot;typo-label-sq&quot; data-label-before=&quot;Travel&quot; data-label-after=&quot;Book a home in&quot;&gt;&lt;/p&gt;
                &lt;p class=&quot;typo-title-sq&quot;&gt;Getting Cheap Airfare For Last Minute Travel&lt;/p&gt;
                &lt;p class=&quot;typo-desc-sq&quot;&gt;Nunc sit amet velit nibh...&lt;/p&gt;
                &lt;a href=&quot;&quot; class=&quot;read-more-sq&quot;&gt;read more &lt;i class=&quot;icon icon-arrow-right-122&quot;&gt;&lt;/i&gt;&lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;item&quot;&gt; ... &lt;/div&gt;
    ....
&lt;/div&gt;</code></pre>
                                            
                                            <br/>
                                            <h4>Responsive Behavior</h4>                                         
                                            <img src="assets/images/magic_grid/magic_grid_article_responsive.jpg" alt=""/>                                          
                                            
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

   </React.Fragment> 
       
        )
    }
}

export default MagiGrid
