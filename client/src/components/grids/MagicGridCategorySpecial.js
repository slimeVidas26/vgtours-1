import React  ,{useState} from 'react'
import { Link } from "react-router-dom";
import MagicGridArticles from './MagicGridArticles'


//import images
import magic_grid_category_special_01 from '../../assets/images/magic_grid/magic_grid_category_special_01.png';
import magic_grid_category_special_02 from '../../assets/images/magic_grid/magic_grid_category_special_02.jpg';
import magic_grid_category_special_03 from '../../assets/images/magic_grid/magic_grid_category_special_03.jpg';
import magic_grid_category_special_04 from '../../assets/images/magic_grid/magic_grid_category_special_04.jpg';
import magic_grid_category_special_05 from '../../assets/images/magic_grid/magic_grid_category_special_05.jpg';
import magic_grid_category_special_06 from '../../assets/images/magic_grid/magic_grid_category_special_06.jpg';
import magic_grid_category_special_07 from '../../assets/images/magic_grid/magic_grid_category_special_07.jpg';



function MagicGridCategorySpecial() {
    const [magicGridCategorySpecial ,setMagicGridCategorySpecial ] = useState([
        {image : magic_grid_category_special_01 , title : "Wildlife"},
        {image : magic_grid_category_special_02 , title : "Adventure"},
        {image : magic_grid_category_special_03 , title : "Beaches"},
        {image : magic_grid_category_special_04 , title : "Monuments"},
        {image : magic_grid_category_special_05 , title : "Food"},
        {image : magic_grid_category_special_06 , title : "Party"},
        {image : magic_grid_category_special_07 , title : "Museum"},

    ])
    return (
        <div className="row">
        <div className="ui column">
            <div className="typo-section-sq bottom-big">
            
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">Top Interest</h2>
                    <p className="text-align-center-sq">In hac habitasse platea dictumst. Integer quis tortor enim. Integer et elit nec magna ultricies convallis. <br/> In venenatis eu erat et facilisis. Vestibulum congue enim nisl.</p>
                </div>
                
                <div className="magic-grid category-sq special-sq hover-scale">
                    {magicGridCategorySpecial.map((mgcs)=>{
                        const alterImage = mgcs.image.split('/');
                    return (
                        <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={mgcs.image} alt={alterImage[3]}/>
                
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <Link to="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">{mgcs.title}</p>
                            </Link>
                
                        </div>
                    </div>
                   
                    )
                    })}
                 
                </div>
            </div>
            
            <hr/>
           
         <MagicGridArticles/>
            
        </div>
    </div>
    )
}

export default MagicGridCategorySpecial
