import validator from 'validator';

const buttonTest = document.querySelector('#test-btn');

const inputText = document.querySelector('#text-input');
const selectInput = document.querySelector('#select-input');
buttonTest.addEventListener('click', () => {
  switch (selectInput.value) {
  case 'email':
    console.log(validator.isEmail(inputText.value));
    break;
  case 'phone-Number':
    console.log(validator.isMobilePhone(inputText.value, ['pt-BR']));
    break;
  case 'license-Plate':
    console.log(validator.isLicensePlate(inputText.value, ['pt-BR']));
    break;
  default:

    break;
  }
  validator.isEmail(inputText.value);
});
