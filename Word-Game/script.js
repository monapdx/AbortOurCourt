const elements = [
"",
""
];
// The above array was a decoy. You weren’t peeking at the array were you? 
// Now the real array with all elements via https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const Els = [
"alluring",
"appealing",
"charming",
"cute",
"dazzling",
"delicate",
"delightful",
"elegant",
"exquisite",
"fascinating",
"fine",
"good-looking"
"gorgeous",
"graceful",
"grand",
"handsome",
"lovely",
"magnificent",
"marvelous",
"pleasing",
"pretty",
"splendid",
"superb",
"stunning",
"wonderful",
];

let Elsguessed = [];
let domGuess = document.querySelector('#guess');
let domGuesses = document.querySelector('#guessed');
let domRemaining = document.querySelector('#remain');

function matchGuess(guess) {
    
    guess.preventDefault();    
    let thisGuess = domGuess.value.toLowerCase();    
    let domItem = document.createElement('li');

    if ( Els.includes(thisGuess) ) {
        if (checkGuesses(thisGuess)) return;
        domItem.textContent = thisGuess;
        domGuesses.appendChild(domItem);
        domGuess.value = "";
        keepGuesses(thisGuess);
        keepScore();
    }
  
  domGuess.focus();

}

function keepScore() {
    domRemaining.textContent = Els.length - domGuesses.querySelectorAll('li').length;
}

function keepGuesses(guess) {
    Elsguessed.push(guess);
}

function checkGuesses(guess) {
    return Elsguessed.includes(guess);
}

// NEW! Use els array to provide validation pattern, upper/lowercase match [Tt]ag
const pattern = Els.map(tag => {
    return `[${tag.charAt(0)}${tag.charAt(0).toUpperCase()}]${tag.slice(1)}`;
}).join('|');
if (pattern.length) {
  domGuess.setAttribute('pattern', pattern);
}

document.querySelector('#remain').textContent = Els.length;
document.querySelector('#form').addEventListener('submit', matchGuess, false);