var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "Dice " + randomNumber1 + ".png";
var randomDice2 = "Dice " + randomNumber2 + ".png";

var randomDiceSource1 = "images/" + randomDice1;
var randomDiceSource2 = "images/" + randomDice2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

var buttonPlay = document.getElementById("btnPlay");
var conditionNum = 0;
function playDice() {
  image1.setAttribute("src", randomDiceSource1);
  image2.setAttribute("src", randomDiceSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Win! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}


  playDice();
  


