import React from 'react'
import MagicGrid from './grids/MagicGrid'
import PromoSection1 from './promo/PromoSection1'
import Property from './grids/Property'
import PromoSection2 from './promo/PromoSection2'
import MagicGridCategorySpecial from './grids/MagicGridCategorySpecial'
import MagicGridArticles from './grids/MagicGridArticle'
import MagicGridContextProvider from '../contexts/MagicGridContext';
import MagicGridArticleContextProvider from '../contexts/MagicGridArticleContext';

function UiLayoutTop() {
    return (
      <div className="ui layout" id="top">
<div className="ui grid container">
<MagicGridContextProvider>
<MagicGrid/>
</MagicGridContextProvider>
  
</div>

<div className="promo-section">
   
   {/* <!-- content --> */}
    <PromoSection1/>
    
    {/* <!-- picture --> */}
  
</div>

<div className="ui grid container">
  <Property/>
</div>

<div className="promo-section">
   <PromoSection2/>
</div>



<div className="ui grid container">
   <MagicGridCategorySpecial/>
</div>

<div className="ui grid container">
<MagicGridArticleContextProvider>
   <MagicGridArticles/>
</MagicGridArticleContextProvider>
</div>

</div>

    )
}

export default UiLayoutTop
