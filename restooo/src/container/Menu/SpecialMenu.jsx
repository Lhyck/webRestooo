import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id='menu' >
    <div className="app__specialMenu-title">
     <SubHeading title="El menu que se adapta a tu paladar"/>
     <h1 className="headtext__cormorant">El lugar que hace especial tu dia</h1>
    </div>

    <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center"> 
          <p className="app__specialMenu-menu_heading">Vinos & Cervezas</p>
          <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price}  />
              ))}
          </div> 
        </div>
        
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img"/>
        </div>

        <div className="app__specialMenu-menu_cocktails flex_center">  
          <p className="app__specialMenu-menu_heading">Tragos</p>
          <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
                <MenuItem key={cocktail.title + index} title={cocktail.title}   price={cocktail.price} />
              ))}
          </div> 
        </div>
    </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center"> 
            <p className="app__specialMenu-menu_heading">Minutas</p>
            <div className="app__specialMenu_menu_items">
            {data.foots.map((foots, index) => (
                  <MenuItem key={foots.title + index} title={foots.title} price={foots.price} tags={foots.tags} />
                ))}
            </div> 
        </div>
        
        <div className="app__specialMenu-menu_img_foots">
          <img src={images.empanadas} alt="empanadas img"/>
          
        </div>

      </div>
    <div style={{marginTop:"15px"}}>
         <button type="button" className="custom__button">Ver Mas</button>
      </div>
    </div>
  
);

export default SpecialMenu;
