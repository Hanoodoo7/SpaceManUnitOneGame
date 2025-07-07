// State variables
const words = ['byzz', 'riri', "ant", "antelope", "ape", "armadillo", "baboon", "badger", "bat", "bear", "beaver", "bee", "beetle", "bird", "bison",
  "boar", "bobcat", "buffalo", "bull", "butterfly", "camel", "canary", "capybara", "carp", "cat", "caterpillar", "catfish",
  "chameleon", "cheetah", "chicken", "chimpanzee", "chinchilla", "chipmunk", "clam", "clownfish", "cobra", "cockroach",
  "cod", "cougar", "cow", "coyote", "crab", "crane", "cricket", "crocodile", "crow", "deer", "dingo", "dog", "dolphin",
  "donkey", "dove", "dragonfly", "duck", "eagle", "earthworm", "eel", "elephant", "elk", "emu", "falcon", "ferret",
  "finch", "firefly", "fish", "flamingo", "flea", "fly", "fox", "frog", "gazelle", "gecko", "gerbil", "giraffe", "gnat",
  "goat", "goldfish", "goose", "gorilla", "grasshopper", "guinea pig", "gull", "hamster", "hare", "hawk", "hedgehog",
  "heron", "hippopotamus", "hornet", "horse", "hummingbird", "hyena", "ibis", "iguana", "jackal", "jaguar", "jellyfish",
  "kangaroo", "kingfisher", "kiwi", "koala", "komodo dragon", "ladybug", "lamb", "lemur", "leopard", "lion", "lizard",
  "llama", "lobster", "locust", "lynx", "macaw", "magpie", "mallard", "manatee", "mandrill", "manta ray", "marmoset",
  "marmot", "meerkat", "millipede", "mole", "monkey", "moose", "mosquito", "moth", "mouse", "mule", "narwhal", "newt",
  "nightingale", "octopus", "okapi", "opossum", "orangutan", "orca", "ostrich", "otter", "owl", "ox", "oyster", "panda",
  "panther", "parrot", "peacock", "pelican", "penguin", "pheasant", "pig", "pigeon", "platypus", "polar bear",
  "pony", "porcupine", "possum", "prairie dog", "prawn", "puffin", "puma", "puppy", "python", "quail", "rabbit",
  "raccoon", "rat", "raven", "red panda", "reindeer", "rhino", "robin", "rooster", "salamander", "salmon", "scorpion",
  "seagull", "seal", "shark", "sheep", "shrew", "shrimp", "skunk", "sloth", "snail", "snake", "sparrow", "spider",
  "squid", "squirrel", "starfish", "stingray", "stork", "swan", "tapir", "termite", "tiger", "toad", "tortoise",
  "toucan", "trout", "tuna", "turkey", "turtle", "vulture", "wallaby", "walrus", "wasp", "weasel", "whale", "whippet",
  "wild boar", "wildcat", "wolf", "wolverine", "wombat", "woodpecker", "worm", "yak", "zebra"];
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