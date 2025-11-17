let numberofbutton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberofbutton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //play audio
    let buttoninnerHTML = this.innerHTML;
    makesound(buttoninnerHTML);
    //show animation
    buttonAnimation(buttoninnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  //play audio
  makesound(event.key);
  //show animation
});

function makesound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("./assets/audio/crash.mp3");
      crash.play();
      break;

    case "a":
      let kick = new Audio("./assets/audio/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      let snare = new Audio("./assets/audio/snare.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("./assets/audio/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("./assets/audio/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("./assets/audio/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("./assets/audio/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log("key pressed", key);
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
