// Array that defines suits and values for cards
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

// Class represening individual cards
class Card {
    constructor(suit, value) { // Creates 'suits' and 'values' under Class 'Card'
        this.value = value; // Property 'value'
        this.suit = suit; // Property 'suit'
    }

    // Using Get method to retrieve the rank of the current card from 'values' array
    get rank () {
        return values.indexOf(this.value); // Returns the rank of the current card value
    }
};

// UNCOMMENT BELOW FOR UNIT TEST
module.exports = {Card}; // Exports 'Card' call from this file

// Define the Class 'Deck'
class Deck {
    constructor() { // Accesses 'this.card' when instance of 'Deck' is called
        this.cards = []; // empty array 'this.card'
        for (let suit of suits) { // Outer loop iterates through each suit
            for (let value of values) { // Inner loop iterates through each value
                this.cards.push(new Card(suit, value)); // Each combination of suit and value is added to 'cards' array
            }
        }
        this.shuffle(); // Shuffle cards
   }

   // Shuffle Method
   shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    } // Shuffle cards in 'cards' array and return sorted array
   }

   // Method to deal
   deal(n) {
    return this.cards.splice(0, n); // Access 'cards' array and deals 'n' cards to player removing those cards from array
   }
};

// Declares new class 'Player'
class Player {
    constructor(cards) { // Gets called when instance is created. Takes one argument 'cards'
        this.hand = cards; // Assigns 'cards' to property 'hand'. 'hand' is cards player is holding.
        this.score = 0; // Sets score to 0 and keeps track of player score
    }

    // Method to play card from player's hand
    playCard() {
        return this.hand.pop(); // Plays and returns cards from hand with card played removed
    }

    // Method to increase player score
    incrementScore() {
        this.score++ // Increases play scaare by 1
    }
};

// Function to play game
const playGame = () => {
    const deck = new Deck; //Create a new deck from instance of Deck class
    const player1 = new Player(deck.deal(26)); // Declares player1 as instance of Player and deals 26 cards
    const player2 = new Player(deck.deal(26)); // Delcares player2  as instance of Player and deals 26 cardsA

// Play all cards in players hand
for (let i = 0; i < 26; i++) { // Iterates through all 26 cards by increments of 1
    const card1 = player1.playCard(); // Player 1 plays a card
    const card2 = player2.playCard(); // Player 2 plays a card

//Display drawn cards in console
console.log(`Round ${i + 1}`); // Displays number of plays
console.log(`Player 1 drew: ${card1.value} of ${card1.suit}`);
console.log(`Player 2 drew: ${card2.value} of ${card2.suit}`);


// Compares cards and adjust score
if (card1.rank > card2.rank) player1.incrementScore(); // If 'card1' rank is higher than increase score
else if (card2.rank > card1.rank) player2.incrementScore(); // If 'card2' rank is higher than increase score
}

//Displays score after each round
console.log(`Final score for Player 1: ${player1.score}`);
console.log(`Final score for Player 2: ${player2.score}`); 

// Determine and display winner score based off of final score
if (player1.score > player2.score) console.log('Player 1 Wins!'); // If score of player1 is greater then print following 

else if (player2.score > player1.score) console.log('Player 2 Win!'); // If score of player2 is great then print the following
else console.log("It's a tie!"); // If neither print the following
};

//Start Game
playGame(); // Callback function

