console.log("Tic-Tac-Toe Script is working");
let music = new Audio("music.mp3");
let turn = new Audio("metal-ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn1 = "X"

// Function to change the turn
const changeTurn = () => {
    return turn1 === "X" ? "0" : "X"
}

// Function to check for a win

