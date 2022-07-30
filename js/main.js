//constants
const colors = {
    null: 'white',
    playerOne: 'red',
    playerMinusOne: 'blue'
};

const winningCombinations = {
    first: [0, 1, 2],
    second: [3, 4, 5],
    third: [6, 7, 8],
    fourth: [0, 3, 6],
    fifth: [1, 4, 7],
    sixth: [2, 5, 8],
    seventh: [0, 4, 8],
    eighth: [2, 4, 6]
}

console.log(winningCombinations.first);
//variables
let boardArray = ['', '', '', '', '', '', '', '', '',];
let currentPlayer = "";
let winner = "";
