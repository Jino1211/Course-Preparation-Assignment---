function Calculator () {

    this.mul = function() {
        return this.first * this.second;
    },
    this.sum = function() {
        return this.first + this.second;
        
    },
    this.read = function() {
        this.first =  Number(prompt('first number'));
        this.second =  Number(prompt('second number'));
    }
};
  
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );