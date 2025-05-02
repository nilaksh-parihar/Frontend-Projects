import React, { useState } from "react";

const choices = ["Rock", "Paper", "Scissors"];

export default function RPSGame() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("It's a Tie!");
    } else if (
      (choice === "Rock" && randomChoice === "Scissors") ||
      (choice === "Paper" && randomChoice === "Rock") ||
      (choice === "Scissors" && randomChoice === "Paper")
    ) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="rps-container">
      <h2 className="rps-title">✊ Rock Paper Scissors ✋</h2>
      <div className="rps-choices">
        {choices.map((choice) => (
          <button
            key={choice}
            className="rps-button"
            onClick={() => playGame(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className="rps-result">
          <p>You chose: <strong>{playerChoice}</strong></p>
          <p>Computer chose: <strong>{computerChoice}</strong></p>
          <p className="rps-outcome">{result}</p>
        </div>
      )}
      <button className="rps-reset" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}