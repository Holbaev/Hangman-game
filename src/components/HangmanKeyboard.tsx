import styles from "./style.module.scss";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type HangmanKeyboardProps = {
  handleAddGuessedLetter: (key: string) => void;
  activeLetters: string[];
  inactiveLetters: string[];
  disabled: boolean;
};

const HangmanKeyboard = ({
  handleAddGuessedLetter,
  activeLetters,
  inactiveLetters,
  disabled = false
}: HangmanKeyboardProps) => {
  return (
    <div className={styles.keyboard}>
      {KEYS.map((key , index) => {
        const isActive = activeLetters.includes(key);        
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => handleAddGuessedLetter(key)}
            className={`${styles.btn} ${isActive && styles.active} ${
              isInactive && styles.inactive
            }`}
            disabled={isActive || isInactive || disabled}
            key={index}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
