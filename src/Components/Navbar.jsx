import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div>
        <li>
          <Link to="/cotizacion">Inicio</Link>
        </li>
        <li>
          <a
            href="https://mipaquete.com/como-funciona/"
            target="_blank"
            rel="noreferrer noopener"
          >
            ¿Cómo funciona?
          </a>
        </li>
        <li>
          <a
            href="https://mipaquete.com/automatizacion/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Integra tu tienda online
          </a>
        </li>
        <li>
          <a
            href="https://mipaquete.com/blog/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Blogística
          </a>
        </li>
        <li>
          <Link to="/acumula-puntos">Puntos mipaquete</Link>
        </li>
        <li>
          <Link to="/ingreso">Ingresa</Link>
        </li>
        <li>
          <Link to="/registro">Regístrate</Link>
        </li>
      </div>
    </header>
  );
};
export default Navbar;
