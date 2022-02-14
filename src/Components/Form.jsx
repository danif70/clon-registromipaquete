import React, { useState, Fragment } from "react";
import Flag from "../images/colombia.png";
import Whatsapp from "../images/whatsapp.png";
import { useNavigate } from "react-router-dom";
import Form2 from "../Components/Form2.jsx";
import Arrow from "../images/arrow-left.png";


const Form = ({ completedForm, setCompletedForm, completedForm2, setCompletedForm2 }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Fragment>
      {!completedForm ? (
        <>
          <div className="container-form1">
            <div className="container-form1-top">
              <div className="container-form1-top-sub">
                <a className="flecha" href="/ingreso">
                  <img
                    className="img-flecha1"
                    src={Arrow}
                    alt="flecha a la izquierda"
                  />
                </a>
                <p className="text-form">Diligencia tus datos</p>
              </div>
              <p className="sub-text-form">Todos los campos son obligatorios</p>
            </div>
            <form className="form1" autocomplete="off">
              <div className="form1-input">
                <label className="label">Nombre</label>
                <input
                  type="text"
                  data-bouncer-message="*Ingresa tu nombre para continuar"
                  value={name}
                  autocomplete="new-password"
                  className="input"
                  placeholder="Daniela"
                  required
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <span class="underline"></span>
              </div>
              <div className="form1-input">
                <label className="label">Apellido</label>
                <input
                  type="text"
                  data-bouncer-message="*Ingresa tu apellido para continuar"
                  value={lastName}
                  autocomplete="new-password"
                  className="input"
                  placeholder="Mantilla"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                <span class="underline"></span>
              </div>
              <div className="form1-input">
                <label className="label">Correo electrónico</label>
                <input
                  type="email"
                  data-bouncer-message="*Ingresa un correo válido"
                  value={email}
                  autocomplete="new-password"
                  className="input"
                  placeholder="Dani.Mantilla@mipaquete.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <span class="underline"></span>
              </div>
              <div className="form1-input">
                <label className="label">Celular</label>
                <div className="phone">
                  <img
                    className="flag"
                    src={Flag}
                    width="22px"
                    height="22px"
                    alt="bandera de Colombia"
                  />
                  <input
                    type="tel"
                    data-bouncer-message="*El número de celular debe ser colombiano y de 10 dígitos"
                    value={phone}
                    autocomplete="new-password"
                    className="input cellphone"
                    placeholder="      3101234567"
                    minLength="10"
                    maxLength="10"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                  <img
                    className="whatsapp"
                    src={Whatsapp}
                    width="22px"
                    height="21px"
                    alt="logo de whatsapp"
                  />
                </div>
                <span class="underline"></span>
              </div>
              <div className="form1-input">
                <label className="label">Ciudad</label>
                <input
                  type="text"
                  data-bouncer-message="*Por favor ingresa una ciudad válida"
                  value={city}
                  autocomplete="new-password"
                  className="input"
                  placeholder="MEDELLÍN"
                  required
                  onChange={(e) => setCity(e.target.value)}
                ></input>
                <span class="underline"></span>
              </div>
              <div className="form1-input">
                <label className="label">Dirección de recogida</label>
                <input
                  type="text"
                  data-bouncer-message="*Ingresa una dirección de recogida"
                  value={address}
                  autocomplete="new-password"
                  className="input"
                  placeholder="Carrera 25 A # 23 - 18"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
                <span class="underline"></span>
              </div>
            </form>
            <div className="bottom-form">
              <button
                className="button-form cancel"
                onClick={() => navigate("/ingreso")}
              >
                Cancelar{" "}
              </button>
              <button
              type="submit"
                className="button-form continue"
                onClick={() => {
                  (name && lastName && email && phone && city && address) !== ""
                    ? setCompletedForm(true)
                    : setCompletedForm(false);
                }}
              >
                {" "}
                Continuar{" "}
              </button>
            </div>{" "}
          </div>
        </>
      ) : (
        <Form2
          completedForm={completedForm}
          setCompletedForm={setCompletedForm}
          completedForm2={completedForm2}
          setCompletedForm2={setCompletedForm2}
          name={name}
          lastName={lastName}
          email={email}
          phone={phone}
          city={city}
          address={address}
        />
      )}
    </Fragment>
  );
};

export default Form;
