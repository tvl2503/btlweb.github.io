const buttonStart = document.querySelector('.btn-start');

let counterTimes = 5;
let intervalTimes;
let timeout;

let point = 0;
let currentValidity;

const operatorArray = ['+', '-'];
const validity = [0, 1];
const pointValue = document.querySelector('.point');
const firstValue = document.querySelector('.first');
const secondValue = document.querySelector('.second');
const operatorValue = document.querySelector('.operator');
const resultValue = document.querySelector('.result');
const counterValue = document.querySelector('.counter-element');

const buttonTrue = document.querySelector('.btn-correct');
const buttonFalse = document.querySelector('.btn-false');

const randomNumberByRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomElementArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

const onTextContentCounter = () => {
  counterValue.textContent = counterTimes;
}

const onTextContentPoint = () => {
  pointValue.textContent = point;
}

const onReset = () => {
  point = 0;
  counterTimes = 0;
  counterValue.textContent = counterTimes;
  buttonTrue.removeEventListener('click', onHandleClick);
  buttonFalse.removeEventListener('click', onHandleClick);

  if (intervalTimes) {
    clearInterval(intervalTimes);
  }

  if (timeout) {
    clearTimeout(timeout);
  }
}

const onFinishGame = () => {
  alert(`You finished game after 60s, points: ${point}`);
  onReset();
}

const randomValue = () => {
  counterTimes = 5;
  onTextContentCounter();
  const first = randomNumberByRange(1, 10);
  const second = randomNumberByRange(1, 10);
  const operatorRandom = getRandomElementArray(operatorArray);
  const valid = getRandomElementArray(validity);
  const resultMath = eval(`${first} ${operatorRandom} ${second}`);
  firstValue.textContent = first;
  secondValue.textContent = second;
  operatorValue.textContent = operatorRandom;
  currentValidity = valid;
  resultValue.textContent = valid ? resultMath : randomNumberByRange(resultMath - 3, resultMath + 3);
};

const onHandleCounter = () => {
  if (counterTimes === 0) {
    alert(`You lose, point: ${point}`);
    return onReset();
  }
  counterTimes = counterTimes - 1;
  counterValue.textContent = counterTimes;
}

const onHandleClick = (event) => {
  const dataValid = +event.target.getAttribute('data-valid');
  if (dataValid === currentValidity) {
    randomValue();
    point++;
    onTextContentPoint();
  } else {
    alert(`You lose, point: ${point}`);
    onReset();
    onTextContentCounter();
  }
}

buttonTrue.addEventListener('click', onHandleClick);
buttonFalse.addEventListener('click', onHandleClick);




const onStartGame = () => {
  const body = document.querySelector('.container-body');
  buttonStart.remove();
  body.style.display = 'block';

  randomValue();
  intervalTimes = setInterval(onHandleCounter, 1000);

  timeout = setTimeout(onFinishGame, 60 * 1000);

}

buttonStart.addEventListener('click', onStartGame);

const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isEmail = (value) => regex.test(value);

const onCheckInput = (event) => {
  const isValid = isEmail(event.target.value);
  if (!isValid) {
    document.getElementById('text').style.display = 'block';
  } else {
    document.getElementById('text').style.display = 'none';
  }
};
document.getElementById('input').addEventListener('input', onCheckInput);