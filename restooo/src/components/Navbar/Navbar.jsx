 import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

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
                <li className="p__opensans"><a href="#Home">Inicio</a></li>
                <li className="p__opensans"><a href="#Usuarios">Usuarios</a></li>
                <li className="p__opensans"><a href="#Productos">Productos</a></li>
                <li className="p__opensans"><a href="#Footer">Contacto</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#Login" className="p__opensans">Loguearse / Registro</a>
            </div> 
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
         <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
      
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"><a href="#Home">Inicio</a></li>
                <li className="p__opensans"><a href="#Usuarios">Usuarios</a></li>
             
                <li className="p__opensans"><a href="#Productos">Productos</a></li>
                <li className="p__opensans"><a href="#drinks">Bebidas</a></li>
                <li className="p__opensans"><a href="#Footer">Contacto</a></li>
              </ul>
         </div>
         
        )}

      </div>
     
    </nav>
  )
}
export default Navbar;
