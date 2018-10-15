const PubSub = require('../helpers/pub_sub')

const PrimeCounter = function (){

};

PrimeCounter.prototype.bindEvents = function(){
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail
    const result = this.numberIsPrime(inputtedNumber)
    console.log(result) // WHY DOES THIS NOT PRINT???
    PubSub.publish('PrimeCounter:booleanResult', result)
  });
}

PrimeCounter.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeCounter;
