import { displayObject } from "./interfaces";

class Calculator2 {
  private _currentArg: string = "";
  private _prevArg: string = "";
  private _operator: string = "";

  private updateDisplay(): displayObject {
    let prevArg = this._prevArg + " " + this._operator;
    return { currentArg: this._currentArg, prevArg: prevArg };
  }

  public clear(): displayObject {
    this._currentArg = "";
    this._prevArg = "";
    this._operator = "";
    return this.updateDisplay();
  }

  public appendToArgument(value: string): displayObject {
    if (value === "." && this._currentArg.includes("."))
      return { currentArg: this._currentArg, prevArg: this._prevArg };
    else if (value === "." && this._currentArg === "") {
      this._currentArg += "0" + value;
    } else {
      this._currentArg += value;
    }
    return this.updateDisplay();
  }

  public chooseOperator(value: string): displayObject {
    if (this._operator === "" && this._currentArg !== "") {
      this._operator = value;
      this._prevArg = this._currentArg;
      this._currentArg = "";
    } else if (this._prevArg !== "" && this._currentArg !== "") {
      this.computee();
      this._operator = value;
    } else {
      this._operator = value;
    }
    return this.updateDisplay();
  }

  public computee(): displayObject {
    let result = 0;
    switch (this._operator) {
      case "+":
        result = +this._prevArg + +this._currentArg;
        break;
      case "-":
        result = +this._prevArg - +this._currentArg;
        break;
      case "*":
        result = +this._prevArg * +this._currentArg;
        break;
      case "/":
        result = +this._prevArg / +this._currentArg;
        break;
    }
    this.clear();

    // this._prevArg = result.toFixed(3).toString();
    this._prevArg = (Math.round(result * 100) / 100).toString();
    return this.updateDisplay();
  }

  public deleteChar(): displayObject {
    this._currentArg = this._currentArg.slice(0, -1);
    return this.updateDisplay();
  }
}

export const calculator = new Calculator2();
