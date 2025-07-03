// /*-------------- Constants -------------*/


// const wordsAvailable = [
//     {word: "dog", hint: "A Mans Best Friend"},
//     {word: "cat", hint: "A Feline Friend"},
//     {word: "elephant", hint: "largest land animal"},
//     {word: "giraffe", hint: "Tallest animal"},
//     {word: "kangaroo", hint: "A marsupial from Australia"},
//     {word: "dolphin", hint: "Intelligent marine mammal"},
//     {word: "penguin", hint: "Flightless bird from Antarctica"},
//     {word: "panda", hint: "Black and white bear from China"},
//     {word: "tiger", hint: "Big cat with stripes"},
//     {word: "lion", hint: "King of the jungle"},
//     {word: "zebra", hint: "Striped horse-like animal"},
//     {word: "rabbit", hint: "Small furry animal with long ears"},
//     {word: "fox", hint: "Cunning and clever animal"},
//     {word: "bear", hint: "Large mammal that hibernates"},
//     {word: "wolf", hint: "Wild canine known for its pack behavior"},
//     {word: "whale", hint: "Largest mammal in the ocean"},
//     {word: "shark", hint: "Predatory fish with sharp teeth"},
//     {word: "octopus", hint: "Marine animal with eight arms"},
//     {word: "crocodile", hint: "Large reptile found in rivers and lakes"},
//     {word: "alligator", hint: "Similar to a crocodile, but with a broader snout"},
//     {word: "hippopotamus", hint: "Large semi-aquatic mammal with a big mouth"},
//     {word: "rhinoceros", hint: "Large herbivore with one or two horns on its snout"},
//     {word: "cheetah", hint: "Fastest land animal"},
//     {word: "sloth", hint: "Slow-moving tree-dwelling mammal"},
//     {word: "koala", hint: "Tree-dwelling marsupial from Australia"},
//     {word: "otter", hint: "Aquatic mammal known for its playful behavior"},
//     {word: "squirrel", hint: "Small rodent known for its bushy tail"},
//     {word: "hedgehog", hint: "Small spiny mammal that curls into a ball"},
//     {word: "porcupine", hint: "Rodent with sharp quills for protection"},
//     {word: "armadillo", hint: "Mammal with a protective shell"},
//     {word: "bat", hint: "Only flying mammal"},
//     {word: "dingo", hint: "Wild dog native to Australia"},
//     {word: "lemur", hint: "Primate native to Madagascar"},
//     {word: "meerkat", hint: "Small mongoose-like animal from Africa"},
//     {word: "narwhal", hint: "Marine mammal with a long tusk"},
//     {word: "walrus", hint: "Large marine mammal with tusks and whiskers"},
//     {word: "jellyfish", hint: "Gelatinous marine animal with tentacles"},
//     {word: "seahorse", hint: "Small marine fish with a horse-like head"},
//     {word: "starfish", hint: "Marine animal with five arms"},
//     {word: "crab", hint: "Crustacean with a hard shell and pincers"},
//     {word: "lobster", hint: "Large crustacean with claws"},
//     {word: "scorpion", hint: "Arachnid with a venomous sting"},
//     {word: "tarantula", hint: "Large hairy spider"},
//     {word: "firefly", hint: "Insect that emits light"},
//     {word: "butterfly", hint: "Insect with colorful wings"},
//     {word: "dragonfly", hint: "Insect with long wings and a slender body"},
//     {word: "grasshopper", hint: "Insect known for its jumping ability"},
//     {word: "beetle", hint: "Insect with a hard shell and wings"},
//     {word: "ant", hint: "Small insect that lives in colonies"},
//     {word: "bee", hint: "Insect known for producing honey"},
//     {word: "wasp", hint: "Insect similar to a bee but more aggressive"},
//     {word: "mosquito", hint: "Insect known for biting and sucking blood"},
//     {word: "fly", hint: "Common insect that can be a nuisance"},
//     {word: "spider", hint: "Arachnid with eight legs"},
//     {word: "snail", hint: "Slow-moving mollusk with a shell"},
//     {word: "slug", hint: "Similar to a snail but without a shell"},
//     {word: "worm", hint: "Long, slender invertebrate"},
//     {word: "caterpillar", hint: "Larval stage of a butterfly or moth"},
//     {word: "chameleon", hint: "Lizard known for changing color"},
//     {word: "iguana", hint: "Large lizard native to Central and South America"},
//     {word: "gecko", hint: "Small lizard known for its sticky feet"},
//     {word: "python", hint: "Large non-venomous snake"},
//     {word: "cobra", hint: "Venomous snake known for its hood"},
//     {word: "viper", hint: "Venomous snake with long fangs"},
//     {word: "anaconda", hint: "Large snake found in South America"},
//     {word: "rattlesnake", hint: "Venomous snake with a rattling tail"},
// ];

// const maxGuesses = 6;

// /*---------- Variables (state) ---------*/

// let currentWord, correctLetters, wrongGuessCount;

// /*----- Cached Element References  -----*/
// const wordDisplay = 
//     document.querySelector(".word-display");
// const keyboardDiv = 
//     document.querySelector(".keyboard");
// const hangmanImage = 
//     document.querySelector(".hangman-box img");
// const guessesText = 
//     document.querySelector(".guesses-text b");
// const gameModal = 
//     document.querySelector(".game-modal");
// const playAgainBtn = 
//     document.querySelector(".play-again");

// /*-------------- Functions -------------*/
// const resetGame = () => {
//   //Reset game variables and UI
//   correctLetters = [];
//   wrongGuessCount = 0;
//   hangmanImage.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173028/0.png`;
//   guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
//   keyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
//   wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
//   clearInterval(timerInterval);
//   startTimer();
//   gameModal.classList.remove("show");
// };

// const getRandomWord = () => {
//   const { word, hint } = codingQuiz[Math.floor(Math.random() * codingQuiz.length)];
//   currentWord = word;
//   console.log(word);
//   document.querySelector(".hint-text b").innerText = hint;
//   resetGame();
// };

// const startTimer = () => {
//   let timeLeft = gameTimeLimit;
//   timerInterval = setInterval(() => {
//     timeLeft--;
//     timerDisplay.innerText = `Time left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? "0" : ""}${timeLeft % 60}`;
//     if (timeLeft <= 0) {
//       clearInterval(timerInterval);
//       gameOver(false);
//     }
//   }, 1000);
// };

// const gameOver = (isVictory) => {
//   setTimeout(() => {
//     clearInterval(timerInterval);
//     const modalText = isVictory
//       ? ` Yeah! You found the word:`
//       : `You Loss! The correct word was:`;
//     gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
//     gameModal.classList.add("show");
//   }, 300);
// };

// const initGame = (button, clickedLetter) => {
//   if (currentWord.includes(clickedLetter)) {
//     [...currentWord].forEach((letter, index) => {
//       if (letter === clickedLetter) {
//         correctLetters.push(letter);
//         wordDisplay.querySelectorAll("li")[index].innerText = letter;
//         wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
//       }
//     });
//   } else {
//     wrongGuessCount++;
//     hangmanImage.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173931/${Math.min(wrongGuessCount, 6)}.png`;
//   }

//   button.disabled = true;
//   guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

//   if (wrongGuessCount === maxGuesses) return gameOver(false);
//   if (correctLetters.length === currentWord.length) return gameOver(true);
// };

// /*----------- Event Listeners ----------*/
// function getRandomWord() {
//   const randomIndex = Math.floor(Math.random() * wordsAvailable.length);
//   currentWord = wordsAvailable[randomIndex].word;
//   correctLetters = [];
//   wrongGuessCount = 0;
//   updateDisplay();
// }
// function updateDisplay() {
//   wordDisplay.innerHTML = "";
//   guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
//   hangmanImage.src = `./images/hangman-${wrongGuessCount}.png`;
// for (let i = 97; i <= 122; i++) {
//   const button = document.createElement("button");
//   button.innerText = String.fromCharCode(i);
//   keyboardDiv.appendChild(button);
//   button.addEventListener("click", (e) =>
//     initGame(e.target, String.fromCharCode(i))
//   );
// }

// getRandomWord(); 

// playAgainBtn.addEventListener("click", getRandomWord);