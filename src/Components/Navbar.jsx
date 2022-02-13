import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-mipaquete.png"



const Navbar = () => {
  return (
    <header className='header'>
      <img className='logo-header'src={ Logo } alt='logo Mi paquete . com'/>
        <li className='lista-links nav'>
          <Link to="/cotizacion">Inicio</Link>
        </li>
        <li className='lista-links nav'>
          <a className='external-link'
            href="https://mipaquete.com/como-funciona/"
            target="_blank"
            rel="noreferrer noopener"
          >
            ¿Cómo funciona?
          </a>
        </li>
        <li className='lista-links nav'>
          <a className='external-link'
            href="https://mipaquete.com/automatizacion/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Integra tu tienda online
          </a>
        </li>
        <li className='lista-links nav'>
          <a className='external-link'
            href="https://mipaquete.com/blog/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Blogística
          </a>
        </li>
        <li className='lista-links nav'>
          <Link to="/acumula-puntos">Puntos mipaquete</Link>
        </li>
        {/* <li className='lista-links button-right'>
          <Link to="/ingreso">Ingresa</Link>
        </li>
        <li className='lista-links button-right'>
          <Link to="/registro">Regístrate</Link>
        </li>  */} 
    </header>
  );
};
export default Navbar;
