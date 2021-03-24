import React, { useState } from 'react'
import HeaderStyles from '../css/HeaderStyles.module.css';
import logo from '../assets/upscale_logo_new.png';

function Header () {

    const [portfolioSubMenuStatus, setPortfolioSubMenuStatus] = useState( false );
    const [burgerIconStatus, setBurgerIconStatus] = useState( false );
    const [mobileMenuStatus, setMobileMenuStatus] = useState( false );

    const portfolioHovered = () => {
        setPortfolioSubMenuStatus( true );
    }

    const portfolioOut = () => {
        setPortfolioSubMenuStatus( false );
    }

    const myFunction = ( e ) => {

        setBurgerIconStatus( !burgerIconStatus );
        setMobileMenuStatus( true );
        setBurgerIconStatus( false );
    }
    const closeMobileMenu = () => {
        setMobileMenuStatus( false );
    }

    return (
        <>
            <div className={HeaderStyles.headerContainer}>
                <div className={HeaderStyles.headerLMenu}>
                    <img className={HeaderStyles.logo} src={logo} />

                    <ul className={`${HeaderStyles.largerOptions} ${HeaderStyles.headerMenu}`}>
                        <li style={{ color: '#db2531' }}>HOME</li>
                        <li>PAGES <i className="fa fa-caret-down" aria-hidden="true"></i></li>
                        <li className={HeaderStyles.headerLinks} id="portfolioLink" onMouseEnter={portfolioHovered} onMouseLeave={portfolioOut}>PORTFOLIO <i className="fa fa-caret-down" aria-hidden="true"></i></li>
                        <li>BLOG <i className="fa fa-caret-down" aria-hidden="true"></i></li>
                        <li>CONTACTS</li>
                        <li>SHOP</li>
                    </ul>

                </div>
                <div className={`${HeaderStyles.largerOptions} ${HeaderStyles.headerRMenu}`}>

                    <button className={HeaderStyles.quoteBtn}>GET QUOTE</button>

                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>

                    <i className="fa fa-search" aria-hidden="true"></i>

                </div>

                <div className={`${HeaderStyles.container} ${burgerIconStatus === true ? HeaderStyles.change : ''}`} onClick={myFunction}>
                    <div className={HeaderStyles.bar1}></div>
                    <div className={HeaderStyles.bar2}></div>
                    <div className={HeaderStyles.bar3}></div>
                </div>

            </div>

            {portfolioSubMenuStatus && (
                <div className={HeaderStyles.subMenuContainer} onMouseEnter={portfolioHovered} onMouseLeave={portfolioOut}>
                    <div className={HeaderStyles.portfolioSubMenu}>
                        <ul style={{ marginTop: '0.5rem' }}>
                            <li>THREE COLUMNS</li>
                            <li>FOUR COLUMNS</li>
                            <li>MASONRY GRID</li>
                            <li>VIDEO PORTFLIO</li>
                            <li>SOCIAL PORTFOLIO</li>
                            <li>BLOG POSTS</li>
                            <li>SHOP PRODUCTS</li>
                        </ul>
                    </div>
                </div>
            )}

            {mobileMenuStatus && (

                <div className={HeaderStyles.mobileMenuContainer}>
                    <div className={HeaderStyles.mobileMenu}>

                        <label style={{ color: 'white', fontSize: '28px', marginBottom: '1rem', marginLeft: '-3.5rem' }}>Menu</label>
                        <i onClick={closeMobileMenu} style={{ fontSize: '28px', color: 'white', marginBottom: '1.5rem', marginRight: '-4rem' }} className="fa fa-times" aria-hidden="true"></i>

                    </div>

                    <div className={HeaderStyles.mobileMenuContent}>
                        <div>Home</div>
                        <div><span>Pages</span> <i className={`${HeaderStyles.subMenuIcon} fa fa-chevron-right`} aria-hidden="true"></i></div>
                        <div><span>Portfolio</span> <i className={`${HeaderStyles.subMenuIcon} fa fa-chevron-right`} aria-hidden="true"></i></div>
                        <div><span>Blog <i className={`${HeaderStyles.subMenuIcon} fa fa-chevron-right`} aria-hidden="true"></i></span></div>
                        <div>Contacts</div>
                        <div>Shop</div>


                        <div style={{ fontWeight: 'bold' }}>Contacts</div>

                        <div>
                            <i style={{ width: '10%', color: '#DB2531' }} className="fa fa-location-arrow" aria-hidden="true"></i>
                            <span style={{ width: '50%' }}>4982 Parkway Street, Los Angeles, CA 90017</span>
                        </div>


                        <div>
                            <i style={{ width: '10%', color: '#DB2531' }} className="fa fa-comment" aria-hidden="true"></i>
                            <span style={{ width: '50%' }}>(800) 202-555-0120</span>
                        </div>

                        <div>
                            <i style={{ width: '10%', color: '#DB2531' }} className="fa fa-envelope" aria-hidden="true"></i>
                            <span style={{ width: '50%' }}>info@upscaledemo.com</span>

                        </div>

                        <div>
                            <i style={{ width: '10%', color: '#DB2531' }} className="fa fa-calendar" aria-hidden="true"></i>
                            <span style={{ width: '50%' }}>Open every day from 8am to 5pm</span>

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}

export default Header
