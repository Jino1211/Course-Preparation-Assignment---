let ladder = {
    step: 0,
    up() {
      this.step++;
      return this.step;   // with this line the function return value every called
    },
    down() {
      this.step--;
      return this.step;     /// with this line the function return value every called
    },
    showStep: function() {
      alert( this.step );
    }
  };