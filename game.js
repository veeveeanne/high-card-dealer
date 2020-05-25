let Deck  = require('./deck')
let Hand = require('./hand')

class Game {
  constructor() {
    this.deck = []
  }

  startgame() {
    let deck = new Deck
    deck.createDeck()
    this.deck = deck.shuffleCards()
  }

  dealHand() {
    let hand = new Hand
    let cards = []
    for (let i = 0; i < 4; i++) {
      cards.push(this.deck.pop())
    }
    hand.cards = cards
    hand.getValue()
    return hand
  }

  gameResult(player1, player2) {
    if (player1.value > player2.value) {
      return "Player 1 Won"
    } else if (player2.value > player1.value) {
      return "Player 2 Won"
    } else {
      return "TIE!"
    }
  }
}

module.exports = Game
