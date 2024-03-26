import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import styles from "./App.module.scss";
import HangmanPerson from "./components/HangmanPerson";
import HangmanWord from "./components/HangmanWord";
import HangmanKeyboard from "./components/HangmanKeyboard";
import ModalWindow from './components/ModalWindow/ModalWindow'
import winner from './assets/img/victory.gif'
import loser from './assets/img/lost.gif'

const getWord = () =>{
   const word = words[Math.floor(Math.random() * words.length)];
   return word;
}

const App = () => {
  // states
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrecLetters = guessedLetters.filter((letter) => {
    return !wordToGuess?.word.includes(letter);
  });
  const isLoser = incorrecLetters.length >= 6;
  const isWinner = wordToGuess?.word.split("").every((letter) =>{
    return  guessedLetters.includes(letter);
  })
  // functions

  const handleAddGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/) || isLoser || isWinner) return;

      e.preventDefault();
      handleAddGuessedLetter(key);
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [guessedLetters , isLoser , isWinner]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setWordToGuess(getWord());
      setGuessedLetters([])
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const handlePlayAgain = () => {
    setWordToGuess(getWord());
      setGuessedLetters([])
  }

  
  const activeLetters = guessedLetters.filter((letter) => wordToGuess?.word.includes(letter));
  return (
    <div className={styles.app}>
    <div className={styles.hangman}>
      <div className={styles.hangman_head}>
      <HangmanPerson numberOfGuesses={incorrecLetters.length} />
      <h3 className={styles.hangman_title}>Save a person by guessing the words</h3>
      </  div>
      <div className={styles.hangman_content}>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} 
      reveal={isLoser}
      numberOfGuesses={incorrecLetters.length}
      />
      <HangmanKeyboard
          disabled={isLoser || isWinner}
          handleAddGuessedLetter={handleAddGuessedLetter}
          activeLetters={activeLetters}
          inactiveLetters={incorrecLetters}
        />
      </div>
    </div>
    <ModalWindow visible={isWinner}>
      <div className={styles.modal}>
        <img src={winner} alt="" className={styles.modal_img} />
        <p className={styles.modal_title}>Congrats</p>
        <p className={styles.modal_text}>You found the word: <span className={styles.fount_word}>{wordToGuess?.word}</span></p>
        <button className={styles.btn} onClick={handlePlayAgain}>Play again</button>
      </div>
    </ModalWindow>
    <ModalWindow visible={isLoser}>
      <div className={styles.modal}>
        <img src={loser} alt="" className={styles.modal_img} />
        <p className={styles.modal_title}>fame over</p>
        <p className={styles.modal_text}>The correct word was: <span className={styles.fount_word}>{wordToGuess?.word}</span></p>
        <button className={styles.btn} onClick={handlePlayAgain}>Play again</button>
      </div>
    </ModalWindow>
    </div>
  );
};

export default App;
