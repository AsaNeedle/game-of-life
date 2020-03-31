// hi

let gridSize = 12;
let gameState = [];

const setRandomGameState = () => {
    // Set random initial game state
    gameState = [];
    for (let i = 0; i < gridSize; i++) {
        let row = [];
        for (let j = 0; j < gridSize; j++) {
            row.push(Math.floor(Math.random() * 2));
        }
        gameState.push(row);
    }
}

const drawGameState = () => {
  let output = ""
  gameState.forEach((row) => {
    row.forEach((elem) => {
      if (elem === 0){
        output += " "
      } else {
        output += "*"
      }
    })
    output += "\n"
  })
  console.log(output)
}

const incrementGameState = () => {
    
}

setRandomGameState();
drawGameState();

// const readline = require('readline');
// readline.emitKeypressEvents(process.stdin);
// process.stdin.setRawMode(true);

// process.stdin.on('keypress', (str, key) => {
//   if (key.ctrl && key.name === 'c') {
//     process.exit();
//   } else if (//something
//     ){}
    
// });

