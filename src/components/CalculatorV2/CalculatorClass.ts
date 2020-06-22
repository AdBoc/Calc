import { displayObject } from "./interfaces";

class Calculator2 {
  private _currentArg: string = "";
  private _prevArg: string = "";
  private _operator: string = "";

  public clear() {
    this._currentArg = "";
    this._prevArg = "";
  }

  public appendToArgument(value: string) {
    if (value === "." && this._currentArg.includes(".")) return;
    this._currentArg += value;
  }

  public chooseOperator(value: string) {
    this._operator = value;
    this._prevArg = this._currentArg;
    this._currentArg = "";
  }

  public computee() {}

  public deleteChar(): void {
    this._currentArg = this._currentArg.slice(0, -1);
  }

  public updateDisplay(): displayObject {
    let prevArg = this._prevArg + this._operator;
    return { currentArg: this._currentArg, prevArg: prevArg };
  }
}

export const calculator = new Calculator2();
