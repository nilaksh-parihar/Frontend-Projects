import React, { useState } from "react";

export default function NumberGuess() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  }

  const handleGuess = () => {
    const numericGuess = parseInt(guess, 10);
    if (isNaN(numericGuess)) {
      setMessage("Please enter a valid number!");
      return;
    }

    setAttempts(attempts + 1);

    if (numericGuess === targetNumber) {
      setMessage(`🎉 Correct! You guessed the number in ${attempts + 1} attempts.`);
    } else if (numericGuess < targetNumber) {
      setMessage("📉 Too low! Try again.");
    } else {
      setMessage("📈 Too high! Try again.");
    }
  };

  const resetGame = () => {
    setTargetNumber(generateRandomNumber());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="number-guess-container">
      <h2 className="number-guess-title">🔢 Number Guessing Game</h2>
      <p>Guess a number between 1 and 100!</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="number-guess-input"
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess} className="number-guess-button">
        Submit Guess
      </button>
      {message && <p className="number-guess-message">{message}</p>}
      <button onClick={resetGame} className="number-guess-reset">
        Restart Game
      </button>
    </div>
  );
}