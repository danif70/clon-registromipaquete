import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useNavigate } from 'react-router-dom';
import Form from "../Components/Form";

import Arrow from '../images/arrow-left.png'

const Registro = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <body>
        <div className="container-form">
          <div className="top-form">
            <div className='sub-top-form'>
            <a className='flecha' href="/ingreso"><img className='img-flecha' src={ Arrow } alt='flecha a la izquierda'/></a>
            <p className='text-form'>Diligencia tus datos</p>
            </div>
            <p className='sub-text-form'>Todos los campos son obligatorios</p>
          </div>
          <div>
            <Form />
          </div>
          <div className='bottom-form'>
            <button className= 'button-form cancel' onClick={()=> navigate("/ingreso") }>Cancelar</button>
            <button className= 'button-form continue'>Continuar</button>
          </div>
        </div>
      </body>
    </Fragment>
  );
};
export default Registro;
