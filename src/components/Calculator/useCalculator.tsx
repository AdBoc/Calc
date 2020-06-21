import { useState } from 'react';
import { CalcData } from './interfaces';

const initialCalcData = {
  arg1: null,
  operator: null,
  arg2: null,
}
const operators = ['+', '-', '*', '/'];
const isOperator = (operator: string): boolean => { return operators.includes(operator) };
const hasDot = (argument: string | null): boolean => { return /\./.test(argument!) };

export const useCalculator = () => {
  const [calcData, setCalcData] = useState<CalcData>(initialCalcData);

  const checkData = (value: string) => {
    if (!isOperator(value)) {
      if (calcData.operator) {
        if (value === '.' && hasDot(calcData.arg2)) {
          return;
        } else {
          if (calcData.arg2)
            value = calcData.arg2 + value;
          setCalcData((prev) => { return { ...prev, arg2: value } })
        }
      } else {
        if (value === '.' && hasDot(calcData.arg1)) {
          return;
        } else {
          if (calcData.arg1)
            value = calcData.arg1 + value;
          setCalcData((prev) => { return { ...prev, arg1: value } })
        }
      }
    } else {
      if (calcData.arg1) {
        setCalcData({ ...calcData, operator: value });
        if (calcData.arg2) {
          calculate();
          setCalcData(prev => { return { ...prev, operator: value } });
        }
      }
    }
  }

  const calculate = () => {
    let response = 0;
    const { operator, arg1, arg2 } = calcData;
    switch (operator) {
      case '+':
        response = +(arg1!) + +(arg2!);
        break;
      case '-':
        response = +(arg1!) - +(arg2!);
        break;
      case '*':
        response = +(arg1!) * +(arg2!);
        break;
      case '/':
        response = +(arg1!) / +(arg2!);
        break;
    }
    setCalcData({ arg1: response.toString(), operator: null, arg2: null });
  }

  const clear = () => {
    setCalcData(initialCalcData);
  }

  return {
    calcData,
    checkData,
    calculate,
    clear
  }
}