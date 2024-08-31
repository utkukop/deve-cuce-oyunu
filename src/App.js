import React, { useState, useEffect } from "react";

function App() {
  const [word, setWord] = useState("");
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);

  const words = ["Deve", "Cüce"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(words[Math.floor(Math.random() * words.length)]);
      setTimeUp(false);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (userInput) => {
    if (!timeUp) {
      if (userInput === word) {
        setScore(score + 1);
      } else {
        setScore(score - 1);
      }
      setTimeUp(true);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Deve Cüce Oyunu</h1>
      <h2 className="my-4">{word}</h2>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => handleClick("Deve")}>
          Deve
        </button>
        <button className="btn btn-danger" onClick={() => handleClick("Cüce")}>
          Cüce
        </button>
      </div>
      <h3 className="mt-4">Skor: {score}</h3>
    </div>
  );
}

export default App;