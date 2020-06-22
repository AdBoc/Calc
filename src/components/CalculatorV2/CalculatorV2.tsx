import React, { useState } from 'react';
import { calculator } from './CalculatorClass';
import { displayObject } from "./interfaces";
import './Calculator.scss';

const CalculatorV2 = () => {
  const [arguents, setArguments] = useState<displayObject>({ currentArg: '', prevArg: '' })

  const handleNumber = (e: any) => {
    calculator.appendToArgument(e.target.value);
    setArguments(calculator.updateDisplay());
  }

  const handleOperator = (e: any) => {
    calculator.chooseOperator(e.target.value);
    setArguments(calculator.updateDisplay());
  }

  const calculate = () => {
  }

  const clear = () => {
    calculator.clear();
    setArguments(calculator.updateDisplay());
  }

  const deleteChar = () => {
    calculator.deleteChar();
    setArguments(calculator.updateDisplay());
  }

  return (
    <div className="flex2">
      <div>Input Prev: {arguents.prevArg}</div>
      <div>Input: {arguents.currentArg}</div>
      <div>
        <button className="button2" onClick={handleNumber} value="1">1</button>
        <button className="button2" onClick={handleNumber} value="2">2</button>
        <button className="button2" onClick={handleNumber} value="3">3</button>
      </div>
      <div>
        <button className="button2" onClick={handleNumber} value="4">4</button>
        <button className="button2" onClick={handleNumber} value="5">5</button>
        <button className="button2" onClick={handleNumber} value="6">6</button>
      </div>
      <div>
        <button className="button2" onClick={handleNumber} value="7">7</button>
        <button className="button2" onClick={handleNumber} value="8">8</button>
        <button className="button2" onClick={handleNumber} value="9">9</button>
      </div>
      <div>
        <button className="button2" onClick={handleNumber} value="0">0</button>
        <button className="button2" onClick={handleOperator} value="+">+</button>
        <button className="button2" onClick={handleOperator} value="-">-</button>
        <button className="button2" onClick={handleOperator} value="*">*</button>
        <button className="button2" onClick={handleOperator} value="/">/</button>
        <button className="button2" onClick={handleNumber} value=".">.</button>
        <button className="button2" onClick={calculate} value="=">=</button>
        <button className="button2" onClick={clear}>clear</button>
        <button className="button2" onClick={deleteChar}>delete</button>
      </div>
    </div>
  )
}

export default CalculatorV2;