//zachowania kalkulatorowe, ograniczenie ilosci znakow wpisaywanych //history
//cofanie backspacem wpisanej liczby
import React, { useState } from 'react';
import { useCalculator } from './useCalculator';
import './Calculator.scss';

const Calcualtor = (): JSX.Element => {
  const { calcData, checkData } = useCalculator();

  const handleClick = (e: any) => {
    const { value } = e.target;
    checkData(value);
  }

  const calculate = () => {
  }

  const clear = () => {
  }

  return (
    <>
      <div className="flex">Calculator
        <div>Input:</div>
        <div>
          <button className="button" value="1" onClick={handleClick}>1</button>
          <button className="button" value="2" onClick={handleClick}>2</button>
          <button className="button" value="3" onClick={handleClick}>3</button>
        </div>
        <div>
          <button className="button" value="4" onClick={handleClick}>4</button>
          <button className="button" value="5" onClick={handleClick}>5</button>
          <button className="button" value="6" onClick={handleClick}>6</button>
        </div>
        <div>
          <button className="button" value="7" onClick={handleClick}>7</button>
          <button className="button" value="8" onClick={handleClick}>8</button>
          <button className="button" value="9" onClick={handleClick}>9</button>
        </div>
        <div>
          <button className="button" value="0" onClick={handleClick}>0</button>
          <button className="button" value="+" onClick={handleClick}>+</button>
          <button className="button" value="-" onClick={handleClick}>-</button>
          <button className="button" value="*" onClick={handleClick}>*</button>
          <button className="button" value="/" onClick={handleClick}>/</button>
          <button className="button" value="." onClick={handleClick}>.</button>
          <button className="button" value="=" onClick={calculate}>=</button>
          <button className="button" value="clear" onClick={clear}>clear</button>
        </div>
      </div>
    </>
  )
}

export default Calcualtor;