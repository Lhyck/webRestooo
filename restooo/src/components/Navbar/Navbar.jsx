import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
///import {MdOutlineRestaurantMenu} from 'react.icons/md';

import images from '../../constants/images'
import  './Navbar.css';

const Navbar = () => {
  const [ toggleMenu, setToggleMenu] = useState(false);
  return (
  
     <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo"/>
      </div>
    
      <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#header">Header</a></li>
                <li className="p__opensans"><a href="#Usuarios">Usuarios</a></li>
                <li className="p__opensans"><a href="#gallery">Gallery</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#intro">Drinks</a></li>
                <li className="p__opensans"><a href="#findus">Contac</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
      
      <a href="/" className="p__opensans">Book Table</a>
      </div> 
      
     
    </nav>
  )
}; 
export default Navbar;
