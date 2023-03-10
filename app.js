// Select Cards element
const cards = document.querySelectorAll('.cardGame');
//console.log(cards);
// Select the game board element
const gameBoard = document.querySelector('.game');
//console.log(gameBoard)
// Variables to keep track of the first and second card selected, and the number of cards matched
let firstCard = null;
let secondCard = null;
let cardsMatched = 0;
let fixBoard = false;

// The total number of cards in the game
const totalCards = cards.length;
//console.log(totalCards);
function reset() {
    firstCard = null;
    secondCard = null;
    hasFlippedCard = false;
    fixBoard = false;
}
function flipCard() {
    // Add the "flip" class to the clicked card to show its front image
    this.classList.add('flip');
    if (!firstCard) {
        // If this is the first card selected, set it as the first card variable
        firstCard = this;
    } else {
        // If this is the second card selected, set it as the second card variable
        secondCard = this;
        compareCards();
    }
}
