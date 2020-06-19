import React, { useState } from 'react';
import './Calculator.scss';

const Calcualtor = (): JSX.Element => {
  const [arg1, setArg1] = useState('');
  const [arg2, setArg2] = useState<any>('');
  const [operator, setOperator] = useState<any>('');

  const handleClick = (e: any) => {
    const { value } = e.target;
    if (value === "+" || value === '-' || value === '*' || value === '/') {
      if (arg1 !== '') {
        setOperator(value)
      }
      if (arg1 !== '' && arg2 !== '') {
        calculate();
        setOperator(value);
      }
    } else {
      if (operator === '') {
        setArg1((prev: any) => prev + value);
      } else {
        setArg2((prev: any) => prev + value);
      }
    }
  }

  const clear = () => { //operator robi sie pusty
    setArg1('');
    setArg2('');
    setOperator('');
  }

  const calculate = () => { //opertator robi sie pusty
    let response = 0;
    if (operator === '+')
      response = +(arg1) + +(arg2);
    else if (operator === '-')
      response = +(arg1) - +(arg2);
    else if (operator === '*')
      response = +(arg1) * +(arg2);
    else if (operator === '/')
      response = +(arg1) / +(arg2);
    clear();
    console.log(response);
    setArg1(response.toString());
  }

  return (
    <>
      <div className="flex">Calculator
        <div>Input: {`${arg1} ${operator} ${arg2}`}</div>
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

//jesli qrgument 2 w expression nie jest puste a ktos wcisa nasteny przycisk to jest to roznowazne z = 

//zachowania kalkulatorowe, ograniczenie ilosci znakow wpisaywanych, 
//nie mozna posawic dwoch kropek i znakow, cofanie backspacem wpisanej liczby
// const [history, setHistory] = useState('');
// const [result, setResult] = useState<any>('');
// const [calculatorInputData, setCalculatorInputData] = useState<any>({arg1: '', arg2: '', opertator: ''})