// App.jsx
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import GameMenu from "./components/GameMenu";
import TicTacToe from "./components/TicTacToe";
import musicFile from "./assets/arcade-music.mp3";
import backIcon from "./assets/back-icon.png";
import soundOnIcon from "./assets/sound-on.png";
import soundOffIcon from "./assets/sound-off.png";
import StartScreen from "./components/Startscreen";
import MemoryGame from "./components/MemoryGame";
import RPSGame from "./components/RPSGame";
import NumberGuess from "./components/NumberGuess";


function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay prevented. Waiting for user interaction.");
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(audioRef.current.muted);
    }
  };

  const showBack = location.pathname !== "/";

  return (
    <div className="layout-container">
      {/* Hide the audio element */}
      <audio ref={audioRef} loop src={musicFile} style={{ display: "none" }} />

      {showBack && (
        <button className="corner-button back-corner" onClick={() => navigate("/")}>
          <img src={backIcon} alt="Back" className="icon-img" />
        </button>
      )}

      <button className="corner-button sound-corner" onClick={toggleMute}>
        <img
          src={muted ? soundOffIcon : soundOnIcon}
          alt={muted ? "Muted" : "Unmuted"}
          className="icon-img"
        />
      </button>

      <div className="app-container">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/menu" element={<GameMenu />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/rock-paper-scissors" element={<RPSGame />} />
          <Route path="/number-guess" element={<NumberGuess />} /> {/* Add this */}
        </Routes>
      </Layout>
    </Router>
  );
}