const FormView = require('./views/formView');
const ResultView = require('./views/resultView');
const PrimeCounter = require('./models/primeCounter');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const primeCounter = new PrimeCounter();
  primeCounter.bindEvents()

  const resultView = new ResultView();
  resultView.bindEvents()
});
