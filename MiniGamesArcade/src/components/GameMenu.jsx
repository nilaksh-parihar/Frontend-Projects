import React from "react";
import { Link } from "react-router-dom";
import ticTacToeImage from "../assets/tic-tac-toe.png";
import memoryGameImage from "../assets/memory-game.png";
import rpsImage from "../assets/rps-game.png";
import numberGuessImage from "../assets/number-game.png";
import metalTingSound from "../assets/metal-ting.mp3"; // Import the sound file

export default function GameMenu() {
  const playSound = () => {
    const audio = new Audio(metalTingSound);
    audio.play();
  };

  return (
    <>
      <header className="game-menu-header">
        <h1 className="game-menu-title">🎮 Choose Your Game</h1>
      </header>
      <div className="menu-grid">
        <Link
          to="/tic-tac-toe"
          className="menu-item"
          onClick={playSound} // Play sound on click
          style={{
            backgroundImage: `url(${ticTacToeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2>❌ Tic Tac Toe</h2>
        </Link>
        <Link
          to="/memory-game"
          className="menu-item"
          onClick={playSound} // Play sound on click
          style={{
            backgroundImage: `url(${memoryGameImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2>🧠 Memory Game</h2>
        </Link>
        <Link
          to="/rock-paper-scissors"
          className="menu-item"
          onClick={playSound} // Play sound on click
          style={{
            backgroundImage: `url(${rpsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2>✊ Rock Paper Scissors</h2>
        </Link>
        <Link
          to="/number-guess"
          className="menu-item"
          onClick={playSound} // Play sound on click
          style={{
            backgroundImage: `url(${numberGuessImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2>🔢 Number Guess</h2>
        </Link>
      </div>
    </>
  );
}