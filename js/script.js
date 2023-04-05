import { Modal } from './modal.js';
import { alertError } from './alert-error.js';
import {calculateBMI, notANumber} from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANUmber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANUmber) {
    alertError.open();
    return;
  }

  alertError.close();
  
  const result = calculateBMI(weight, height);
  displayResultMessage(result);
}


function displayResultMessage(result) {
  const message = `Your BMI is ${result}`;
  Modal.message.innerText = message;
  Modal.open();
}


inputWeight.oninput = () => alertError.close();
inputHeight.oninput = () => alertError.close();