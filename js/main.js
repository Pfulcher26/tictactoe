//state variables 
const reset = document.getElementById('Reset')
const xButtonSelection = document.getElementById('X');
const oButtonSelection = document.getElementById('O');
const resetButtonSelection = document.getElementById('Reset')
const selectIndex = document.getElementById('selectIndex');
const playerTurnMessageDisplay = document.getElementById('player-turn')
const gameBoard = {
    '0': document.getElementById("tile 0"),
    '1': document.getElementById("tile 1"),
    '2': document.getElementById("tile 2"),
    '3': document.getElementById("tile 3"),
    '4': document.getElementById("tile 4"),
    '5': document.getElementById("tile 5"),
    '6': document.getElementById("tile 6"),
    '7': document.getElementById("tile 7"), 
    '8': document.getElementById("tile 8"), 
}

//cached variables
let board = ["", "", "", "", "", "", "", "", ""]
let currentUserValue = ""
let winner = ""
let userIndexSelection = 0
let tileSelection = ""
let playerTurnMessage = document.createElement("p");
let winnerMessage = document.getElementById('winner')


// reset.addEventListener('click', initialize);
// init function 


//event listeners
xButtonSelection.addEventListener('click', function() {
    currentUserValue = "X";
    console.log(currentUserValue)
})

oButtonSelection.addEventListener('click', function() {
    currentUserValue = "O";
    console.log(currentUserValue);
})

resetButtonSelection.addEventListener('click', function () {
    let board = ["", "", "", "", "", "", "", "", ""]
    let currentUserValue = ""
    let winner = ""
    let userIndexSelection = 0
    let tileSelection = ""
    for (const prop in gameBoard) {
        counter = 0;
        let currentProp = gameBoard.prop
        currentProp = document.getElementById(`tile ${counter}`);
        currentProp.innerText = counter; 
        counter += 1;
    }
})

//function to check for winner
function checkForWinner() {
    for(i=0; i<board.length; i++) {
        if(board[0] === 'X' && board[1] === 'X' && board[2] === 'X' || board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
            winnerMessage.innerHTML = `${currentUserValue} is the winner.`
        } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X' || board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
            winnerMessage.innerHTML = `${currentUserValue} is the winner.`
        } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X' || board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {     
            winnerMessage.innerHTML = `${currentUserValue} is the winner.`
        } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X' || board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
            winnerMessage.innerHTML = `${currentUserValue} is the winner.`
        }  else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X' || board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
            winnerMessage.innerHTML = `${currentUserValue} is the winner.`
        }  else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X' || board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
            winnerMessage.innerHTML = `${currentUserValue} is the winner.`
        }  else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X' || board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
            winnerMessage.innerHTML = `${currentUserValue} is the winner.`
        }  else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X' || board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
            winnerMessage.innerHTML = `${currentUserValue} is the winner.`
    }
}
}


//allow user to select a space on the grid from 0 to 8 and enter it into a input with id of selectIndex
//update the value of userIndexSelection with the value of selectIndex 
//set board array at the index specified by userIndexSelection to currentUserValue
//update the board visually at the index with x or o
selectIndex.addEventListener('keypress', (e)=> {
    if (e.keyCode === 13) {
        userIndexSelection = parseInt(selectIndex.value);
        board[userIndexSelection] = currentUserValue;
        tileSelection = gameBoard[userIndexSelection.toString()]
        tileSelection.innerText = currentUserValue; 
        playerTurnMessage.innerText = `Player ${currentUserValue} just went.  It is the next player's turn.`    
        playerTurnMessageDisplay.appendChild(playerTurnMessage)
        checkForWinner();
    }
});

//Trying to write a line of code to determine if the index the user has selected already has a value
// if (board.indexOf(board[userIndexSelection] === -1)) {
//     console.log("This space appears to be already taken.  Please choose again!")
// } else {






// //constants
// const colors = {
//     'null': 'white',
//     '1': 'red',
//     '-1': 'blue'
// };

// // const playerValues = {
// //     playerOne: 1,
// //     playerMinusOne: -1,
// //     null: 0;
// // }

// const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]

// //variables
// let boardArray = ['', '', '', '', '', '', '', '', '',];
// let currentPlayer = "";
// let winner = "";

// //reusable elements
// //these represent the board squares 
// const boardTiles = {
//     tile1: "",
//     tile2: "",
//     tile3: "",
//     tile4: "",
//     tile5: "",
//     tile6: "",
//     tile7: "",
//     tile8: "",
//     tile9: ""
// }

// //initialize state variables
// function initialize() {
//     boardArray = [null, null, null, null, null, null, null, null, null, null];
//     currentPlayer = colors['1'];
//     winner = null;
//     render();
// }

// //Couldn't get this logic to work, so hard coded the nulls
// // function initializeBoard() {
// //     boardArray.forEach((element) => { 
// //         return element = null;
// // })}



// //render state variables to the page

// function render() {
//     rendBoard();   //render the board
//     checkForWinner();  //checks for winner
//     userInput(); //dynamically responds to user input
// }


// //kind of confused about how to access the value of the colors object and set it to the current tile.  This function, in theory, works, but also seems incredibly busy.  Gotta be an easier way.  Maybe for each?
// function rendBoard() {
//     for(i = 0; i < boardTiles.length; i++) {
//         for(j = 0; j < boardArray.length; j++) {
//             let tileColor = boardTiles[i[boardArray[j]]]
//             tileColor.style.background = colors[tileColor];
//         }
//     }
// }

// //Created a separate function called rendMessage, which I'll next inside of the main render function 
// function checkForWinner () {
//     if (winner !== null) {
//         return `It is ${currentPlayer.toUpperCase()}'s turn.`;
//     } else if (winner === "T") {
//         return "It's a tie!"; 
//     } else {
//         return `Congrats ${winner.toUpperCase()}.  You've won!`;
//     }
// }

// //wait for the user to click a square
// //Seems like I need a function that handles event listeners, waiting for user input before proceeding.  I researched a bit and it doesn't seem like there's any way to hard code Javascript to pause and wait for input other than using a function that needs to be fulfilled by a user action.
// function userInput () {
//     handle();
//     determineWinner();
//     //waits for user input
//     //calls the render function, which loops back UserInput
//     //The conditions in rend message should eventually end the game
// }

// //handle a player clicking a square
// //Use jquery to grab elements from HTML
// function handle() {
//     let tile1 = document.getElementById("tile 1")
//     tile1.addEventListener('click', () => {
//         let tile1Index = boardTiles.tile1; 
//         if (tile1Index !== 'red' || tile1Index !== 'blue' || tile1Index !== 'white' ) {
//             tile1Index = currentPlayer;
//             boardArray[0] = tile1Index;
//         }
//     });
//     switchPlayer(); 
//     //currentPlayer = (parseInt(currentPlayer) * -1).toString();
//     //function to determine winner
// }

// function switchPlayer() {
//     if (currentPlayer === 'red') {
//         currentPlayer = colors['-1']
//     } else {
//         currentPlayer = colors['1']
//     }
// }

// //iterating over a two dimensional array!
// function determineWinner() {
//     for(i = 0; i < winningCombinations.length; i++) {
//         for(j = 0; j < innerArray.length; j++) {
//             let index = j[i];
//             let boardIndex = boardArray[index];
//             let total = 0;
//             total += boardIndex;
//             let absoluteTotal = math.absolute(total);
//             if(absoluteTotal === 3) {
//                 winner = boardIndex.toString();
//         }
//     }
//     return winner; 
// }

// //create an event listener that executes the render function 


// //handle a player clicking the replay button
// let reset = document.getElementById("Reset")
// reset.addEventListener('click', initialize);

