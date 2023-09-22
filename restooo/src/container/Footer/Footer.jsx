import React from 'react';

import './Footer.css';
import { images } from '../../constants';
import { FiFacebook, FiTwitter,FiInstagram, FiPhoneCall } from 'react-icons/fi';  
const Footer = () => (
  <div className='app__footer ' id='Footer'>
    <div className="app__footer-links">
      <div className="app__footer-links_contac">
        <h1 className="app__footer-headtext">Contactanos ...</h1>
        <p className="p__opensans">Avenida Brasil 387</p>
        <p className="p__opensans"> +5493888455667</p>
      </div>
      <div className='app__footer-links_logo'>
         <img src= {images.gericht} alt=''></img>
         <p className="p__opensans">El lugar ideal para compartir grandes momentos, disfrutando las exquisiteses junto a tus amigos, familiares  ...</p>
         <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop:15}}></img>
         <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
          <FiPhoneCall/>
          </div>     
      </div>
      <div className='app__footer-links_work'>
      <h1 className="app__footer-headtext">Trabajamos ...</h1>
        <p className="p__opensans">Lunes a Sábado</p>
        <p className="p__opensans"> de 20:00 pm a 2:00 pm</p>
        <p className="p__opensans">Sábados y Domingos</p>
        <p className="p__opensans"> de 20:00pm a 4:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
         <p className="p__opensans"> 2023 No vives de Ensalada</p>
      </div>
    
  </div>
);

export default Footer;
