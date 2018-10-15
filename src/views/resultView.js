const PubSub = require('../helpers/pub_sub')

const ResultView = function(){

}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeCounter:booleanResult', (event) => {
    const boolResult = event.detail;
    this.displayResult(boolResult)
  })
};

ResultView.prototype.displayResult = function(boolNum){
  let msg = "No! That's not a prime number."
  if(boolNum === true){
    msg = "Yes! The number is a prime."
  }
  const resultElement = document.querySelector('#result')
  resultElement.textContent = msg;
};

module.exports = ResultView;
