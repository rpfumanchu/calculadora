import "./App.css";

import Boton from "./componentes/Boton.js";
import Pantalla from "./componentes/Pantalla.js";
import BotonClear from "./componentes/BotonClear.js"
import Logo from "./componentes/Logo.js"

import { useState } from "react"
/*importamos mathjs para poder hacer las funciones matematicas*/ 
import { evaluate, } from "mathjs";





function App() {

  const[input, setInput] = useState("");

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const agregarClear = valor => {
    setInput("");
  };

  const calcularResultado = () => {
    /*si queremos podemos darle un condicional para que nos salte un mensaje de alerta si damos al = sin haber metido datos*/
    if (input){
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para poder realizar los calculos")
    }

  };
  
 
  return (
    <div className="App">       
      <Logo
        imagen="logo"/>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={agregarClear}>Clear</BotonClear>
          <Boton manejarClic={agregarInput}>%</Boton>
          <Boton manejarClic={agregarInput}>^</Boton>
        </div>
      
      </div>

    </div>  

    
    
  );
}



export default App;
