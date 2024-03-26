import hangman_0 from '../assets/img/hangman-0.svg'
import hangman_1 from '../assets/img/hangman-1.svg'
import hangman_2 from '../assets/img/hangman-2.svg'
import hangman_3 from '../assets/img/hangman-3.svg'
import hangman_4 from '../assets/img/hangman-4.svg'
import hangman_5 from '../assets/img/hangman-5.svg'
import hangman_6 from '../assets/img/hangman-6.svg'


const HEAD = (
 <img src={hangman_1}/>
);
const BODY = (
  <img src={hangman_2}/>
);
const RIGHT_ARM = (
  <img src={hangman_3}/>
);
const LEFT_ARM = (
  <img src={hangman_4}/>

);

const RIGHT_LEG = (
  <img src={hangman_5}/>
);
const LEFT_LEG = (
  <img src={hangman_6}/>
);

type HangmanPersonProps = {
  numberOfGuesses: number;
};
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
const HangmanPerson = ({ numberOfGuesses }: HangmanPersonProps) => {
  return (
    <div>
      {numberOfGuesses === 0 ? (
        <img src={hangman_0} alt="" />
      ) : (
      <>
      {BODY_PARTS[numberOfGuesses - 1]}
      </>
      )}
    </div>
  );
};

export default HangmanPerson;
