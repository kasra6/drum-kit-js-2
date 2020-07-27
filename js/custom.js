const keys = document.querySelectorAll("kbd");

function playSound(evt){
  const audio = document.querySelector(`audio[data-code='${evt.keyCode}']`);
  if (!audio) return;
  const key = document.querySelector(`kbd[data-code="${evt.keyCode}"]`);
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(evt){
  if (evt.propertyName !== 'transform') return; // skip if it's not a transform
  this.classList.remove("playing");
}

window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
