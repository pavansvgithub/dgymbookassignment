import { useState, useEffect, useCallback } from "react";
import "./App.css";

const WORD_LIST = ["react", "table", "apple", "grape", "house"];
const TARGET_WORD = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];

const App = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");
  const [darkMode, setDarkMode] = useState(false);

  const handleGuess = useCallback(() => {
    if (currentGuess.length !== 5 || guesses.length >= 6) return;
    if (!WORD_LIST.includes(currentGuess)) {
      alert("Invalid word!");
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess("");

    if (currentGuess === TARGET_WORD) {
      setGameStatus("won");
    } else if (newGuesses.length === 6) {
      setGameStatus("lost");
    }
  }, [currentGuess, guesses]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (gameStatus !== "playing") return;
      if (event.key === "Enter") {
        handleGuess();
      } else if (event.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(event.key) && currentGuess.length < 5) {
        setCurrentGuess((prev) =>
          prev.length < 5 ? prev + event.key.toLowerCase() : prev
        );
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentGuess, gameStatus, handleGuess]);

  const getLetterStatus = (letter, index) => {
    if (TARGET_WORD[index] === letter) return "green";
    if (TARGET_WORD.includes(letter)) return "yellow";
    return "gray";
  };

  return (
    <div className={`wordle-container ${darkMode ? "dark" : ""}`}>
      <h1 className="title">Wordle Clone</h1>
      <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="grid">
        {guesses.map((guess, rowIndex) => (
          <div key={rowIndex} className="row">
            {guess.split("").map((letter, index) => (
              <div
                key={index}
                className={`cell ${getLetterStatus(letter, index)}`}
                style={{ animation: "flip 0.5s ease" }}
              >
                {letter.toUpperCase()}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameStatus === "playing" ? (
        <>
          <input
            type="text"
            maxLength="5"
            value={currentGuess}
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              if (/^[a-zA-Z]{0,5}$/.test(value)) {
                setCurrentGuess(value);
              }
            }}
            className="input-box"
            readOnly
          />
          <button onClick={handleGuess} className="button">
            Submit
          </button>
        </>
      ) : (
        <div className="game-over">
          <h2 className="message">
            {gameStatus === "won"
              ? "You Win! 🎉"
              : `Game Over! The word was ${TARGET_WORD}`}
          </h2>
          <button onClick={() => window.location.reload()} className="button">
            New Game
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
