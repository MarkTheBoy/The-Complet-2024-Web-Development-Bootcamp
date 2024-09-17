let min = 1;
let max = 6;
const text = document.getElementById("text");

randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
const dice = document.getElementsByClassName("img1")[0];
dice.src = `images/dice${randomNumber1}.png`;

randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
const dice2 = document.getElementsByClassName("img2")[0];
dice2.src = `images/dice${randomNumber2}.png`;

if(randomNumber1>randomNumber2){
    text.innerHTML = "PLayer number 1 won"
}
if(randomNumber2>randomNumber1){
    text.innerHTML = "PLayer number 2 won"
}
if(randomNumber2===randomNumber1){
    text.innerHTML = "Draw"
}

