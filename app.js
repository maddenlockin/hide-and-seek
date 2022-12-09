// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);

    correctHidingPlaceEl.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}

function resetStyles() {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
shedButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('shed', correctSpot);
});

treeButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('tree', correctSpot);
});

boulderButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('boulder', correctSpot);
});
