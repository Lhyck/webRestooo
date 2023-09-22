import React,  {useState} from 'react';

import './Productos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle  } from 'reactstrap';
import { images } from '../../constants';

const Productos = () =>{
    const [dropdown, setDropdown]= useState(false);
     const abrirCerrarDropdown=() => {
      setDropdown(!dropdown);
     }
     return (
     <div className='app__Productos' id='Productos'>
      
      <div className='app__div_img_pro'>
        <img  src={ images.welco} alt="Welco img" className='app__images-img'></img>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop:15}}></img>
        <br>
        </br>
        <br>
        </br>
       <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size='lg' direction='right'>  
          
          <DropdownToggle caret className='app__dropdown_dropdown-toggle.btn.btn_-secondary'>
            Gestion de Productos
          </DropdownToggle>
          <DropdownMenu>
               <DropdownItem>Agregar productos</DropdownItem>
               <DropdownItem>Modificar productos</DropdownItem>
               <DropdownItem>Eliminar productos</DropdownItem>
          </DropdownMenu>
          </Dropdown>  
      </div>
  
      <div className='app__form_productos'>
        <form>
            <label className='app__label'>IdProducto :  <input type="text" name="name" className='app__label-input'/>
            </label>
            <br></br>
            <br></br>
            <br></br>
            <label className='app__label'>Producto : <input type="text" name="name" className='app__label-input'/>
  
            </label>
            <br></br>
            <br></br>
            <br></br>
            <label className='app__label'>Precio : <input type="text" name="name" className='app__label-input'/>
  
            </label>
            <br></br>
            <br></br>
            <br></br>
            <label className='app__label'>Detalle : <input type="text" name="name" className='app__label-input'/>
  
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

export default Productos;