import React, { Fragment } from 'react'
import { Link } from "react-router-dom";


//magic_grid_photo
import magic_grid_photo_01 from '../../assets/images/magic_grid/magic_grid_photo_01.jpg';
import magic_grid_photo_02 from '../../assets/images/magic_grid/magic_grid_photo_02.jpg';
import magic_grid_photo_03 from '../../assets/images/magic_grid/magic_grid_photo_03.jpg';
import magic_grid_photo_04 from '../../assets/images/magic_grid/magic_grid_photo_04.jpg';
import magic_grid_photo_05 from '../../assets/images/magic_grid/magic_grid_photo_05.jpg';
import magic_grid_photo_06 from '../../assets/images/magic_grid/magic_grid_photo_06.jpg';
import magic_grid_photo_07 from '../../assets/images/magic_grid/magic_grid_photo_07.jpg';
import magic_grid_photo_08 from '../../assets/images/magic_grid/magic_grid_photo_08.jpg';


//responsive
import magic_grid_photo_responsive from '../../assets/images/magic_grid/magic_grid_photo_responsive.jpg';
function PhotoStyle() {
    return (
        <Fragment>
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
            <Link to ="" className="typo-sq">
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
            <Link to ="" className="typo-sq">
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
            <Link to ="" className="typo-sq">
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
            <Link to ="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Czech" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Prague</p>
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
                        <img className="image-sq" src={magic_grid_photo_05} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <Link to ="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Germany" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Hamburg</p>
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
                        <img className="image-sq" src={magic_grid_photo_06} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <Link to ="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Romania" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Bucharest</p>
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
                        <img className="image-sq" src={magic_grid_photo_07} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <Link to ="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="United Kingdom" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">London</p>
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
                        <img className="image-sq" src={magic_grid_photo_08} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- typography container--> */}
            <Link to ="" className="typo-sq">
                <span className="typo-whitespace"></span>
                <p className="typo-label-sq" data-label-before="Brazil" data-label-after="Book a home in"></p>
                <p className="typo-title-sq">Rio de Janeiro</p>
            </Link>

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
        </Fragment>
    )
}

export default PhotoStyle
