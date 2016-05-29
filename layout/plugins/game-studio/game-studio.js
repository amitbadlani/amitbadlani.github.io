var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#game-body button");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture Video on IE10 and supported browsers. 
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Play/Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})