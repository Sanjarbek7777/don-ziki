var elRock = document.querySelector('.js-rock-btn');
var elPaper = document.querySelector('.js-paper-btn');
var elScissors = document.querySelector('.js-scissors-btn');
var elScore = document.querySelector('.js-score-output');
var elWin = document.querySelector('.js-win-output');
var num = 0;

elRock.addEventListener('click', function () {
  var random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

 if(random == 1) {
   elWin.textContent = "You Win";
   elScore.textContent = ++num;
 } else if(random == 2) {
   elWin.textContent = "You Lose";
 } else if(random == 3) {
   elWin.textContent = "Durang";
 }
});

elScissors.addEventListener('click', function () {
  var random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

 if(random == 1) {
   elWin.textContent = "You Win";
   elScore.textContent = ++num;
 } else if(random == 2) {
   elWin.textContent = "You Lose";
 } else if(random == 3) {
   elWin.textContent = "Durang";
 }
});

elPaper.addEventListener('click', function () {
  var random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

 if(random == 1) {
   elWin.textContent = "You Win";
   elScore.textContent = ++num;
 } else if(random == 2) {
   elWin.textContent = "You Lose";
 } else if(random == 3) {
   elWin.textContent = "Durang";
 }
});