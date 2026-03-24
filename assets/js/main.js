// main.js

// console.log("Hello, World!");

//let rotation =0;
//document.addEventListener("click", function () {
    //let min = 10;
   // let max = 40;
//rotation += Math.floor(Math.random() * (max-min+1))+min;
//rotation += randomNumber(1,200);
//document.body.style.transform = `rotate(${rotation}deg)`;
//})

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max-min) +1) +min;
}
function randomize () {
    divs.forEach(function(div){
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber (0, 50);
        let translateY = randomNumber (0,20);
        let rotate = randomNumber (0, 360);
        div.style.transform =
            `scale(${scale})`
            translate
    
    console.log(divs.length, "randomize!")
}

randomize();
