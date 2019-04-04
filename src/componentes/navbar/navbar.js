import React from 'react';
import './navbar.css'
import logo from './LogoSample_ByTailorBrands(11)(1).png'
import { Link } from 'react-router-dom';

function Navbar (props){
  
    return(
        <div>
        <Link to="/" className="logoHome"> <img src={logo} className="logo"alt="logo"/></Link>
        <Link  to="/sobremi" className="about">SOBRE MI</Link>
        <Link to="/proyectos" className="proyect">PROYECTOS</Link>
        <Link to="/contacto" className="contact" >CONTACTO</Link>
        {/*<div className="logoContact" onClick={props.onClick} ><span>CONTACTO</span></div> */} 
        </div>
    )
    
}

export default Navbar