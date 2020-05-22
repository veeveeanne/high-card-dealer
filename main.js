let Deck = require('./deck')

let deck = new Deck

let playGame = (deck) => {
  Deck.shuffleCards(deck)
  console.log(deck)
}

playGame(deck)
