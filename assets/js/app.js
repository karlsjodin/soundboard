window.addEventListener("keydown", function(event) {
  console.log(`Key pressed: ${event.keyCode}`);
  let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
/* querySelector hämtar ut en audo-tagg med attributet data-key
   data-key = event.keyCode som en sträng
   keyCode får vi inifrån eventen när vi trycker på en tangent */
  if (!audio) return; 
  /* om audio är undefined (alltså om vi klickar på en tangent som inte har
     en ljudfil kopplad till sig, kommer inte koden att köras) */
  audio.play();
  key.classList.add("playing");

  function removeTransition(event) {
      if (event.propertyName != "transform") return;
      this.classList.remove("playing");
  }

  let keys = document.querySelectorAll(".key"); // här får vi en array

  keys.forEach(function(key) {
      key.addEventListener("transitionend", removeTransition);
  });
});

