function callBeep() {
  var audio = new Audio("audio\beat.mp3");
  audio.play();
  console.log('Sound')
}

// setInterval(callBeep, 1000);