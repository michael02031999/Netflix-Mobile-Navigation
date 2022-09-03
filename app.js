let navigationIcon = document.getElementById("navigationIcon");
let xmark = document.getElementById("xmark");
let black = document.getElementById("black");
let red = document.getElementById("red");
let white = document.getElementById("white");

navigationIcon.addEventListener("click", rolloutNav);

function rolloutNav() {
  black.style.left = "0px";

  setTimeout(() => {
    red.style.left = "0px";
  }, 250);

  setTimeout(() => {
    white.style.left = "0px";
  }, 400);
}

xmark.addEventListener("click", navBack);

function navBack() {
  white.style.left = "-430px";

  setTimeout(() => {
    red.style.left = "-455px";
  }, 200);

  setTimeout(() => {
    black.style.left = "-480px";
  }, 500);
}
