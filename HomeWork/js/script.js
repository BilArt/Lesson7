function Calculator() {
  this.read = function () {
    this.firstValue = parseFloat(prompt("Введіть перше число:"));
    this.secondValue = parseFloat(prompt("Введіть друге число:"));
  };

  this.sum = function () {
    return this.firstValue + this.secondValue;
  };

  this.mul = function () {
    return this.firstValue * this.secondValue;
  };
}

var calculator = new Calculator();

calculator.read();

console.log("Сума чисел:", calculator.sum());
console.log("Множення чисел:", calculator.mul());
