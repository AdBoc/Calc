import React, { useState } from 'react';
import { calculator } from './CalculatorClass';

const CalculatorV2 = () => {

  const handleButton = (e: any) => {
    const {value} = e.target;
    console.log(value);
  }

  const handleOperator = () => {
  }

  const calculate = () => {
  }

  const clear = () => {
  }

  return (
    <div className="flex">
      <div>Input: </div>
      <div>
        <button className="button" onClick={handleButton} value="1">1</button>
        <button className="button" onClick={handleButton} value="2">2</button>
        <button className="button" onClick={handleButton} value="3">3</button>
      </div>
      <div>
        <button className="button" onClick={handleButton} value="4">4</button>
        <button className="button" onClick={handleButton} value="5">5</button>
        <button className="button" onClick={handleButton} value="6">6</button>
      </div>
      <div>
        <button className="button" onClick={handleButton} value="7">7</button>
        <button className="button" onClick={handleButton} value="8">8</button>
        <button className="button" onClick={handleButton} value="9">9</button>
      </div>
      <div>
        <button className="button" onClick={handleButton} value="0">0</button>
        <button className="button" value="+">+</button>
        <button className="button" value="-">-</button>
        <button className="button" value="*">*</button>
        <button className="button" value="/">/</button>
        <button className="button" value=".">.</button>
        <button className="button" value="=">=</button>
        <button className="button" value="clear">clear</button>
      </div>
    </div>
  )
}

export default CalculatorV2;