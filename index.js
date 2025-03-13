
var currentSound = null;

function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var DiceImage = "dice" + randomNumber + ".png";
    var randomImageSource = "images/" + DiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randnum2 = Math.floor(Math.random() * 6) + 1;
    var dimg = "dice" + randnum2 + ".png";
    var randimgsrc = "images/" + dimg;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randimgsrc);

    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0; 
    }

    if (randomNumber > randnum2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
        currentSound = new Audio("sounds/player1.mp3");
    } 
    else if (randnum2 > randomNumber) {
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
        currentSound = new Audio("sounds/player2.mp3");
    } 
    else {
        document.querySelector("h1").innerHTML = "Draw!";
        currentSound = new Audio("sounds/draw.mp3");
    }

    
    currentSound.volume = 1.0;
    currentSound.play();
}




document.querySelector("button").addEventListener("click", rollDice);

