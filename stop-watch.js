const seconds = document.querySelector(
  '.js-secs');
const mins = document.querySelector(
  '.js-mins');
const hours = document.querySelector(
  '.js-hours');

 sec = 0;
 min = 0;
 hrs = 0;

const startButton = document.querySelector(
  '.js-start-button');
const stopButton = document.querySelector(
  '.js-stop-button');
const resetButton = document.querySelector(
  '.js-reset-button');


startButton.addEventListener('click', () => {
start();
})

stopButton.addEventListener('click', () => {
 stop();
})

resetButton.addEventListener('click', () => {
reset();
})

let running = false;
let timer;

function start() {
if (!running) {
  if (sec === 0) {
  timer = setInterval(() => {
    sec += 1;
    seconds.innerHTML = sec;

  if (sec === 60) {
    sec = 0;
    min +=1;
    mins.innerHTML = min;
  } else if (min === 60) {
    min = 0;
    mins.innerHTML = min;
    hrs += 1;
    hours.innerHTML = hrs;
  } else if (hrs === 24) {
    hrs = 0;
    hours.innerHTML = hrs;
  }
  running = true;
  }, 1000);
 }
}
}
 function stop() {
  clearInterval(timer);

  running = false;
 }

 function reset() {
  clearInterval(timer);

  seconds.innerHTML = '00';
  mins.innerHTML = '00';
  hours.innerHTML = '00';

  running = false;

  sec = 0;
  min = 0;
  hrs = 0;
 }
