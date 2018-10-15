const PubSub = require('../helpers/pub_sub')

const FormView = function(){

}

FormView.prototype.bindEvents = function(){
  const number = this.getValue();
  console.log(number); // This comes back as undefined
  PubSub.publish('FormView:number-submitted', number);
}

FormView.prototype.getValue = function(){
  const form = document.querySelector('#prime-checker-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputtedNumber = event.target.number.value;
    console.log(inputtedNumber); // This prints out the input number
    return inputtedNumber;
  })
};

module.exports = FormView;
