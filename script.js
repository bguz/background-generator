var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.querySelector(".random");

//shows background css text in the page
function setBackground() {
    css.textContent = body.style.background + ";";
}
//sets gradient when color inputs are modified
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    setBackground();
}
//randomizes color
function randomColor() {
    var rand1 = "#" + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    var rand2 = "#" + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    color1.value = rand1;
    color2.value = rand2;
    body.style.background = "linear-gradient(to right, " + rand1 + ", " + rand2 + ")";
    setBackground();
}

//Events
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomize.addEventListener("click", randomColor);

//Set initial
randomColor();