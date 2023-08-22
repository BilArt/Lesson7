function Calculator() {
  this.read = function () {
    this.a = parseFloat(prompt("Введіть перше число:"));
    this.b = parseFloat(prompt("Введіть друге число:"));
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

var calculator = new Calculator();

calculator.read();

console.log("Сума чисел:", calculator.sum());
console.log("Множення чисел:", calculator.mul());
