const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;
const fName = document.querySelector(".fname");
const lName = document.querySelector(".lname");
const nameBTN = document.querySelector(".name-button");

saveHighScore = (e) => {
    e.preventDefault();
};

const firstName = [
    "Sarah", "Oisin", "Saoirse", "Eanna", "Frodo"]

const lastName = [
    "Walsh", "Griffin", "Leahy", "Phelan", "Smith"
]


nameBTN.addEventListener('click', function() {
    fName.innerHTML =
    firstName[Math.floor(Math.random() * firstName.length)];

    lName.innerHTML = 
    lastName[Math.floor(Math.random() * lastName.length)];
});





