const Game = require('./game')
const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'playerName',
    message: 'What is your name?'
  },
  {
    type: 'select',
    name: 'playBoolean',
    message: (prev, values) => `Hi ${values.playerName}! Would you like to play a card game?`,
    choices: [
      { title: 'Yes', value: true},
      { title: 'No', value: false }
    ],
  }
];

(async () => {
  const response = await prompts(questions);
  if (response.playBoolean === true) {
    console.log("Great! The game is High Card Dealer.\n\
We'll each be dealt 4 random cards.\n\
The winning hand is the one where the sum of the card values is the highest.\n\
Ready?")
    console.log(await startMessage())
    const game = startGame()
    const playerHand = game.dealHand()
    console.log(await showCards(playerHand, response.playerName))
    const computerHand = game.dealHand()
    console.log(await showCards(computerHand, "Computer"))
    const result = game.gameResult(playerHand, computerHand, response.playerName)
    console.log(await gameResult(result))
  } else {
    console.log(`Bye ${response.playerName}. Feel free to return when you want to play a round of high card dealer!`)
  }
})();

let startMessage = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Start Game!")
    }, 5000)
  })
}

let startGame = () => {
  let game = new Game
  game.startgame()
  return game
}

let showCards = (hand, playerName) => {
  let cards = hand.showCards()
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${playerName}'s hand: ${cards}`);
    }, 2000)
  })
}

let gameResult = (result) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(result);
    }, 2000)
  })
}
