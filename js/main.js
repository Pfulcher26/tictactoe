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

//variables
let boardArray = ['', '', '', '', '', '', '', '', '',];
let currentPlayer = "";
let winner = "";

//reusable elements
//these represent the board squares 
const boardTiles = {
    tile1: "",
    tile2: "",
    tile3: "",
    tile4: "",
    tile5: "",
    tile6: "",
    tile7: "",
    tile8: "",
    tile9: ""
}

//initialize state variables
function initialize() {
    boardArray = [null, null, null, null, null, null, null, null, null, null];
    currentPlayer = 1;
    winner = null;
    render();
}

function render() {
    renderBoard();
}

function rendBoard() {
    for(i = 0; i < boardTiles.length; i++) {
        for(j = 0; j < boardArray.length; j++) {
            let color = boardTiles[i[boardArray[j]]] = colors.value; 
        }
    }
}
// couldn't get this logic to work, so hard coded the nulls
// function initializeBoard() {
//     boardArray.forEach((element) => { 
//         return element = null;
// })}

initializeBoard();

 




//render state variables to the page
    //render the board
    //render a message
    //wait for the user to click a square


//handle a player clicking a square

//handle a player clicking the replay button