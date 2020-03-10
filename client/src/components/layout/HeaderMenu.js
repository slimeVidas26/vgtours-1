import React from 'react'
import { Link } from "react-router-dom";
// import DefaultGrid from '../features/DefaultGrid'


function HeaderMenu() {
    return (
        <div className="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">

<ul className="main-menu">
                
    <li><Link to="become_a_vendor.html" className="item">
            <span>Become a Vendor</span>
        </Link>
    </li>
    
    <li className="has-submenu">
        <Link to="#" className="item">
            <span>Features</span>
        </Link>
        <ul className="submenu">

            <li><Link to="../features/fts_default_grid.html" className="item"><span>Default Grid</span></Link></li>
            <li><Link to="../features/fts_divided_container.html" className="item"><span>Divided Container</span></Link></li>
            <li><Link to="../features/fts_magic_grid.html" className="item"><span>Magic Grid</span></Link></li>
            <li>
                <hr/>
            </li>
            <li><Link to="../features/fts_header.html" className="item"><span>Header</span></Link></li>
            <li><Link to="../features/fts_menu.html" className="item"><span>Menu Default</span></Link></li>
            <li><Link to="../features/fts_dashboard_menu.html" className="item"><span>Dashboard Menu</span></Link></li>
            <li><Link to="../features/fts_logo.html" className="item"><span>Logo</span></Link></li>
            <li><Link to="../features/fts_buttons.html" className="item"><span>Buttons</span></Link></li>
            <li><Link to="../features/fts_icons.html" className="item"><span>Icons</span></Link></li>
            <li><Link to="../features/fts_form_elements.html" className="item"><span>Form Elements</span></Link></li>
            <li><Link to="../features/fts_floating_placeholder.html" className="item"><span>Floating Placeholder</span></Link></li>
            <li><Link to="../features/fts_sticky_element.html" className="item"><span>Sticky Element</span></Link></li>
            <li><Link to="../features/fts_property_items.html" className="item"><span>Property Items</span></Link></li>
            <li><Link to="../features/fts_articles.html" className="item"><span>Articles</span></Link></li>
            <li><Link to="../features/fts_promo_section.html" className="item"><span>Promo Sections</span></Link></li>
            <li><Link to="../features/fts_modals.html" className="item"><span>Modals</span></Link></li>
            <li><Link to="../features/fts_accordion.html" className="item"><span>Accordion</span></Link></li>
            <li><Link to="../features/fts_hero_search_horizontal.html" className="item"><span>Hero Search Horizontal</span></Link></li>
            <li><Link to="../features/fts_hero_search_vertical.html" className="item"><span>Hero Search Vertical</span></Link></li>
            <li><Link to="../features/fts_slick_carousel.html" className="item"><span>Slick Carousel</span></Link></li>
            <li><Link to="../features/fts_slick_hero_big.html" className="item"><span>Slick Hero Big</span></Link></li>
            <li><Link to="../features/fts_slick_full_page_search.html" className="item"><span>Slick Full Page Search</span></Link></li>
            <li><Link to="../features/fts_charts.html" className="item"><span>Charts</span></Link></li>
            <li><Link to="../features/fts_progressbar.html" className="item"><span>Progressbar</span></Link></li>
            <li><Link to="../features/fts_hamburger_icon.html" className="item"><span>Hamburger Icon</span></Link></li>
            <li><Link to="../features/fts_calendar.html" className="item"><span>Calendar</span></Link></li>
            <li><Link to="../features/fts_price_range_slider.html" className="item"><span>Price Range Slider</span></Link></li>
            <li>
                <hr/>
            </li>
            <li><Link to="../features/fts_typography.html" className="item"><span>Typography</span></Link></li>
            <li><Link to="../features/fts_code.html" className="item"><span>Code</span></Link></li>
            <li><Link to="../features/fts_image.html" className="item"><span>Image</span></Link></li>
            <li><Link to="../features/fts_image_gallery.html" className="item"><span>Image Gallery</span></Link></li>
            <li><Link to="../features/fts_table.html" className="item"><span>Table</span></Link></li>
            
        </ul>
    </li>
    
    <li><Link to="#" className="item modal-ui-trigger" data-trigger-for="modal01">
            <span>Sign Up</span>
        </Link>
    </li>

    <li><Link to="#" className="item modal-ui-trigger" data-trigger-for="modal02">
            <span>Log In</span>
        </Link>
    </li>

</ul>
</div>

    )
}

export default HeaderMenu
