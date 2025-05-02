import React, { useState, useEffect } from "react";

const initialCards = [
  { id: 1, value: "🍎", matched: false },
  { id: 2, value: "🍌", matched: false },
  { id: 3, value: "🍇", matched: false },
  { id: 4, value: "🍓", matched: false },
  { id: 5, value: "🍎", matched: false },
  { id: 6, value: "🍌", matched: false },
  { id: 7, value: "🍇", matched: false },
  { id: 8, value: "🍓", matched: false },
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    // Shuffle cards when the component loads
    const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || cards[index].matched) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].value === cards[secondIndex].value) {
        const updatedCards = [...cards];
        updatedCards[firstIndex].matched = true;
        updatedCards[secondIndex].matched = true;
        setCards(updatedCards);
        setMatchedPairs(matchedPairs + 1);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  const resetGame = () => {
    // Reset the matched property and shuffle the cards
    const resetCards = initialCards.map((card) => ({ ...card, matched: false }));
    const shuffledCards = [...resetCards].sort(() => Math.random() - 0.5);

    setCards(shuffledCards); // Reset cards
    setFlippedCards([]); // Clear flipped cards
    setMatchedPairs(0); // Reset matched pairs
  };

  return (
    <div className="memory-game-container">
      <h2 className="memory-game-title">🧠 Memory Game</h2>
      <div className="memory-game-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`memory-card ${
              flippedCards.includes(index) || card.matched ? "flipped" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            {flippedCards.includes(index) || card.matched ? card.value : "❓"}
          </div>
        ))}
      </div>
      {matchedPairs === initialCards.length / 2 && (
        <p className="memory-game-status">🎉 You matched all pairs!</p>
      )}
      <button className="memory-game-reset" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}