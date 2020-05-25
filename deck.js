let Card = require('./card')

class Deck {
  constructor() {
    this.cards = []
  }

  createDeck() {
    const suits = ['♦', '♣', '♠', '♥']
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        this.cards.push(new Card(suit, rank))
      })
    })
  }

  shuffleCards() {
    let currentIndex = this.cards.length
    let randomIndex
    let temporaryValue

    for (let i = currentIndex - 1; i > 0; i--) {
      randomIndex = Math.floor(Math.random() * i)
      temporaryValue = this.cards[i]
      this.cards[i] = this.cards[randomIndex]
      this.cards[randomIndex] = temporaryValue
    }
    return this.cards
  }

  static checkCards(deck) {
    let suits = new Map()
    deck.forEach((card) => {
      if (suits.has(card.suit)) {
        let array = suits.get(card.suit)
        array.push(card.rank)
        suits.set(card.suit, array)
      } else {
        suits.set(card.suit, [card.rank])
      }
    })
    return suits
  }
}

module.exports = Deck
