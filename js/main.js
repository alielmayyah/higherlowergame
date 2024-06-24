let higher = document.getElementById("higher");
let lower = document.getElementById("lower");

let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");

let guessCircle = document.getElementById("guess-circle");

let pcGuess = Math.floor(Math.random() * 10 + 1);
let guessButton = document.getElementById("guess-button");
let guessesText = document.getElementById("guesses-text");
let guessesCount = 0;
let statusText = document.getElementById("status-text");

let startText = document.getElementById("start-text");

// Convert the innerText to a number
let guess = parseInt(guessCircle.innerText);

decrease.onclick = function () {
  guessArrowsCheck();
  guess -= 1;
  guessCircle.innerText = guess;
  guessArrowsCheck();
};

increase.onclick = function () {
  guessArrowsCheck();
  guess += 1;
  guessCircle.innerText = guess;
  guessArrowsCheck();
};

// increase.ondblclick = function () {
//   guessArrowsCheck();
//   guess += 2;
//   guessCircle.innerText = guess;
// };
// decrease.ondblclick = function () {
//   guessArrowsCheck();
//   guess -= 2;
//   guessCircle.innerText = guess;
// };

function guessArrowsCheck() {
  if (guess <= 0) {
    guess = 0;
    decrease.style.opacity = "0";
  } else if (guess >= 10) {
    guess = 10;
    increase.style.opacity = "0";
  } else {
    decrease.style.opacity = "1";
    increase.style.opacity = "1";
  }
}

guessButton.onclick = function () {
  guessesCount += 1;
  startText.style.display = "none";
  if (guess < pcGuess) {
    lower.style.display = "none";
    higher.style.display = "block";
    statusText.innerText = "Higher";
  } else if (guess > pcGuess) {
    higher.style.display = "none";
    lower.style.display = "block";
    statusText.innerText = "Lower";
  } else {
    increase.style.opacity = "0";
    decrease.style.opacity = "0";
    higher.style.display = "none";
    lower.style.display = "none";
    statusText.innerText = `You Won!`;
    guessButton.innerText = "Play Again";
    guessButton.onclick = function () {
      window.location.reload();
    };
  }
  guessesText.innerHTML = `Guesses = ${guessesCount}`;
};

//nightmode

checkBox = document.getElementById("checkbox");

checkBox.onclick = function () {
  document.body.className = "text-dark";
  guessCircle.classList.add("text-white");
};
