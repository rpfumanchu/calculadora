import React from "react";
/*una forma alternativa de definir los componentes funcionales no siempre tenemos que usar la palabra function,
podemos usar const y una funcion flecha,se suele usar para cosas sencillas y pequeñas*/ 
import "../hojas-de-estilo/Pantalla.css"
const Pantalla = ({ input }) => (
  <div className= "input">
    {input}
  </div>
  
)


export default Pantalla