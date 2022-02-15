import React, { Fragment, useState } from "react";
import Arrow from "../images/arrow-left.png";

const Form3 = (completedForm2, setCompletedForm2, objClient2) => {
  console.log(objClient2);
  const handleClick = () => {
    setCompletedForm2(false);
  };
  const [pass1, setpass1] = useState("");
  const [pass2, setpass2] = useState("");
  const [checkOk, setCheckOk] = useState(false);

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
          <p className="text-form3">Establece tu contraseña</p>
        </div>
        <form className="form3">
          <div className="form3-input" autoComplete="off">
            <label className="label">Contraseña</label>
            <input
              type="password"
              className="input"
              minlength="8"
              value={pass1}
              required
              onChange={(e) => setpass1(e.target.value)}
            ></input>
            <span className="underline"></span>
            <span className="label undertext">
              *Recuerda que tu contraseña debe contener: Mínimo 8 caracteres que
              incluyan números y letras.
            </span>
          </div>
          <div className="form3-input" autoComplete="off">
            <label className="label">Confirma tu contraseña</label>
            <input
              type="password"
              className="input"
              minlength="8"
              value={pass2}
              required
              onChange={(e) => setpass2(e.target.value)}
            ></input>
            <span className="underline"></span>
          </div>
          <div className="privacy">
            <input
              type="checkbox"
              name="checkbox"
              required
              onChange={() => setCheckOk(true)}
            ></input>
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
        {pass1 === pass2 && checkOk ? (
          <button type="submit" className="button-form3 continue">
            Crear Cuenta
          </button>
        ) : (
          <button type="submit" className="button-form3" disabled>
            Crear Cuenta
          </button>
        )}
      </div>
    </Fragment>
  );
};
export default Form3;
