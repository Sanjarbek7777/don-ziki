var elRock = document.querySelector('.js-rock-btn');
var elPaper = document.querySelector('.js-paper-btn');
var elScissors = document.querySelector('.js-scissors-btn');
var elScore = document.querySelector('.js-score-output');
var elWin = document.querySelector('.js-win-output');
var elLose = document.querySelector('.js-lose-output');
var elDraw = document.querySelector('.js-draw-output');
var elInfo = document.querySelector('.js-win-lose-output');
var num = 0;
var lose = 0;
var draw = 0;

elRock.addEventListener('click', function () {
  var random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

 if(random == 1) {
   elWin.textContent = ++num;
   elScore.textContent = ++num;
   elInfo.textContent = "You Win";
 } else if(random == 2) {
   elLose.textContent = ++lose;
   elInfo.textContent = "You Lose";
 } else if(random == 3) {
   elDraw.textContent = ++draw;
   elInfo.textContent = "Draw";
 }
});

elScissors.addEventListener('click', function () {
  var random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

 if(random == 1) {
   elWin.textContent = ++num;
   elScore.textContent = ++num;
   elInfo.textContent = "You Win";
 } else if(random == 2) {
   elLose.textContent = ++lose;
   elInfo.textContent = "You Lose";
 } else if(random == 3) {
   elDraw.textContent = ++draw;
   elInfo.textContent = "Draw";
 }
});

elPaper.addEventListener('click', function () {
  var random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

 if(random == 1) {
   elWin.textContent = ++num;
   elScore.textContent = ++num;
   elInfo.textContent = "You Win";
 } else if(random == 2) {
   elLose.textContent = ++lose;
   elInfo.textContent = "You Lose";
 } else if(random == 3) {
   elDraw.textContent = ++draw;
   elInfo.textContent = "Draw";
 }
});