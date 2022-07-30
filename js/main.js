//constants
const colors = {
    null: 'white',
    playerOne: 'red',
    PlayerMinusOne: 'blue'
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
    currentPlayer = colors.playerOne;
    winner = null;
    render();
}

//Couldn't get this logic to work, so hard coded the nulls
// function initializeBoard() {
//     boardArray.forEach((element) => { 
//         return element = null;
// })}



//render state variables to the page

function render() {
    rendBoard();   //render the board
    rendMessage();  //render a message

}


//kind of confused about how to access the value of the colors object and set it to the current tile.  This function, in theory, works, but also seems incredibly busy.  Gotta be an easier way.  Maybe for each?
function rendBoard() {
    for(i = 0; i < boardTiles.length; i++) {
        for(j = 0; j < boardArray.length; j++) {
            let tileColor = boardTiles[i[boardArray[j]]]
            tileColor.style.background = colors[tileColor];
        }
    }
}

//Created a separate function called rendMessage, which I'll next inside of the main render function 
function rendMessage () {
    if (winner !== null) {
        return `It is ${currentPlayer.toUpperCase()}'s turn.`;
    } else if (winner === "T") {
        return "It's a tie!"; 
    } else {
        return `Congrats ${winner.toUpperCase()}.  You've won!`;
    }
}

//wait for the user to click a square
//Seems like I need a function that handles event listeners, waiting for user input before proceeding.  I researched a bit and it doesn't seem like there's any way to hard code Javascript to pause and wait for input other than using a function that needs to be fulfilled by a user action.
function waitForUserInput () {

}


//handle a player clicking a square

//handle a player clicking the replay button