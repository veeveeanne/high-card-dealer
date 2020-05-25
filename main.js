let Game = require('./game')

let playGame = () => {
  console.log("GAME START!")
  let game = new Game
  game.startgame()
  console.log(game.deck)
  console.log("Card deck has been created")
  let player1 = game.dealHand()
  console.log("Player 1:")
  console.log(player1)
  let player2 = game.dealHand()
  console.log("Player 2: ")
  console.log(player2)
  console.log(game.gameResult(player1, player2))
}

playGame()
