console.log("Tic-Tac-Toe Script is working");
// let music = new Audio("music.mp3");
let audioturn = new Audio("metal-ting.mp3");
// let gameover = new Audio("gameover.mp3");
let turn = "X"

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = () => {

}

//Game Logic
let boxes = document.getElementsByClassName("Box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn =  changeTurn();
            audioturn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})


