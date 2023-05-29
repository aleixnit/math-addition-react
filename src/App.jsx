import "./App.css";
import React, { useState } from "react";

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

export default function App() {
  const [firstNumber, setFirstNumber] = useState(randomNumber());
  const [secondNumber, setSecondNumber] = useState(randomNumber());
  const [inputNumber, setInputNumber] = useState("");
  const [showMessage, setShowMessage] = useState(false);


  //calculo lq variable isCorrect en función de variable de estado. Tenemos la certeza de que cada vez que se modifica una variable de estado, esta instruccion se vuelve a ejecutar.
let isCorrect = firstNumber + secondNumber === +inputNumber;

  function handleClick() {
//cada vez que haga click muestrame los mensajes

    //ponemos el +delante o (number(inputNumber)) de inputNumber para transformarlo en un number ya que viene como string desde el input
    // if (isCorrect) {
    //   console.log("La suma es correcta");
    // } else {
    //   console.log("La suma es incorrecta");
    // }
    setShowMessage(true);
  }

  function handleReset() {
    setInputNumber('');
    setFirstNumber(randomNumber());
    setSecondNumber(randomNumber());
    setShowMessage(false);
  }



  return (
    <div className="App">
      <div id="canvas">
        <div id="primary-number">{firstNumber}</div>
        <div id="add">+</div>
        <div id="secondary-number">{secondNumber}</div>
        <div id="equal">=</div>
        <div>
          <input
            type="number"
            id="guess"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
        </div>

        <button onClick={handleClick} id="btn">
          Check
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
  
  {/* TERNARIO PARA MOSTRAR/NO MOSTRAR LOS MENSAJES */}
      <div style={{display: showMessage ? 'block' : 'none'}}>
      {/* EL OPERADOR AND (&&) HACE QUE TODO LO QUE ESTE A LA DERECHA EN JSX SE EVALUE COMO TRUE Y LO MUESTRE O FALSE Y QUE NO SE MUESTRE */}
       { isCorrect && <p className="correct">El resultado es correcto</p>}
        { !isCorrect && <p className="incorrect">El resultado es incorrecto</p>}
      </div>
    </div>
  );
}
