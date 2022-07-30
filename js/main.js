//constants
const colors = {
    null: 'white',
    '1': 'red',
    '-1': 'blue'
};

// const playerValues = {
//     playerOne: 1,
//     playerMinusOne: -1,
//     null: 0;
// }

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
let turn = 1
let currentPlayer = 0;
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
    checkForWinner();  //checks for winner
    userInput(); //dynamically responds to user input
}


//kind of confused about how to access the value of the colors object and set it to the current tile.  This function, in theory, works, but also seems incredibly busy.  Gotta be an easier way.  Maybe for each?
function rendBoard() {
    for(i = 0; i < boardTiles.length; i++) {
        for(j = 0; j < boardArray.length; j++) {
            let tileColor = boardTiles[i[boardArray[j]]]
            tileColor.style.background = colors[tileColor];
            console.log(tileColor);
        }
    }
}

//Created a separate function called rendMessage, which I'll next inside of the main render function 
function checkForWinner () {
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
function userInput () {
    //waits for user input
    //calls the render function, which loops back UserInput
    //The conditions in rend message should eventually end the game
}

//handle a player clicking a square
//Use jquery to grab elements from HTML
function handle() {
    let tile1 = document.getElementById("tile 1")
    tile1.addEventListener('click', () => {
        let tile1Index = boardTiles.tile1; 
        if (tile1Index !== 'red' || tile1Index !== 'blue' || tile1Index !== 'white' ) {
            tile1Index = currentPlayer;
            boardArray[0] = tile1Index;
        }
    });
    currentPlayer = (parseInt(currentPlayer) * -1).toString;
}

//create an event listener that executes the render function 

//handle a player clicking the replay button