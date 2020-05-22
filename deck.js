let Card = require('./card')

class Deck {
  constructor() {
    const suits = ['♦', '♣', '♠', '♥']
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

    let cards = []
    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        cards.push(new Card(suit, rank))
      })
    })
    return cards
  }

  static shuffleCards(deck) {
    let currentIndex = deck.length
    let randomIndex
    let temporaryValue

    for (let i = currentIndex - 1; i > 0; i--) {
      randomIndex = Math.floor(Math.random() * i)
      temporaryValue = deck[i]
      deck[i] = deck[randomIndex]
      deck[randomIndex] = temporaryValue
    }
    return deck
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
