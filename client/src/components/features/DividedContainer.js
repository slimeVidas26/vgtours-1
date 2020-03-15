import React, { Component } from "react";
import { Link } from "react-router-dom";


// import '../../assets/less/base.css'
// import '../../assets/less/header.css'
// import '../../assets/less/theme.css'
//  import '../../assets/icon/style.css'
import '../../assets/library/highlight.css'



import logo_mybnb_transparent from '../../assets/images/logo-mybnb-transparent.png';
import logo_mybnb_transparent2x from '../../assets/images/logo-mybnb-transparent@2x.png';
import logo_mybnb from '../../assets/images/logo-mybnb.png';
import logo_mybnb2x from '../../assets/images/logo-mybnb@2x.png';

class DividedContainer extends Component {

   

    componentDidMount() {
        document.getElementsByTagName('body')[0].className = 'no-transition dashboard-sq';

        // const script = document.createElement("script");
        // script.async = true;
        // script.src = "https://some-scripturl.js";
        // this.div.appendChild(script);
    }
    
    // componentWillUnmount() {
    //     document.getElementsByTagName('body')[0].className = '';
    // }

    render(){

       
        return (
          <React.Fragment>
               
                {/* <!-- for background color & freeze on sidemenu visible --> */}
    
    {/* <!--DEFAULT HEADER--> */}
    
    <header className="header-section ths header-shadow equal-tablet-header-items equal-mobile-header-items header-sticky header-slide-up">
    <div className="header-content">
    
    <div className="ui container grid">
        <div className="header-item header-left flex-order-tablet-second flex-order-mobile-second flex-grow-tablet-true flex-grow-mobile-true">
            
        <Link to="" className="logo item">
    <img src={logo_mybnb_transparent} srcSet={`${logo_mybnb_transparent} 1x ,${logo_mybnb_transparent2x} 2x `} alt="mybnb logo" className="logo-transparent"/>
    <img src={logo_mybnb} srcSet= {`${logo_mybnb} 1x , ${logo_mybnb2x} 2x`} alt="mybnb logo"/>
    <span className="item">features</span>
    
    </Link>
    
    
    
    
        </div>
    
        <div className="header-item header-center flex-align-left flex-order-tablet-first flex-order-mobile-first flex-grow-large-desktop-true flex-grow-desktop-true flex-grow-tablet-false flex-grow-mobile-false"></div>
        
           <div className="header-item header-right flex-order-tablet-third flex-order-mobile-third flex-shrink-true flex-align-right">
            
             {/* <!-- Sidemenu Trigger --> */}
            <a className="sidemenu-trigger close-sq hamburger hamburger-spin item hidden-desktop hidden-large-desktop" data-trigger-for="menu01">
               
                {/* <!--<i className="icon icon-navigation-show-more-22"></i>--> */}
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
            </a>
          
            {/* <!-- Include Menu --> */}
            {/* <!-- Header Menu--> */}
            
    <div className="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">
    
    <ul className="main-menu">
        
        <li><a href="https://seventhqueen.com/themes/mybiz-html/mybnb" className="item">
                <span>myBnb</span>
            </a>
        </li>
        <li><a href="https://seventhqueen.com/themes/mybiz-html/myboat/homepage.html" className="item">
                <span>myBoat</span>
            </a>
        </li>
        <li><a href="https://seventhqueen.com/themes/mybiz-html/mycar/homepage.html" className="item">
                <span>myCar</span>
            </a>
        </li>
        <li><a href="https://seventhqueen.com/themes/mybiz-html/myhotel/homepage.html" className="item">
                <span>myHotel</span>
            </a>
        </li>
        <li><a href="https://seventhqueen.com/themes/mybiz-html/mytent/homepage.html" className="item">
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
    
    
    <div className="ui layout">
    
    {/* <!-- grid --> */}
    <div className="ui grid container">
       
        <div className="row">
           
           <div className="ui twelve wide tablet three wide computer three wide widescreen three wide large screen column">
               
                <div className="sticky-element sticky-desktop sticky-large-desktop under-ths">
                   
                    <div className="dashboard-sticky">
                        <div className="dashboard-sticky-inner">
                            <div className="dashboard-menu has-submenu">
                                <a href="#" className="item">
                                    <i className="icon icon-side-sticky-menu"></i>
                                </a>
                                <ul className="submenu">
    <li>
    <div className="ui accordion ">
    
       <div className="title accordion-trigger ">
           <a className="">Getting started</a>
       </div>
       <div className="content ">
           <div className="accordion">
               <div className="title"><a href="fts_getting_started.html#getting-started" className="item">General Info</a></div>
               <div className="title"><a href="fts_getting_started.html#installation" className="item">Installation</a></div>
               <div className="title"><a href="fts_getting_started.html#whats-included" className="item">What's Included</a></div>
               <div className="title"><a href="fts_getting_started.html#html" className="item">HTML Structure</a></div>
               <div className="title"><a href="fts_getting_started.html#less" className="item">Compiling LESS</a></div>
               <div className="title"><a href="fts_getting_started.html#fonts" className="item">Changing Fonts</a></div>
               <div className="title"><a href="fts_getting_started.html#vector-icons" className="item">Vector Icons</a></div>
               <div className="title"><a href="fts_getting_started.html#optimization" className="item">Site Optimization</a></div>
           </div>
       </div>
    
        <div className="title accordion-trigger active">
            <a className="">Layout</a>
        </div>
        <div className="content active">
           <div className="accordion">
               <div className="title "><a href="fts_default_grid.html" className="item">Default Grid</a></div>
               <div className="title active"><a href="fts_divided_container.html" className="item">Divided Container</a></div>
               <div className="title "><a href="fts_magic_grid.html" className="item">Magic Grid</a></div>
           </div>
        </div>
    
    
        <div className="title accordion-trigger ">
            <a className="">Components</a>
        </div>
        <div className="content ">
           <div className="accordion">
                <div className="title "><a href="fts_header.html" className="item">Header</a></div>
                <div className="content"></div>
    
                <div className="title accordion-trigger "><a className="item">Menus</a></div>
                <div className="content ">
                   <div className="accordion">
                       <div className="title "><a href="fts_menu.html" className="item">Menu Default</a></div>
                       <div className="title "><a href="fts_dashboard_menu.html" className="item">Dashboard Menu</a></div>
                   </div>
                </div>
                
               <div className="title "><a href="fts_logo.html" className="item">Logo</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_buttons.html" className="item">Buttons</a></div>
               <div className="content"></div>
               
               <div className="title "><a href="fts_icons.html" className="item">Icons</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_form_elements.html" className="item">Form Elements</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_floating_placeholder.html" className="item">Floating Placeholder</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_sticky_element.html" className="item">Sticky Element</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_property_items.html" className="item">Property Items</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_articles.html" className="item">Articles</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_promo_section.html" className="item">Promo Section</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_modals.html" className="item">Modals</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_accordion.html" className="item">Accordion</a></div>
               <div className="content"></div>
    
    
               <div className="title accordion-trigger "><a className="item">Hero Search</a></div>
               <div className="content ">
                   <div className="accordion">
                       <div className="title "><a href="fts_hero_search_horizontal.html" className="item">Hero Seach Horizontal</a></div>
                       <div className="title "><a href="fts_hero_search_vertical.html" className="item">Hero Seach Vertical</a></div>
                   </div>
    
                </div>
    
               <div className="title accordion-trigger "><a className="item">Carousel</a></div>
               <div className="content ">
                   <div className="accordion">
                       <div className="title "><a href="fts_slick_carousel.html" className="item">Slick Carousel</a></div>
                       <div className="title "><a href="fts_slick_hero_big.html" className="item">Slick Hero Big</a></div>
                       <div className="title "><a href="fts_slick_full_page_search.html" className="item">Slick Full Page Search</a></div>
                   </div>
    
                </div>
    
               <div className="title "><a href="fts_charts.html" className="item">Charts</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_progressbar.html" className="item">Progressbar</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_hamburger_icon.html" className="item">Hamburger Icon</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_calendar.html" className="item">Calendar</a></div>
               <div className="content"></div>
    
               <div className="title "><a href="fts_price_range_slider.html" className="item">Price Range Slider</a></div>
               <div className="content"></div>
    
           </div>
    
        </div>
    
        <div className="title accordion-trigger ">
            <a className="">Content</a>
        </div>
        <div className="content ">
           <div className="accordion">
               <div className="title "><a href="fts_typography.html" className="item">Typography</a></div>
               <div className="title "><a href="fts_code.html" className="item">Code</a></div>
               <div className="title "><a href="fts_image.html" className="item">Image</a></div>
               <div className="title "><a href="fts_image_gallery.html" className="item">Image Gallery</a></div>
               <div className="title "><a href="fts_table.html" className="item">Table</a></div>
           </div>
        </div>
    </div>
    </li>
    </ul>                                </div>
                        </div>
                    </div>
                </div>
                
           </div>
           
           <div className="ui twelve wide tablet nine wide computer nine wide widescreen nine wide large screen column">
               <div className="ui grid">
                   <div className="row">
                     
                       <div className="ui twelve wide computer grey column">
                          <div className="ui grid">
                              <div className="row">
                               
                                <div className="ui twelve wide computer column">
                                    <div className="typo-section-sq top-default bottom-default">
                                        <h2>Divided Container</h2>
                                        
                                        <p className="definition-sq"><strong>Divided Container</strong> is a custom grid particular to the theme.</p>
                                        <hr className="padded-sq"/>
                                        
                                        <h3>General Info</h3>
                                        <br/>
                                        
                                        <p>The grid it is used in many cases to what form elements together with the corresponding label.</p>
                                        
                                        <p>Base structure is like this: </p>
                                        
                                        
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>

    <code className="html">
        &lt;div className=&quot;div-c&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    ...
    &lt;/div&gt;
    </code>
    </pre>
                                        <hr className="padded-sq"/>
                                        
                                        <h3>Columns</h3>
                                        <br/>
                                        
                                        <p>By default <strong>.div-c</strong> columns have 100% width.</p>
                                        <br/>
                                        
                                        <p>In order to have multiple columns on one line you can use these classes::</p>
    
                                        <ul>
                                            <li><strong>.inline-2</strong> - two columns in a row.</li>
                                            <li><strong>.inline-3</strong> - thre columns in a row.</li>
                                            <li><strong>.inline-4</strong> - four columns in a row.</li>
                                        </ul>
                                        
                                        <p>No matter the above options, on mobile the width will always be 100%.</p>
                                        <br/>
    <div className="div-c inline-2">
    <div className="divided-column">
    <label>Label 1</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 2</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    </div>                     
                                                   
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c <mark className="markcode">inline-2</mark>&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    ...
    &lt;/div&gt;</code></pre>
                                    <br/>
                                    <br/>
                                     
    <div className="div-c inline-3">
    <div className="divided-column">
    <label>Label 3</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 4</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 5</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    </div>                     
                                                   
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c <mark className="markcode">inline-3</mark>&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;/div&gt;</code></pre>
                                      
                                      
                                      <hr className="padded-sq"/>
                                       
                                       
                                       <h3>One Label Option</h3>
                                       
                                       
                                       <p>There are cases when the elements grid needs just one label. You can use the <strong>.one-label</strong> class like this:</p>
    <div className="div-c inline-4 one-label">
    <label>Label 1</label>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    </div>  
                                  
                                   
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c <mark className="markcode">one-label</mark> inline-4&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;/div&gt;</code></pre>       
                                       <hr className="padded-sq"/>
                                       
                                       <h3>No Padding Option</h3>
                                       <br/>
                                              
                                       <p>To remove columns gutter you can use this class <strong>.no-padding</strong></p>
    <div className="div-c inline-2 no-padding">
    <div className="divided-column">
    <label>Label 1</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 2</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    </div> 
                                                
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c inline-2 <mark className="markcode">no-padding</mark>&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    ...
    &lt;/div&gt;</code></pre>
    
                                    <hr className="padded-sq"/>
                                               
                                        <h3>Border Option</h3>
                                       <br/>
                                              
                                       <p>To apply a border on the whole <strong>.div-c</strong>, excluding the label, you can use <strong>.border-sq</strong> class along with <strong>.no-padding</strong> class.</p>
                                       
                                       
                                       
    <div className="div-c inline-3 one-label no-padding border-sq">
    <label>Label 1</label>
    <div className="divided-column">Element 01</div>
    <div className="divided-column">Element 02</div>
    <div className="divided-column">Element 03</div>
    </div>
        
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c inline-3 one-label no-padding <mark className="markcode">border-sq</mark>&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;div className=&quot;divided-column&quot;&gt;Element 01&lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;Element 02&lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;Element 03&lt;/div&gt;
    &lt;/div&gt;</code></pre>                    
                                   
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
    
    {/* <!--end #page-wrapper--> */}
    
    </React.Fragment>
        )

    }

    }

    


export default DividedContainer
