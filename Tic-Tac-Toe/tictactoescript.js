console.log("Tic-Tac-Toe Script is working");
// let music = new Audio("music.mp3");
let audioturn = new Audio("metal-ting.mp3");
// let gameover = new Audio("gameover.mp3");
let turn = "X"
let gameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e => {
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== ""){
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
}

//Game Logic
let boxes = document.getElementsByClassName("Box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            turn =  changeTurn();
            audioturn.play();
            checkWin();
            if(!gameover){
                document.querySelector('.Info').innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    gameover = false;
    document.querySelector('.line').style.width = "0vw";
    document.querySelector('.Info').innerText = "Turn for X";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})