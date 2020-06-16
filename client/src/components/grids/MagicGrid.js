import React , {useState} from 'react'
import { Link } from "react-router-dom";


//import photos
import magic_grid_photo_01 from '../../assets/images/magic_grid/magic_grid_photo_01.jpg';
import magic_grid_photo_02 from '../../assets/images/magic_grid/magic_grid_photo_02.jpg';
import magic_grid_photo_03 from '../../assets/images/magic_grid/magic_grid_photo_03.jpg';
import magic_grid_photo_04 from '../../assets/images/magic_grid/magic_grid_photo_04.jpg';

function MagicGrid() {

    const [magicGrid , setMagicGric] = useState([
          {image : magic_grid_photo_01 , title : "Lefkada" , country : "Greece"},
          {image : magic_grid_photo_02 , title : "Amsterdam" , country : "Nederland"},
          {image : magic_grid_photo_03 , title : "Paris" , country : "France"},
          {image : magic_grid_photo_04 , title : "Prague" , country : "Republic Cheque"},

    ]);
    const dataLabelAfter = "Book a home in";

    return (
         <div className="row">
        <div className="ui twelve wide computer column">
            <div className="typo-section-sq bottom-big">
                
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">Top Cities to visit</h2>
                    <p className="text-align-center-sq">Discover awesome experiences around the world.</p>
                </div>
                
                <div className="magic-grid photo-sq hover-default hover-center">

                {magicGrid.map((magic)=>{
                 const alterImage = magic.image.split('/');
                 return (
                   <div className="item">
                        <div className="item-inner">

                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic.image} alt={alterImage[3]}/>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- typography container--> */}
                            <Link to="listing_page.html" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before={magic.country} data-label-after={dataLabelAfter}></p>
                                <p className="typo-title-sq">{magic.title}</p>
                            </Link>

                        </div>
                    </div>

                 )
                })}


                   
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
