import React, {useState} from 'react';

import './Usuarios.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle  } from 'reactstrap';
import { images } from '../../constants';


const Usuarios = () => {
  const [dropdown, setDropdown]= useState(false);
   const abrirCerrarDropdown=() => {
    setDropdown(!dropdown);
   }
   return (
   <div className='app__Usuarios' id='Usuarios'>
    
    <div className='app__div_img'>
      <img  src={ images.Loginn} alt="Usuario img" className='app__images-img'></img>
      <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop:15}}></img>
      <br>
      </br>
      <br>
      </br>
     <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size='lg' direction='right'>  
        
        <DropdownToggle caret className='app__dropdown_dropdown-toggle.btn.btn_-secondary'>
          Gestion de Usuarios
        </DropdownToggle>
        <DropdownMenu>
             <DropdownItem>Agregar usuarios</DropdownItem>
             <DropdownItem>Modificar usuarios</DropdownItem>
             <DropdownItem>Eliminar usuarios</DropdownItem>
        </DropdownMenu>
        </Dropdown>  
    </div>

    <div className='app__form_usuarios'>
      <form>
          <label className='app__label'>Nombre :  <input type="text" name="name" className='app__label-input'/>
          </label>
          <br></br>
          <br></br>
          <br></br>
          <label className='app__label'>Apellido : <input type="text" name="name" className='app__label-input'/>

          </label>
          <br></br>
          <br></br>
          <br></br>
          <label className='app__label'>Rol : <input type="text" name="name" className='app__label-input'/>

          </label>
          <br></br>
          <br></br>
          <br></br>
          <label className='app__label'>DNI : <input type="text" name="name" className='app__label-input'/>

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
export default Usuarios;