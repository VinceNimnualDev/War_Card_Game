const {expect} = require('chai'); // using 'expect' function from chai to assert value
const {Card} = require('./index.js'); // Testing 'Card' class from 'test.js' file

describe('Card', () => { // 'describe' function takes string and callback function under test name 'Card'
    it('should return the corrent rank for the given card', () => { // 'it' is the individual test to test string provided
        const card = new Card('Diamonds', 'Ace'); // Creating new instance with 'Diamond' and 'Ace' as its value
        expect(card.rank).to.equal(12); // The rank of 'Ace' should be 12 based off the position in the index
    });

    it('should initalize with correct suit and value', () => { // another 'it' test to produce correct suit and value
        const card = new Card('Spades', '2'); // Create new instance of 'Spades' and '2' from the 'Card' class
        expect(card.suit).to.equal('Spades'); // Asserting the suit should be 'Spades
        expect(card.value).to.equal('2'); // Asserting the value should be 2
     });

    });
