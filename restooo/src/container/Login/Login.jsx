import React from 'react';

import './Login.css';
import { images } from '../../constants';

const Login = () => {
  return (
    <div className='app__Login'  id='Login'>
    <div className='app__form_login'>
        <div>
          
        <img  src={images.user } alt="Login img" className='app__images-img-login'></img>
      
        <br>
        </br>
        <br>
        </br>
        </div>
      <form>
          <label className='app__label'>Nombre :  <input type="text" name="name" className='app__label-input'/>
          </label>
          <br></br>
          <br></br>
          <br></br>
          <label className='app__label'>Rol : <input type="text" name="name" className='app__label-input'/>

          </label>
         
          <br></br>
            <br></br>
            <br></br>
             
            <div style={{marginTop:"15px"}}>
              <button type="submit" value="Submit" className="custom__button">Guardar</button>
            </div>
      </form> 
    </div>
    </div>
  )
}

export default Login;