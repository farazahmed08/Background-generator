var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var button = document.querySelector('.randomColorBtn')
var body = document.getElementById('gradient');
var r = Math.floor(Math.random()* 225);
var g = Math.floor(Math.random()* 225);
var b = Math.floor(Math.random()* 225);


function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")"; 

    css.textContent = body.style.background + ";"
}


function generateSingleColor() {
    var r = Math.floor(Math.random()* 225);
    var g = Math.floor(Math.random()* 225);
    var b = Math.floor(Math.random()* 225);
    var newColor = `rgb(${r}, ${g}, ${b})`;
    body.style.background = newColor;
    css.textContent = body.style.background + ";"

};


color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

button.addEventListener('click', generateSingleColor);
