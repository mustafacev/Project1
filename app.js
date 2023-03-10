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
function compareCards() {
    if (firstCard.id === secondCard.id) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        firstCard = null;
        secondCard = null;
        // Increment the number of matched cards by 2
        cardsMatched += 2;
        allMatched();
    } else {
        unflipCards();
    }
}
// Function to check winning condition
function allMatched() {
    if (cardsMatched === totalCards) {
        // If all cards have been matched, create a win message element and add it to the game board
        const winMessage = document.createElement('div');
        winMessage.classList.add('message');
        winMessage.textContent = 'Congratulations, you won!';
        gameBoard.appendChild(winMessage);
    }
}
// Function to unflip two cards if they don't match
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset();
    }, 1000);
};
//Function to shuffle cards
function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
}
shuffle();
// Loop through the shuffled cards and add a click event listener to each card
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', flipCard);
}