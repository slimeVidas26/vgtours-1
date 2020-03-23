import React  , {Fragment} from 'react'
import { Link } from "react-router-dom";


//article
import magic_grid_article_01 from '../../assets/images/magic_grid/magic_grid_article_01.jpg';
import magic_grid_article_02 from '../../assets/images/magic_grid/magic_grid_article_02.jpg';
import magic_grid_article_03 from '../../assets/images/magic_grid/magic_grid_article_03.jpg';
import magic_grid_article_04 from '../../assets/images/magic_grid/magic_grid_article_04.jpg';
import magic_grid_article_05 from '../../assets/images/magic_grid/magic_grid_article_05.jpg';
import magic_grid_article_06 from '../../assets/images/magic_grid/magic_grid_article_06.jpg';
// import magic_grid_article_07 from './assets/images/magic_grid/magic_grid_article_07.jpg';

function ArticleStyle() {
    return (
        <Fragment>
        <h3>Article Style</h3>

<p>By adding the <strong>.article-sq</strong> className, the grid will look like this:</p>


<div className="magic-grid article-sq hover-scale">

   {/* <!-- item--> */}
   <div className="item">
        <div className="item-inner">

            {/* <!-- image container --> */}
            <Link to="#" className="image-sq">
                <span className="image-wrapper">
                    <span className="image-inner">
                        <img className="image-sq" src={magic_grid_article_01} alt=""/>
                    </span>
                </span>
            </Link>

            {/* <!-- typography container--> */}
            <div className="typo-sq">
               <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Travel" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Getting Cheap Airfare For Last Minute Travel</p>
                <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                <Link to ="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></Link>
            </div>

        </div>
    </div>

   {/* <!-- item--> */}
   <div className="item">
        <div className="item-inner">

            {/* <!-- image container --> */}
            <Link to = "#"  className="image-sq">
                <span className="image-wrapper">
                    <span className="image-inner">
                        <img className="image-sq" src={magic_grid_article_02} alt=""/>
                    </span>
                </span>
            </Link>

            {/* <!-- typography container--> */}
            <div className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Beauty" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">10 Steps To Look Younger</p>
                <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                <Link to ="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></Link>
            </div>

        </div>
    </div>

   {/* <!-- item--> */}
   <div className="item">
        <div className="item-inner">

            {/* <!-- image container --> */}
            <Link to ="#" className="image-sq">
                <span className="image-wrapper">
                    <span className="image-inner">
                        <img className="image-sq" src={magic_grid_article_03} alt=""/>
                    </span>
                </span>
            </Link>

            {/* <!-- typography container--> */}
            <div className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Cooking" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">The Benefits And Drawbacks Of Buying Designer Kitchenware Products</p>
                <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>


                <Link to ="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></Link>
            </div>

        </div>
    </div>

   {/* <!-- item--> */}
   <div className="item">
        <div className="item-inner">

            {/* <!-- image container --> */}
            <Link to="#"  className="image-sq">
                <span className="image-wrapper">
                    <span className="image-inner">
                        <img className="image-sq" src={magic_grid_article_04} alt=""/>
                    </span>
                </span>
            </Link>

            {/* <!-- typography container--> */}
            <div className="typo-sq">
                <span className="typo-whitespace"></span>

                <p className="typo-label-sq" data-label-before="Advertising" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Enhance Your Brand Potential With Giant Advertising Blimps</p>
                <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                <Link to ="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></Link>
            </div>

        </div>
    </div>

    {/* <!-- item--> */}
   <div className="item">
        <div className="item-inner">

            {/* <!-- image container --> */}
            <Link to ="#" className="image-sq">
                <span className="image-wrapper">
                    <span className="image-inner">
                        <img className="image-sq" src={magic_grid_article_05} alt=""/>
                    </span>
                </span>
            </Link>

            {/* <!-- typography container--> */}
            <div className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Motivation" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Counting Your Chicken Before They Hatch</p>
                <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                <Link to ="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></Link>
            </div>

        </div>
    </div>

    {/* <!-- item--> */}
   <div className="item">
        <div className="item-inner">

            {/* <!-- image container --> */}
            <Link to = "#" className="image-sq">
                <span className="image-wrapper">
                    <span className="image-inner">
                        <img className="image-sq" src={magic_grid_article_06} alt=""/>
                    </span>
                </span>
            </Link>

            {/* <!-- typography container--> */}
            <div className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Architecture" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Tesla to Build Three More Gigafactories</p>
                <p className="typo-desc-sq">Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>

                <Link to ="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></Link>
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
&lt;Link to =&quot;&quot; className=&quot;read-more-sq&quot;&gt;read more &lt;i className=&quot;icon icon-arrow-right-122&quot;&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div className=&quot;item&quot;&gt; ... &lt;/div&gt;
....
&lt;/div&gt;</code></pre>

<br/>
<h4>Responsive Behavior</h4>                                         
<img src="assets/images/magic_grid/magic_grid_article_responsive.jpg" alt=""/>                                          
        </Fragment>
    )
}

export default ArticleStyle
