import { useState } from 'react';
import { CalcData } from './interfaces';

const initialCalcData = {
  arg1: null,
  arg2: null,
  operator: null
}
const operators = ['+', '-', '*', '/'];
const isOperator = (operator: any): boolean => { return operators.includes(operator) };
const hasDot = (argument: any): boolean => { return /\./.test(argument) };

export const useCalculator = () => {
  const [calcData, setCalcData] = useState<CalcData>(initialCalcData);

  const checkData = (value: any) => {
    if (!isOperator(value)) {
      if (calcData.operator) {
        if (value === '.' && hasDot(calcData.arg2?.toString())) {
          return;
        } else {
          console.log(calcData);
          // setCalcData((prev: any) => );
        }
      } else {
        if (value === '.' && hasDot(calcData.arg1?.toString())) {
          return;
        } else {
          console.log(calcData);
        }
      }
    } else {
      if (calcData.arg1) {
        setCalcData({ ...calcData, operator: value });
        if (calcData.arg2) {
          calculate();
          setCalcData({ ...calcData, operator: value });
        }
      }
    }
  }

  const calculate = () => {

  }

  return {
    calcData,
    checkData
  }
}