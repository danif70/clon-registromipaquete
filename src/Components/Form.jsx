import React from "react";
import Flag from "../images/colombia.png"
import Whatsapp from "../images/whatsapp.png"

const Form = () => {
  return (
    
      <form className="form" autocomplete="off">
        <div className='input-form'>
        <label className= 'label'>Nombre</label>
        <input type="text" autocomplete="off" className='input' placeholder='Daniela' required='true'></input>
        <span class="underline"></span>
        </div>
        <div className='input-form'>
        <label className= 'label'>Apellido</label>
        <input type="text" autocomplete="off" className='input' placeholder='Mantilla' required='true'></input>
        <span class="underline"></span>
        </div>
        <div className='input-form'>
        <label className= 'label'>Correo electrónico</label>
        <input type="email" className='input' placeholder='Dani.Mantilla@mipaquete.com'></input>
        <span class="underline"></span>
        </div>
        <div className='input-form '>
        <label className= 'label'>Celular</label>
        <span className='phone'>
        <img className='flag'src={Flag} width='22px' height='22px' alt="bandera de Colombia"/>
        <input type="tel" className='input' placeholder='3101234567'></input>
        <img className='whatsapp' src={Whatsapp} width="22px" height="21px" alt="logo de whatsapp"/>
        <span class="underline"></span>
        </span>
        
        </div>
        <div className='input-form'>
        <label className= 'label'>Ciudad</label>
        <input type="select" className='input' placeholder='MEDELLÍN'></input>
        <span class="underline"></span>
        </div>
        <div className='input-form'>
        <label className= 'label'>Dirección de recogida</label>
        <input type="text" className='input' placeholder='Carrera 25 A # 23 - 18'></input>
        <span class="underline"></span>
        </div>
      </form>
    
  );
};
export default Form;
