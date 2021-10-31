const formGradient = document.getElementById('gradient');
const color1 = document.getElementById('picker-1');
const color2 = document.getElementById('picker-2');
const percentage = document.getElementById('split');

//init color
onChangeColor();

//add event listeners
color1.addEventListener("input", onChangeColor);
color2.addEventListener("input", onChangeColor);
percentage.addEventListener("input", onChangeColor);

function onChangeColor(){
    let newGradient = "linear-gradient(to right, " + color1.value + " " + percentage.value + "%," + color2.value +")";
    formGradient.style.backgroundImage = newGradient;
}