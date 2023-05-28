import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p_opensans"><a href="#home">Home</a></li>
        <li className="p_opensans"><a href="#about">About</a></li>
        <li className="p_opensans"><a href="#menu"></a>Menu</li>
        <li className="p_opensans"><a href="#awards"></a>Awards</li>
        <li className="p_opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log in / Register</a>
        <div />
        <a href="/" className="p__opensans">Reservation</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)}/>
       
        {toggleMenu && (
         <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontsize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
           <ul className="app__navbar-smallscreen_links">
            <li className="p_opensans"><a href="#home">Home</a></li>
            <li className="p_opensans"><a href="#about">About</a></li>
             <li className="p_opensans"><a href="#menu"></a>Menu</li>
            <li className="p_opensans"><a href="#awards"></a>Awards</li>
            <li className="p_opensans"><a href="#contact">Contact</a></li>
           </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
