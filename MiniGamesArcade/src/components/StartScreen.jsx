import React from "react";
import { useNavigate } from "react-router-dom";
import miniGamesImage from "../assets/mini-games.png"; // Import the image

export default function StartScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    const audio = document.querySelector("audio");
    if (audio) {
      audio.play().catch(() => {
        console.log("Audio playback failed. User interaction required.");
      });
    }
    navigate("/menu");
  };

  return (
    <div className="start-screen">
      <img src={miniGamesImage} alt="Mini Games Arcade" className="start-image" />
      <button className="start-button" onClick={handleStart}>
        Start Game 🎮
      </button>
    </div>
  );
}