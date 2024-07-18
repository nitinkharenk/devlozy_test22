import React from 'react'

const HamburgerMenu = () => {
    return (
        <>
            <header>
                <nav>
                    <ul className='nav-bar bg-white'>
                        <li className='logo'><a href='#'><img src='/logo.png' /></a></li>
                        <input type='checkbox' id='check' />
                        <span className="menu">
                            <li><a href="">Home</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
                        </span>
                        <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HamburgerMenu 