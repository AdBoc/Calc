import React, { useState } from 'react';
import { calculator } from './CalculatorClass';
import { displayObject } from "./interfaces";
import './Calculator.scss';

const CalculatorV2 = () => {
  const [arguents, setArguments] = useState<displayObject>({ currentArg: '', prevArg: '' })

  const handleNumber = (e: any) => {
    setArguments(calculator.appendToArgument(e.target.value));
  }

  const handleOperator = (e: any) => {
    setArguments(calculator.chooseOperator(e.target.value));
  }

  const calculate = () => {
    setArguments(calculator.computee());
  }

  const clear = () => {
    setArguments(calculator.clear());
  }

  const deleteChar = () => {
    setArguments(calculator.deleteChar());
  }

  return (
    <div className="calculator__grid">
      <div className="display">
        <div className="display__prev">{arguents.prevArg}</div>
        <div className="display__current">{arguents.currentArg}</div>
      </div>
      <button className="button button__clear" onClick={clear}>clear</button>
      <button className="button button__delete" onClick={deleteChar}>delete</button>
      <button className="button" onClick={handleNumber} value="1">1</button>
      <button className="button" onClick={handleNumber} value="2">2</button>
      <button className="button" onClick={handleNumber} value="3">3</button>
      <button className="button" onClick={handleNumber} value="4">4</button>
      <button className="button" onClick={handleNumber} value="5">5</button>
      <button className="button" onClick={handleNumber} value="6">6</button>
      <button className="button" onClick={handleNumber} value="7">7</button>
      <button className="button" onClick={handleNumber} value="8">8</button>
      <button className="button" onClick={handleNumber} value="9">9</button>
      <button className="button button__zero" onClick={handleNumber} value="0">0</button>
      <button className="button button__sum" onClick={handleOperator} value="+">+</button>
      <button className="button button__minus" onClick={handleOperator} value="-">-</button>
      <button className="button button__multiplication" onClick={handleOperator} value="*">*</button>
      <button className="button button__divide" onClick={handleOperator} value="/">/</button>
      <button className="button" onClick={handleNumber} value=".">.</button>
      <button className="button button__equate" onClick={calculate} value="=">=</button>
    </div>
  )
}

export default CalculatorV2;