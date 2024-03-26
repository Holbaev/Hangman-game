import styles from "./style.module.scss";

type WordToGuess = {
  word: string;
  hint: string;
};


type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: WordToGuess;
  reveal?: boolean;
  numberOfGuesses: number;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
  numberOfGuesses,
}: HangmanWordProps) => {
  return (
    <div className={styles.hangma_word}>
      <div className={styles.word_list}>
        {wordToGuess.word.split("").map((letter:string, index:number) => (
          <span className={styles.word_text} key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
                fontSize: "2rem",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
      <p className={styles.word_hint}>{wordToGuess?.hint}</p>
      <p className={styles.word_errors}>
        Incorrect guesses:{" "}
        <span
          style={{ color: numberOfGuesses ? "red" : "black" }}
          className={styles.word_errors}
        >
          6 / {numberOfGuesses}
        </span>
      </p>
    </div>
  );
};

export default HangmanWord;
