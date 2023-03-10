# Memory Matching Game 
Memory matching game with 6 of Nba teams images.It will be contain  12 cards.
There are exactly 2 of every 6 teams pictures.If they match it will leave them up.
If not, it will be flip both back over.
When every card is face-up,you win and the game is finished.Enjoy!


































cards.forEach(card => card.addEventListener('click', flipCard));
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForMatch();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
  
}


 //console.log(unflipCards());
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  //console.log(resetBoard)
}



(function shuffle() {
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
    //console.log(shuffle);
  });
})();



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="app.js" defer></script>
    <title>Memory Game</title>
</head>
<body>
    <section class="memory-game">
      <div class="card">
        <img class="front-face" src="assets/1.jpg" alt="image" />
        <img class="back-face" src="assets/question mark.png" alt="image" />
      </div>
      <div class="card">
        <img class="front-face" src="assets/1.jpg" alt="image" />
        <img class="back-face" src="assets/question mark.png" alt="image" />
      </div>
      <div class="card">
        <img class="front-face" src="assets/2.jpg" alt="image" />
        <img class="back-face" src="assets/question mark.png" alt="image" />
      </div>
      <div class="card">
        <img class="front-face" src="assets/2.jpg" alt="image" />
        <img class="back-face" src="assets/question mark.png" alt="image" />
      </div>
      <div class="card">
        <img class="front-face" src="assets/3.jpg" alt="Angular" />
        <img class="back-face" src="assets/question mark.png" alt="image" />
      </div>
      <div class="card">
        <img class="front-face" src="assets/3.jpg" alt="image" />
        <img class="back-face" src="assets/question mark.png" alt="image" />
      </div>
      <div class="card">
        <img class="front-face" src="assets/4.jpg" alt="image" />
        <img class="back-face" src="assets/question mark.png" alt="image" />
      </div>
      <div class="card" >
        <img class="front-face" src="assets/4.jpg" alt="iamge" />
        <img class="back-face" src="assets/question mark.png" alt="Image" />
      </div>
      <div class="card" >
        <img class="front-face" src="assets/5.jpg" alt="Image" />
        <img class="back-face" src="assets/question mark.png" alt="Image" />
      </div>
      <div class="card" >
        <img class="front-face" src="assets/5.jpg" alt="Image" />
        <img class="back-face" src="assets/question mark.png" alt="Image" />
      </div>
      <div class="card">
        <img class="front-face" src="assets/6.jpg" alt="Image" />
        <img class="back-face" src="assets/question mark.png" alt="Image" />
      </div>
      <div class="card" >
        <img class="front-face" src="assets/6.jpg" alt="Image" />
        <img class="back-face" src="assets/question mark.png" alt="Image" />
      </div>
    </section>
  
</body>
</html>



<!-- tic toc game



        <div class="card"><img src="assets/1.jpg" alt="Image " /></div>
            <div class="card"><img src="assets/1.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/3.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/3.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/2.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/2.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/4.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/5.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/5.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/6.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/6.jpg" alt="Image" /></div>
            <div class="card"><img src="assets/4.jpg" alt="Image" /></div>
 -->


 // I want to grab all 12 of those cards
let cards = document.querySelectorAll('.card'); 
const board=document.querySelector('.memory-game');
//console.log(board);
console.log(card);
// for(let i=0;i < card.length; i++){
//     console.log(card[i])
// }