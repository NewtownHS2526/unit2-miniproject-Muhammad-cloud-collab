// -----------------------------
// Part 1 - Favorite Color Radio
// -----------------------------
const radioForm = document.getElementById("fav_color");
const radioOutput = document.getElementById("radio-output");

radioForm.addEventListener("change", function (e) {
  if (e.target.name === "fav_color") {
    radioOutput.textContent = `Your favorite color is ${e.target.value}!`;
  }
});


// -----------------------------
// Part 2 - Guessing Game
// -----------------------------
const numInput = document.getElementById("num-input");
const numOutput = document.getElementById("num-output");

const randomNumber = Math.floor(Math.random() * 100) + 1;

numInput.addEventListener("input", function () {
  const guess = Number(numInput.value);

  if (!guess) {
    numOutput.textContent = "Enter a number between 1 and 100.";
    return;
  }

  if (guess < randomNumber) {
    numOutput.textContent = "Too low!";
  } else if (guess > randomNumber) {
    numOutput.textContent = "Too high!";
  } else {
    numOutput.textContent = "🎉 Correct! You guessed it!";
  }
});


// -----------------------------
// Part 3 - Name the Continents
// -----------------------------
const textInput = document.getElementById("text-input");
const srAlert = document.getElementById("sr-continent-alert");

const continents = [
  "north america",
  "south america",
  "europe",
  "asia",
  "africa",
  "australia",
  "antarctica"
];

textInput.addEventListener("input", function () {
  const userInput = textInput.value.toLowerCase().trim();

  if (continents.includes(userInput)) {
    const imgId = userInput.replace(" ", "-");
    const img = document.getElementById(imgId);

    if (img) {
      img.style.visibility = "visible";
      srAlert.textContent = `${userInput} found!`;
    }
  }
});


// -----------------------------
// Part 4 - Background Color
// -----------------------------
const backForm = document.getElementById("back_color");
const colorPicker = document.getElementById("color");
const humanCheckbox = document.getElementById("human");

backForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!humanCheckbox.checked) {
    alert("Please confirm you're not a robot!");
    return;
  }

  document.body.style.backgroundColor = colorPicker.value;
});
