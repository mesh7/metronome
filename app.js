const tempoDisplay = document.querySelector(".bpm-display-tempo");
const textDisplay = document.querySelector(".bpm-display-text");
const tempoText = document.querySelector(".tempo-text");
const tempoDecrease = document.querySelector(".tempo-decrease");
const tempoSlider = document.querySelector(".slider");
const tempoIncrease = document.querySelector(".tempo-increase");
const metronomeButton = document.querySelector(".metronome-button");
const bpmDecrease = document.querySelector(".bpm-decrease");
const bpmIncrease = document.querySelector(".bpm-increase");
const bpmValue = document.querySelector(".bpm-value");

let bpm = 140;
let beatsPerMeasure = 4;

tempoDecrease.addEventListener("click", () => {
  if (bpm <= 20) {
    return;
  }
  bpm--;
  updateMetronome();
});

tempoIncrease.addEventListener("click", () => {
  if (bpm >= 280) {
    return;
  }
  bpm++;
  updateMetronome();
});

tempoSlider.addEventListener("input", () => {
  bpm = tempoSlider.value;
  updateMetronome();
});

bpmDecrease.addEventListener("click", () => {
  if (beatsPerMeasure <= 2) {
    return;
  }
  beatsPerMeasure--;
  bpmValue.textContent = beatsPerMeasure;
});

bpmIncrease.addEventListener("click", () => {
  if (beatsPerMeasure >= 12) {
    return;
  }
  beatsPerMeasure++;
  bpmValue.textContent = beatsPerMeasure;
  console.log(bpmValue);
});

function updateMetronome() {
  tempoDisplay.textContent = bpm;
  tempoSlider.value = bpm;
}

// function callBeep() {
//   var audio = new Audio("audio\beat1.mp3");
//   audio.play();
//   console.log("Sound");
// }

// callBeep();

// setInterval(callBeep, 1000);
