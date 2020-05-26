class Hand {
  constuctor() {
    this.cards = []
    this.value = 0
  }

  getValue() {
    let value = 0
    this.cards.forEach((card) => {
      if (card.rank === 'J') {
        value += 11
      } else if (card.rank === 'Q') {
        value += 12
      } else if (card.rank === 'K') {
        value += 13
      } else if (card.rank === 'A') {
        value += 14
      } else {
        value += card.rank
      }
    })
    this.value = value
    return this.value
  }

  showCards() {
    let cards = []
    this.cards.forEach((card) => {
      cards.push(`${card.suit}${card.rank}`)
    })
    return cards.join(', ')
  }
}

module.exports = Hand
