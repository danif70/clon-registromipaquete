import React, { Fragment } from "react";
import Arrow from "../images/arrow-left.png";

const Form3 = (
  completedForm2,
  setCompletedForm2,
  name,
  lastName,
  email,
  phone,
  city,
  address,
  documentType,
  numberDocument,
  commercialName,
  typeClient,
  numberShipments,
  razonSocial
) => {
  console.log(completedForm2)
  const handleClick = ()=>{
  setCompletedForm2 = "false"
console.log('no sirvo')}

  return (
    <Fragment>
      <div className="container-form3">
        <div className="top-form3">
        <img
                  type="button"
                  className="img-flecha"
                  src={Arrow}
                  alt="flecha a la izquierda"
                  onClick={() => handleClick()}
                />
          <p className="text-form2">Establece tu contraseña</p>
        </div>
        <form className="form3">
          <div className="input-form" autoComplete="off">
            <label className="label">Contraseña</label>
            <input type="password" className="input"></input>
            <span className="underline"></span>
            <span className="label undertext">
              *Recuerda que tu contraseña debe contener: Mínimo 8 caracteres que
              incluyan números y letras.
            </span>
          </div>
          <div className="input-form" autoComplete="off">
            <label className="label">Confirma tu contraseña</label>
            <input type="password" className="input"></input>
            <span className="underline"></span>
          </div>
          <div className="privacy">
            <input type="checkbox"></input>
            <span className="sub-privacy">
              <text className="link-privacy">He leído y acepto </text>
              <a
                className="link-privacy link-blue"
                href="https://mipaquete.com/politicas-privacidad-de-datos-terminos-y-condiciones/"
              >
                la política de tratamiento de datos, los términos y condiciones
                de uso
              </a>
            </span>
          </div>
        </form>
        <button className="button-form3 continue">Crear Cuenta</button>
      </div>
    </Fragment>
  );
};
export default Form3;
