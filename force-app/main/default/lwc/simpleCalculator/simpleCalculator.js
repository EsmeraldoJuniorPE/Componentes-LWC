import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
  @track number1;
  @track number2;
  @track result;

  handleNumberChange(event) {
    const field = event.target.dataset.id;
    if (field === 'number1') {
      this.number1 = event.target.value;
    } else if (field === 'number2') {
      this.number2 = event.target.value;
    }
  }

  add() {
    this.result = parseFloat(this.number1) + parseFloat(this.number2);
  }

  subtract() {
    this.result = parseFloat(this.number1) - parseFloat(this.number2);
  }

  multiply() {
    this.result = parseFloat(this.number1) * parseFloat(this.number2);
  }

  divide() {
    if (parseFloat(this.number2) !== 0) {
      this.result = parseFloat(this.number1) / parseFloat(this.number2);
    } else {
      this.result = 'Erro: Divisão por zero';
    }
  }
}