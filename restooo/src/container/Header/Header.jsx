import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
      <div className="app__header app__wrapper section__padding" id="home">
          <div className="app__wrapper_info">
              <SubHeading title=" El lugar del encuentro ..."/>
              <h1 className="app__header-h1"> No vives de ensalada !!! </h1>
              <p className="p__opensans" style={{margin: "2rem 0"}}>El lugar ideal para compartir grandes momentos, disfrutando las exquisiteses junto a tus amigos, familiares  ...</p>
              <button type="button" className="custom__buttom"> Explorar el Menu</button>      
          </div>
          <div className="app__wrapper_img"> 
            <img src={ images.welcome} alt="header img" />
          </div>
          
      </div>
 
);

export default Header;