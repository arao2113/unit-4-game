var $crystalButton1;
var $crystalButton2;
var $crystalButton3;
var $crystalButton4;
var $wantedScore;
var $yourScore;
var yourScore;
var wins = 0;
var losses = 0;

$(document).ready(function() {
    $crystalButton1 = $("#crystal1");
    $crystalButton2 = $("#crystal2");
    $crystalButton3 = $("#crystal3");
    $crystalButton4 = $("#crystal4");
    $wantedScore = $("#wantedScore");
    $yourScore = $("#yourScore");

// Random target number. Number to win.
var targetNumber = "";

  $("#number-to-guess").text(targetNumber);
  var targetNumber = Math.floor((Math.random() * 120) + 1);
  
// Generate random numbers for each crystal
var randomNumber1 = Math.floor((Math.random() * 12) + 1);
var randomNumber2 = Math.floor((Math.random() * 12) + 1);
var randomNumber3 = Math.floor((Math.random() * 12) + 1);
var randomNumber4 = Math.floor((Math.random() * 12) + 1);

// it will add a specific amount of points to the player's total score. Your game will hide this amount until the player clicks a crystal.
$crystalButton1.on("click", function() {
    yourScore += randomNumber1;
    $yourScore.text(yourScore);
});

$crystalButton2.on("click", function() {
    yourScore += randomNumber2;
    $yourScore.text(yourScore);
});

$crystalButton3.on("click", function() {
    yourScore += randomNumber3;
    $yourScore.text(yourScore);
});

$crystalButton4.on("click", function() {
    yourScore += randomNumber4;
    $yourScore.text(yourScore);
});


function onStart() {  
  $wantedScore = Math.floor((Math.random() * 120) + 19);
  $("#wantedScore").text($wantedScore);
  yourScore = 0;
}


onStart();
});

// The player wins if their total score matches the random number from the beginning of the game.
if (yourScore === targetNumber) {
    alert("You win!");
    wins++;
  }
  
// The player loses if their score goes above the random number.
  else if (yourScore >= targetNumber) {
    alert("You lose!!");
    losses--;
  }
