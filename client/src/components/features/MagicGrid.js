import React, { Component } from 'react'
import Sidebar from './assets/elements/Sidebar'
import Header from './assets/elements/header/Header'


import '../../assets/library/highlight.css'



//images
import magic_grid_default_01 from './assets/images/magic_grid/magic_grid_default_01.jpg';
import magic_grid_default_02 from './assets/images/magic_grid/magic_grid_default_02.jpg';
import magic_grid_default_03 from './assets/images/magic_grid/magic_grid_default_03.jpg';
import magic_grid_default_04 from './assets/images/magic_grid/magic_grid_default_04.jpg';
import magic_grid_default_05 from './assets/images/magic_grid/magic_grid_default_05.jpg';
import magic_grid_default_06 from './assets/images/magic_grid/magic_grid_default_06.jpg';

//magic_grid_photo
import magic_grid_photo_01 from './assets/images/magic_grid/magic_grid_photo_01.jpg';
import magic_grid_photo_02 from './assets/images/magic_grid/magic_grid_photo_02.jpg';
import magic_grid_photo_03 from './assets/images/magic_grid/magic_grid_photo_03.jpg';
import magic_grid_photo_04 from './assets/images/magic_grid/magic_grid_photo_04.jpg';
import magic_grid_photo_05 from './assets/images/magic_grid/magic_grid_photo_05.jpg';
import magic_grid_photo_06 from './assets/images/magic_grid/magic_grid_photo_06.jpg';
import magic_grid_photo_07 from './assets/images/magic_grid/magic_grid_photo_07.jpg';
import magic_grid_photo_08 from './assets/images/magic_grid/magic_grid_photo_08.jpg';
 //responsive
 import magic_grid_photo_responsive from './assets/images/magic_grid/magic_grid_photo_responsive.jpg';
  
 //category
 import magic_grid_category_01 from './assets/images/magic_grid/magic_grid_category_01.jpg';
 import magic_grid_category_02 from './assets/images/magic_grid/magic_grid_category_02.jpg';
 import magic_grid_category_03 from './assets/images/magic_grid/magic_grid_category_03.jpg';
 import magic_grid_category_04 from './assets/images/magic_grid/magic_grid_category_04.jpg';
 import magic_grid_category_05 from './assets/images/magic_grid/magic_grid_category_05.jpg';
 import magic_grid_category_06 from './assets/images/magic_grid/magic_grid_category_06.jpg';
 import magic_grid_category_07 from './assets/images/magic_grid/magic_grid_category_07.jpg';

//category_special
import magic_grid_category_special_01 from './assets/images/magic_grid/magic_grid_category_special_01.png';
import magic_grid_category_special_02 from './assets/images/magic_grid/magic_grid_category_special_02.jpg';
import magic_grid_category_special_03 from './assets/images/magic_grid/magic_grid_category_special_03.jpg';
import magic_grid_category_special_04 from './assets/images/magic_grid/magic_grid_category_special_04.jpg';
import magic_grid_category_special_05 from './assets/images/magic_grid/magic_grid_category_special_05.jpg';
import magic_grid_category_special_06 from './assets/images/magic_grid/magic_grid_category_special_06.jpg';
import magic_grid_category_special_07 from './assets/images/magic_grid/magic_grid_category_special_07.jpg';

//article
import magic_grid_article_01 from './assets/images/magic_grid/magic_grid_article_01.jpg';
import magic_grid_article_02 from './assets/images/magic_grid/magic_grid_article_02.jpg';
import magic_grid_article_03 from './assets/images/magic_grid/magic_grid_article_03.jpg';
import magic_grid_article_04 from './assets/images/magic_grid/magic_grid_article_04.jpg';
import magic_grid_article_05 from './assets/images/magic_grid/magic_grid_article_05.jpg';
import magic_grid_article_06 from './assets/images/magic_grid/magic_grid_article_06.jpg';
import magic_grid_article_07 from './assets/images/magic_grid/magic_grid_article_07.jpg';


 class MagiGrid extends Component {
    render() {
        return (
           
<React.Fragment>
<header className="header-section ths header-shadow equal-tablet-header-items equal-mobile-header-items header-sticky header-slide-up">
    <div className="header-content">

        <div className="ui container grid">
         <Header/>
        </div>
        
    </div>    
</header>
 
   <div className="ui layout">
       
        {/* <!-- grid --> */}
        <div className="ui grid container">
           
            <div className="row">
               
              {/* sidebar component */}
              <Sidebar/>
               <div className="ui twelve wide tablet nine wide computer nine wide widescreen nine wide large screen column">
                   <div className="ui grid">
                       <div className="row">
                         
                           <div className="ui twelve wide computer grey column">
                              <div className="ui grid">
                                  <div className="row">
                                   
                                    <div className="ui twelve wide computer column">
                                        <div className="typo-section-sq top-default bottom-default">
                                            <h2>Magic Grid</h2>
                                            
                                            <p className="definition-sq"><strong>Magic Grid</strong> is a special grid used for images or articles and have a predefined behaviour depending on the screen resolution.</p>
                                            <hr className="padded-sq"/>
                                            
                                            <h3>Default Style</h3>
                                            <br/>
                                            
                                            <p>This is the grid used to list blog categories and it is built using only CSS.</p>
                                            
                                            <p>Magic Grid is built using <strong>.item</strong> elements, each item with an <strong>.image-sq</strong> container and a text container <strong>typo-sq</strong>.</p>
                                            
<div className="magic-grid">
   {/* <!-- item--> */}
   <div className="item">
        <div className="item-inner">

            {/* <!-- image container --> */}
            <div className="image-sq">
                <div className="image-wrapper">
                    <div className="image-inner">
                        <img className="image-sq" src= {magic_grid_default_01} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
               <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Category" data-label-after="Category"></p>
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
                        <img className="image-sq" src={magic_grid_default_02} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Category" data-label-after="Category"></p>
                <p className="typo-title-sq">Breakfast</p>
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
                        <img className="image-sq" src={magic_grid_default_03} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Category" data-label-after="Category"></p>
                <p className="typo-title-sq">Tea</p>
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
						<img className="image-sq" src={magic_grid_default_04} alt=""/>
					</div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Category" data-label-after="Category"></p>
                <p className="typo-title-sq">Healthy Food</p>
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
                            <img className="image-sq" src={magic_grid_default_05} alt=""/>
                        </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Category" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Pie</p>
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
                            <img className="image-sq" src={magic_grid_default_06} alt=""/>
                        </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Greece" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Fruit Cocktail</p>
            </a>

        </div>
    </div>

</div>
                                                  
<pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
<code className="html">&lt;div className=&quot;<mark className="markcode">magic-grid</mark>&quot;&gt;
    &lt;div className=&quot;item&quot;&gt;
        &lt;div className=&quot;item-inner&quot;&gt;
            &lt;!-- image container --&gt;
            &lt;div className=&quot;image-sq&quot;&gt;
                &lt;div className=&quot;image-wrapper&quot;&gt;
                    &lt;div className=&quot;image-inner&quot;&gt;
                        &lt;img className=&quot;image-sq&quot; src=&quot;assets/images/magic_grid/magic_grid_default_01.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;!-- text container--&gt;
            &lt;a href=&quot;&quot; className=&quot;typo-sq&quot;&gt;
				&lt;span className=&quot;typo-whitespace&quot;&gt;&lt;/span&gt;
                &lt;p className=&quot;typo-label-sq&quot; data-label-before=&quot;Category&quot; data-label-after=&quot;Category&quot;&gt;&lt;/p&gt;
                &lt;p className=&quot;typo-title-sq&quot;&gt;Food&lt;/p&gt;
            &lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    
    &lt;div className=&quot;item&quot;&gt; ... &lt;/div&gt;
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
                                            
<pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
<code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">hover-default</mark>&quot;&gt;
    ...
&lt;/div&gt;</code></pre>
                                            <br/>
                                            <h4>Responsive Behaviour</h4>
                                            
                                            <p>In its initial form, the grid has the (.items) elements as follows: three on a row on desktop and large-desktop resolution, two on a row on tablet resolution and one element on mobile.</p>
                                            
                                            <hr className="padded-sq"/>
                                            
                                            <h3>Photo Style</h3>
                                            <br/>
                                            
                                            <p>Adding <strong>.photo-sq</strong> className the grid, will look like this:</p>
                                            
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
            <a href="" className="typo-sq">
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
                        <img className="image-sq" src={magic_grid_photo_02} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
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
                        <img className="image-sq" src={magic_grid_photo_03} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
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
                        <img className="image-sq" src={magic_grid_photo_04} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Czech" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Prague</p>
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
                        <img className="image-sq" src={magic_grid_photo_05} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Germany" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Hamburg</p>
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
                        <img className="image-sq" src={magic_grid_photo_06} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Romania" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Bucharest</p>
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
                        <img className="image-sq" src={magic_grid_photo_07} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="United Kingdom" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">London</p>
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
                        <img className="image-sq" src={magic_grid_photo_08} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Brazil" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Rio de Janeiro</p>
            </a>

        </div>
    </div>



</div>
                                       
<pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
<code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">photo-sq</mark> hover-default hover-center&quot;&gt;
    ...
&lt;/div&gt;</code></pre>        
                                            <br/>           
                                            <h4>Responsive Behaviour</h4>
                                            
                                            <img src={magic_grid_photo_responsive} alt=""/>           
                                                   
                                            <hr className="padded-sq"/>
                                            
                                            <h3>Category Style</h3>
                                            <br/>
                                            <p>To achieve this style you need to add <strong>.category-sq</strong> className.</p>
                                            <p>This style is another category/articles listing representation. In its initial form, the first element represents 1/3 from the container width and the rest of the categories will have 1/3 each from the remaining space.
                                            </p>
                                            <br/>
                                        
<div className="magic-grid category-sq hover-scale hover-default">
   {/* <!-- item--> */}
   <div className="item">
        <div className="item-inner">

            {/* <!-- image container --> */}
            <div className="image-sq">
                <div className="image-wrapper">
                    <div className="image-inner">
                        <img className="image-sq" src={magic_grid_category_01} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-title-sq">Special Item</p>
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
                        <img className="image-sq" src={magic_grid_category_02} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-title-sq">From Space</p>
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
                        <img className="image-sq" src={magic_grid_category_03} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-title-sq">NASA</p>
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
                        <img className="image-sq" src={magic_grid_category_04} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-title-sq">On the Moon</p>
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
                        <img className="image-sq" src={magic_grid_category_05} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-title-sq">Galaxy</p>
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
                        <img className="image-sq" src={magic_grid_category_06} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-title-sq">Another Earth</p>
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
                        <img className="image-sq" src={magic_grid_category_07} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <a href="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-title-sq">Satellite</p>
            </a>

        </div>
    </div>

</div>
                                        
<pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
<code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">category-sq</mark> hover-scale hover-default&quot;&gt;
    ...
&lt;/div&gt;</code></pre> 
                                           <br/>
                                           
                                            <h4>Special Style</h4>
                                            <p>When applying .special className, the first element from the grid will have a bigger height than the container. Check it out in the following example:</p>

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
                                                        <a href="" className="typo-sq">
                                                           <span className="typo-whitespace"></span>
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
                                                                    <img className="image-sq" src={magic_grid_category_special_02} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" className="typo-sq">
                                                           <span className="typo-whitespace"></span>
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
                                                                    <img className="image-sq" src={magic_grid_category_special_03} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" className="typo-sq">
                                                            <span className="typo-whitespace"></span>
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
                                                                    <img className="image-sq" src={magic_grid_category_special_04} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" className="typo-sq">
                                                           <span className="typo-whitespace"></span>
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
                                                                    <img className="image-sq" src={magic_grid_category_special_05} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" className="typo-sq">
                                                           <span className="typo-whitespace"></span>
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
                                                                    <img className="image-sq" src={magic_grid_category_special_06} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" className="typo-sq">
                                                           <span className="typo-whitespace"></span>
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
                                                                    <img className="image-sq" src={magic_grid_category_special_07} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- typography container--> */}
                                                        <a href="" className="typo-sq">
                                                           <span className="typo-whitespace"></span>
                                                            <p className="typo-title-sq">Museum</p>
                                                        </a>

                                                    </div>
                                                </div>


                                            </div>
                                            
<pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
<code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">category-sq</mark> <mark className="markcode">special-sq</mark> hover-scale&quot;&gt;
    ...
&lt;/div&gt;</code></pre> 

                                            <h4>Responsive Behavior</h4>
                                            
                                            <img src={magic_grid_photo_responsive} alt=""/>
                                            
                                            <hr className="padded-sq"/>
                                            <h3>Article Style</h3>

                                            <p>By adding the <strong>.article-sq</strong> className, the grid will look like this:</p>


                                            <div className="magic-grid article-sq hover-scale">

                                               {/* <!-- item--> */}
                                               <div className="item">
                                                    <div className="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a className="image-sq" href="#">
                                                            <span className="image-wrapper">
                                                                <span className="image-inner">
                                                                    <img className="image-sq" src={magic_grid_article_01} alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div className="typo-sq">
                                                           <span className="typo-whitespace"></span>
                                                            <p className="typo-label-sq" data-label-before="Travel" data-label-after="Book a home in"></p>
                                                            <p className="typo-title-sq">Getting Cheap Airfare For Last Minute Travel</p>
                                                            <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                               {/* <!-- item--> */}
                                               <div className="item">
                                                    <div className="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a className="image-sq" href="#">
                                                            <span className="image-wrapper">
                                                                <span className="image-inner">
                                                                    <img className="image-sq" src={magic_grid_article_02} alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div className="typo-sq">
                                                            <span className="typo-whitespace"></span>
                                                            <p className="typo-label-sq" data-label-before="Beauty" data-label-after="Book a home in"></p>
                                                            <p className="typo-title-sq">10 Steps To Look Younger</p>
                                                            <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                               {/* <!-- item--> */}
                                               <div className="item">
                                                    <div className="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a className="image-sq" href="#">
                                                            <span className="image-wrapper">
                                                                <span className="image-inner">
                                                                    <img className="image-sq" src={magic_grid_article_03} alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div className="typo-sq">
                                                            <span className="typo-whitespace"></span>
                                                            <p className="typo-label-sq" data-label-before="Cooking" data-label-after="Book a home in"></p>
                                                            <p className="typo-title-sq">The Benefits And Drawbacks Of Buying Designer Kitchenware Products</p>
                                                            <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>


                                                            <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                               {/* <!-- item--> */}
                                               <div className="item">
                                                    <div className="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a className="image-sq" href="#">
                                                            <span className="image-wrapper">
                                                                <span className="image-inner">
                                                                    <img className="image-sq" src={magic_grid_article_04} alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div className="typo-sq">
                                                            <span className="typo-whitespace"></span>

                                                            <p className="typo-label-sq" data-label-before="Advertising" data-label-after="Book a home in"></p>
                                                            <p className="typo-title-sq">Enhance Your Brand Potential With Giant Advertising Blimps</p>
                                                            <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                                {/* <!-- item--> */}
                                               <div className="item">
                                                    <div className="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a className="image-sq" href="#">
                                                            <span className="image-wrapper">
                                                                <span className="image-inner">
                                                                    <img className="image-sq" src={magic_grid_article_05} alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div className="typo-sq">
                                                            <span className="typo-whitespace"></span>
                                                            <p className="typo-label-sq" data-label-before="Motivation" data-label-after="Book a home in"></p>
                                                            <p className="typo-title-sq">Counting Your Chicken Before They Hatch</p>
                                                            <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                                {/* <!-- item--> */}
                                               <div className="item">
                                                    <div className="item-inner">

                                                        {/* <!-- image container --> */}
                                                        <a className="image-sq" href="#">
                                                            <span className="image-wrapper">
                                                                <span className="image-inner">
                                                                    <img className="image-sq" src={magic_grid_article_06} alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!-- typography container--> */}
                                                        <div className="typo-sq">
                                                            <span className="typo-whitespace"></span>
                                                            <p className="typo-label-sq" data-label-before="Architecture" data-label-after="Book a home in"></p>
                                                            <p className="typo-title-sq">Tesla to Build Three More Gigafactories</p>
                                                            <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                                                            <a href="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></a>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            
                                            
<pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
<code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">article-sq</mark> hover-scale&quot;&gt;
    &lt;div className=&quot;item&quot;&gt;
        &lt;div className=&quot;item-inner&quot;&gt;
            &lt;!-- image container --&gt;
            &lt;a className=&quot;image-sq&quot; href=&quot;#&quot;&gt;
                &lt;span className=&quot;image-wrapper&quot;&gt;
                    &lt;span className=&quot;image-inner&quot;&gt;
                        &lt;img className=&quot;image-sq&quot; src=&quot;assets/images/magic_grid/magic_grid_article_01.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/span&gt;
                &lt;/span&gt;
            &lt;/a&gt;
            &lt;!-- typography container--&gt;
            &lt;div className=&quot;typo-sq&quot;&gt;
			    &lt;span className=&quot;typo-whitespace&quot;&gt;&lt;/span&gt;
                &lt;p className=&quot;typo-label-sq&quot; data-label-before=&quot;Travel&quot; data-label-after=&quot;Book a home in&quot;&gt;&lt;/p&gt;
                &lt;p className=&quot;typo-title-sq&quot;&gt;Getting Cheap Airfare For Last Minute Travel&lt;/p&gt;
                &lt;p className=&quot;typo-desc-sq&quot;&gt;Nunc sit amet velit nibh...&lt;/p&gt;
                &lt;a href=&quot;&quot; className=&quot;read-more-sq&quot;&gt;read more &lt;i className=&quot;icon icon-arrow-right-122&quot;&gt;&lt;/i&gt;&lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;item&quot;&gt; ... &lt;/div&gt;
    ....
&lt;/div&gt;</code></pre>
                                            
                                            <br/>
                                            <h4>Responsive Behavior</h4>                                         
                                            <img src="assets/images/magic_grid/magic_grid_article_responsive.jpg" alt=""/>                                          
                                            
                                            <hr className="padded-sq"/>
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
