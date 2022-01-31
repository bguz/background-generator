var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    getCSSValue();
}

function randomGradient() {
    var randomColor1 = Math.floor(100000 + Math.random() * 900000);
    var randomColor2 = Math.floor(100000 + Math.random() * 900000);
    color1.value = "#" + randomColor1;
    color2.value = "#" + randomColor2;
    body.style.background = "linear-gradient(to right, " + "#" + randomColor1 + "," + "#" + randomColor2 + ")";
    getCSSValue();
}

function getCSSValue() {
    css.textContent = body.style.background + ";";
}

//event listeners
randomBtn.addEventListener("click", randomGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//exec
randomGradient();
