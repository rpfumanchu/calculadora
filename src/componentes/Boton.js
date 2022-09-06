import React from "react";
import "../hojas-de-estilo/Boton.css"

function Boton(props) {

const esOperador = valor => {
  /* con isNaN le decinos si es un numero, y si el valor es un punto y si el valor es un = si no es ninguno de estos entonces esOperador*/ 
  return isNaN(valor) && (valor !== '.') && (valor !== '=');
}

  return (
    <div
    /*con las comillas invertidas nos permite añadir template literals o plantillas literales...*/ 
    /*el metodo trim nos permite remover espacis en una plantilla y trimEnd es lo mismo pero al final de la plantilla*/
      className={`boton-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}>
      {props.children}
    </div>
  )
}


export default Boton;