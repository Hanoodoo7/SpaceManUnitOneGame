// State variables
const words = ['hellos', 'world', 'dogs', 'cat'];
//words avalable in the game 
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// letters that go in to the keyboard
let randomWord;
let randomWordArr;
let userChoiceArr;
let mistakes = 0;
const maxMistakes = 7;
let isGameStarted = false

// UI elements
const startButton = document.querySelector('#start');//dom
const keyboardDiv = document.querySelector('.keyboard');//dom
const wordDiv = document.querySelector('.word');//dom
const theMan = document.querySelector('#theMan')
// const resetButton = document.querySelector('#reset')



// Functions

function isItOn(){
    console.log('running')
    if(isGameStarted === true){
        startButton.textContent = "reset"
    }
    else{
        startButton.textContent = "play"
    }
}
isItOn()

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];
}

// chooses the random word
function createRandomWordArr() {
  randomWordArr = randomWord.split('');
}
// makes the word an array



function getLetters() {
  keyboardDiv.innerHTML = "";

  letters.forEach(letter => {
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.classList.add("letter-btn");

    btn.addEventListener("click", () => {
      checkLetter(letter, btn);
    });

    keyboardDiv.appendChild(btn);
    theMan.setAttribute('src' , '/Photos/1.png')
    // resetButton.appendChild()
  });
  
}

function hideButtons() {
    resetButton.innerHTML = "";
    resetButton.appendChild()
  };
  


// takes the keyboard calss and makes all the letters a button

function checkLetter(letter, btn) {
  let isCorrect = false;

  randomWordArr.forEach((char, idx) => {
    if (char === letter) {
      userChoiceArr[idx] = letter;
      isCorrect = true;
    }
  });

// checks if the letter is in the word

  btn.disabled = true;

  if (!isCorrect) {
    mistakes++
       if(mistakes === 1){
        theMan.setAttribute ('src' , 'Photos/2.png')
       }
       else if (mistakes === 2){
        theMan.setAttribute ('src' , 'Photos/3.png')
       }
        else if (mistakes === 3){
        theMan.setAttribute ('src' , 'Photos/4.png')
       }
        else if (mistakes === 4){
        theMan.setAttribute ('src' , 'Photos/5.png')
       }
        else if (mistakes === 5){
        theMan.setAttribute ('src' , 'Photos/6.png')
       }
        else if (mistakes === 6){
        theMan.setAttribute ('src' , 'Photos/7.png')
       }
        else if (mistakes === 7){
        theMan.setAttribute ('src' , 'Photos/8.png')
       }


// adds a mistake to the game to track
    if (mistakes >= maxMistakes) {
      wordDiv.textContent = `u loose womp womp🤣. The word was: ${randomWord}`;
      disableAllLetters();
      return;
    }
  }

//   if you hit teh amx mistakes u lose the game and thsi message apears

  updateWordDisplay();

  if (!userChoiceArr.includes("_")) {
    wordDiv.textContent = `Damn u got it🧐🤓: ${randomWord}`;
    disableAllLetters();
  }
}

// and if u win this does the same but with a nicer message 

function updateWordDisplay() {
  wordDiv.textContent = userChoiceArr.join(" ");
}

function disableAllLetters() {
  const allButtons = document.querySelectorAll('.letter-btn');
  allButtons.forEach(btn => btn.disabled = true);
}

// when the game end this just makes the reainding letters un-useable

// Start game button
startButton.addEventListener('click', () => {
isGameStarted = !isGameStarted
  isItOn();
  getRandomWord();
  createRandomWordArr();
  userChoiceArr = randomWordArr.map(() => "_");
  updateWordDisplay();
  getLetters();
  mistakes = 0;
});

// resetButton.addEventListener('click', () => {
//   getRandomWord();
//   createRandomWordArr();
//   userChoiceArr = randomWordArr.map(() => "_");
//   updateWordDisplay();
//   getLetters();
//   mistakes = 0;
// });

// this is the start game and reset button 