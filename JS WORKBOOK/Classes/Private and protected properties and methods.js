class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10




  class CoffeeMachine {
    #waterLimit = 200;
  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // can't access privates from outside of the class
  coffeeMachine.#fixWaterAmount(123); // Error
  coffeeMachine.#waterLimit = 1000; // Error



  class MegaCoffeeMachine extends CoffeeMachine {
    method() {
      console.log( this.#waterAmount ); // Error: can only access from CoffeeMachine
    }
  }



//   With private fields that’s impossible: this['#name'] doesn’t work. That’s a syntax limitation to ensure privacy.