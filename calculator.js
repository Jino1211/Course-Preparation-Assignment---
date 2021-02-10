let calculator = {
    // ... your code ...
    mul() {
        return this.first * this.second;
    },
    sum() {
        return this.first + this.second;
        
    },
    read() {
        this.first =  Number(prompt('first number'));
        this.second =  Number(prompt('second number'));
    },
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  console.log(calculator.sum());
  console.log(calculator.mul());