let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("bg");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    sky.style.top = value * 0.5 + 'px';
    mountain1.style.top = -value * 0.20 + 'px';
    mountain2.style.top = -value * 0.15 + 'px';
    forest.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
})