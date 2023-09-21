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
   <div className='app__Usuarios'>
    <div>
    <div>
      <img  src={ images.user} alt="Usuario img"></img>
      <br>
      </br>
      <br>
      </br>
     <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size='lg' direction='right'>  
        
        <DropdownToggle caret>
          Gestion de Usuarios
        </DropdownToggle>
        <DropdownMenu>
             <DropdownItem>Agregar usuarios</DropdownItem>
             <DropdownItem>Modificar usuarios</DropdownItem>
             <DropdownItem>Eliminar usuarios</DropdownItem>
        </DropdownMenu>
        </Dropdown>  
    </div>
    </div>
  

    </div>
  )
} 
export default Usuarios;