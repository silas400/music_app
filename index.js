const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll("#pads div");
const colors = [
  "#60d394",
  "#d36060",
  "#c060d3",
  "#d3d160",
  "#606bd3",
  "#60c2d3"
];

pads.forEach(playSound)

function playSound(pad, index){
  pad.addEventListener("click", function() {
    sounds[index].currentTime = 0;
    sounds[index].play();
    createAnimation(index);
  });
}

function createAnimation(index){
  //Create bubbles
  let bubble = document.createElement("div");
  bubble.className = "shape"
  document.body.appendChild(bubble);
  bubble.style.backgroundColor = colors[index];
  bubble.style.animation = `jump 1s ease`;
  bubble.addEventListener("animationend", function() {
    document.body.removeChild(this);
  });
}

