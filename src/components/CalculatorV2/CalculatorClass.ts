class Calculator2 {
  private _arg1: number = 0;
  private _arg2: number = 0;
  private _result: number = 0;
  private opertator: string = "+";
  private history: string = "";
  private expression: string = "";

  public sum() {
    this.result = this.arg1 + this.arg2;
  }

  public subtract() {
    this.result = this.arg1 - this.arg2;
  }

  public multiplication() {
    this.result = this.arg1 * this.arg2;
  }

  public division() {
    this.result = this.arg1 / this.arg2;
  }

  public get arg1(): number {
    return this._arg1;
  }

  public set arg1(value: number) {
    this._arg1 = value;
  }

  public get arg2(): number {
    return this._arg2;
  }

  public set arg2(value: number) {
    this._arg2 = value;
  }

  public get result(): number {
    return this._result;
  }

  public set result(value: number) {
    this._result = value;
  }
}

export const calculator = new Calculator2();
