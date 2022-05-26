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
let tempoTextString = "Medium";

tempoDecrease.addEventListener("click", () => {
  if (bpm <= 20) {
    return;
  }
  bpm--;
  validateTempo();
  updateMetronome();
});

tempoIncrease.addEventListener("click", () => {
  if (bpm >= 280) {
    return;
  }
  bpm++;
  validateTempo();
  updateMetronome();
});

tempoSlider.addEventListener("input", () => {
  bpm = tempoSlider.value;
  validateTempo();
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
  setText();
}

function setText() {
  if (bpm <= 40) {
    tempoTextString = "Super Slow";
  } else if (bpm >= 40 && bpm < 80) {
    tempoTextString = "Slow";
  } else if (bpm >= 80 && bpm < 120) {
    tempoTextString = "Getting there";
  } else if (bpm >= 120 && bpm < 180) {
    tempoTextString = "Nice and Steady";
  } else if (bpm >= 180 && bpm < 220) {
    tempoTextString = "Rock n' Roll";
  } else if (bpm >= 220 && bpm < 240) {
    tempoTextString = "Funky!";
  } else {
    tempoTextString = "Bethoven";
  }

  tempoText.textContent = tempoTextString;
}

function validateTempo() {
  if (bpm <= 20) {
    return;
  }
  if (bpm >= 280) {
    return;
  }
}
// function callBeep() {
//   var audio = new Audio("audio\beat1.mp3");
//   audio.play();
//   console.log("Sound");
// }

// callBeep();

// setInterval(callBeep, 1000);
