import React from "react";
import "../App.css";



function Logo (props) {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        className="freecodecamp-logo"
        src={require(`../imagenes/freecodecamp-${props.imagen}.png`)}
        alt="foto de logo"/>
    </div>


  )
}

export default Logo;