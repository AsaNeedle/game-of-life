
let gridSize = 12;

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
    return gameState;
}

const drawGameState = (gameState) => {
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


// elem = x, y
// x - 1, y - 1
// x - 1, y 
// x - 1, y + 1
// x, y - 1
// x, y <- elem
// x, y + 1
// x + 1, y - 1
// x + 1, y 
// x + 1, y + 1


const countNeighbors = (x, y, gameState) => {
    // find neighbors
  let liveNeighbors = 0

  let neighborIndices = []
  for (let i = -1; i < 2; i++){
    for (let j = -1; j < 2; j++){
      if (!(i === 0 && j === 0)){
        neighborIndices.push([x + i, y + j])
      }
    }
  }

  neighborIndices.forEach((index) => {
    curRow = gameState[index[0]]
    if (curRow){
      curVal = curRow[index[1]]
      if (curVal){
        liveNeighbors += curVal
      }
    }
  })

  return liveNeighbors

}

const incrementGameState = (gameState) => {

  // for each cell:
  // count alive neightbors
  // check if dead or alive
  // decide if dead or alive

  // rules:
  // 1. a dead cell with 3 neighbors becomes alive
  // 2. an alive cell with < 2 or > 3 neighbors dies

  let nextGameState = [];

  for (let i = 0; i < gridSize; i++) {
    let row = [];
    for (let j = 0; j < gridSize; j++) {
        let n = countNeighbors(i, j, gameState);
        let curVal = gameState[i][j];

        if (curVal === 0) {
          if (n == 3) {
            row.push(1);
          } else {
          row.push(0);
          }
        } else {
          if (n < 2 || n > 3) {
            row.push(0);
          } else {
            row.push(1);
          }
        }
    }
    nextGameState.push(row);
  }
  return nextGameState;
}

let currentGameState = setRandomGameState();
drawGameState(currentGameState);
drawGameState(incrementGameState(currentGameState));

// const readline = require('readline');
// readline.emitKeypressEvents(process.stdin);
// process.stdin.setRawMode(true);

// process.stdin.on('keypress', (str, key) => {
//   if (key.ctrl && key.name === 'c') {
//     process.exit();
//   } else if (//something
//     ){}
    
// });

