import React from "react";
import { Fragment, useState } from "react";
import Arrow from "../images/arrow-left.png";
import Form3 from "./Form3";

const Form2 = ({
  completedForm,
  setCompletedForm,
  completedForm2,
  setCompletedForm2,
  objClient,
}) => {
  const [documentType, setDocumentType] = useState("");
  const [numberDocument, setNumberDocument] = useState("");
  const [commercialName, setCommercialName] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [typeClient, setTypeClient] = useState("Natural");
  const [numberShipments, setNumberShipments] = useState("");

  const objClient2 = {
    ...objClient,
    tipoDeDocumento: documentType,
    numeroDeDocumento: numberDocument,
    nombreComercial: commercialName,
    razonSocial: razonSocial,
    tipoCliente: typeClient,
    numeroEnvios: numberShipments,
  };

  const document = [
    { label: "Tipo de Documento" },
    {
      label: "NIT",
      value: "nit",
    },
    {
      label: "Cédula de Ciudadanía",
      value: "cédula de ciudadnía",
    },
    {
      label: "Tarjeta de Identidad",
      value: "tarjeta de identidad",
    },
    {
      label: "Pasaporte",
      value: "pasaporte",
    },
    {
      label: "Cédula de Extranjería",
      value: "cédula de extranjería",
    },
  ];

  const shipment = [
    {
      label: "Actualmente ¿Cuántos envíos haces al mes?",
    },
    {
      label: "1 a 30 envíos",
      value: "1 a 30 envíos",
    },
    {
      label: "30 a 200 envíos",
      value: "30 a 200 envíos",
    },
    {
      label: "200 a 500 envíos",
      value: "200 a 500 envíos",
    },
    {
      label: "500 a 5000 envíos",
      value: "500 a 5000 envíos",
    },
    {
      label: "Más de 5000 envíos",
      value: "Más de 5000 envíos",
    },
  ];

  return (
    <Fragment>
      {!completedForm2 ? (
        <>
          <div className="container-form2">
            <div className="top-form2">
              <div className="sub-top-form2">
                <img
                  type="button"
                  className="img-flecha1"
                  src={Arrow}
                  alt="flecha a la izquierda"
                  onClick={() => setCompletedForm(false)}
                />
                <p className="text-form2">Diligencia tus datos</p>
              </div>
              <p className="sub-text-form2">
                Los campos con * son obligatorios
              </p>
            </div>
            <form className="form2" autoComplete="off">
              {typeClient === "Natural" ? (
                <>
                  <div className="select-form">
                    <select
                      className="select"
                      data-bouncer-message="*Selecciona tu tipo de documento"
                      value={document.value}
                      onChange={(e) => setDocumentType(e.target.value)}
                    >
                      {document.map((opcion) => (
                        <option value={opcion.value}>{opcion.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form2-input" autoComplete="off">
                    <label className="label">Número de identificación</label>
                    <input
                      type="number"
                      data-bouncer-message="*Tu identificación debe tener más de 5 dígitos"
                      minLength="5"
                      value={numberDocument}
                      autocomplete="new-password"
                      className="input"
                      placeholder="0123456789"
                      required
                      onChange={(e) => setNumberDocument(e.target.value)}
                    ></input>
                    <span className="underline"></span>
                    <span className="label undertext">
                      *Escríbelos sin puntos, ni guiones y sin dígito de
                      verificación
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="form2-input">
                    <label className="label">Número de identificación</label>
                    <input
                      type="number"
                      value={numberDocument}
                      autocomplete="new-password"
                      className="input"
                      placeholder="0123456789"
                      required
                      onChange={(e) => setNumberDocument(e.target.value)}
                    ></input>
                    <span className="underline undertext"></span>
                    <span className="label">
                      *Escríbelos sin puntos, ni guiones y sin dígito de
                      verificación
                    </span>
                  </div>
                  <div className="form2-input">
                    <label className="label">Razón Social</label>
                    <input
                      type="text"
                      value={razonSocial}
                      autocomplete="new-password"
                      className="input"
                      required
                      onChange={(e) => setRazonSocial(e.target.value)}
                    ></input>
                    <span className="underline"></span>
                  </div>
                </>
              )}
              <div className="person">
                <p className="select-person">Tipo de Persona</p>
                <div className="typeselect">
                  <input
                    onChange={(e) => setTypeClient("Natural")}
                    type="radio"
                    value="Natural"
                    id="type1"
                    cheched
                  />
                  <label for="type1" className="type">
                    {" "}
                    Persona Natural
                  </label>
                </div>
                <div className="typeselect">
                  <input
                    onClick={(e) => setTypeClient("Juridica")}
                    type="radio"
                    value="Juridica"
                    id="type2"
                  />
                  <label for="type2" className="type">
                    {" "}
                    Persona Jurídica
                  </label>
                </div>
              </div>
              <div className="form2-input">
                <label className="label">NombreComercial</label>
                <input
                  type="text"
                  value={commercialName}
                  autocomplete="new-password"
                  className="input"
                  placeholder="Mairena"
                  required
                  onChange={(e) => setCommercialName(e.target.value)}
                ></input>
                <span className="underline"></span>
                <span className="label undertext">
                  *El nombre de tu tienda o comercio. Estará en el campo de
                  remitente de las guías que realices.
                </span>
              </div>
              <div className="select-form">
                <select
                  className="select"
                  value={shipment.value}
                  onChange={(e) => setNumberShipments(e.target.value)}
                >
                  {shipment.map((opcion) => (
                    <option value={opcion.value}>{opcion.label}</option>
                  ))}
                </select>
              </div>
            </form>
            <button
              type="submit"
              className="button-form2 continue"
              onClick={() => {
                ((documentType &&
                  numberDocument &&
                  commercialName &&
                  typeClient &&
                  numberShipments) ||
                  (numberDocument &&
                    razonSocial &&
                    commercialName &&
                    numberShipments)) !== ""
                  ? setCompletedForm2(true)
                  : setCompletedForm2(false);
              }}
            >
              Continuar
            </button>
          </div>{" "}
        </>
      ) : (
        <Form3
          completedForm2={completedForm2}
          setCompletedForm2={setCompletedForm2}
          objClient2={objClient2}
        />
      )}
    </Fragment>
  );
};
export default Form2;
