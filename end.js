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


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');
const btnsOpenModal2 = document.querySelector('.show-modal2');
const btnsOpenModal3 = document.querySelector('.show-modal3');

/*
const modalWindowFunc = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); };
    */



const openWindowOne = btnsOpenModal.addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); });

    const openWindowTwo = btnsOpenModal2.addEventListener('click', function () {
        console.log('Button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden'); });

        const openWindowThree = btnsOpenModal3.addEventListener('click', function () {
            console.log('Button clicked');
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden'); });


/*}; else if (btnsOpenModal2.addEventListener('click')) {
    modalWindowFunc();
    } else (btnsOpenModal3.addEventListener('click')) {
        modalWindowFunc();
    };
/*
for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal.addEventListener('click', function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
*/

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden'); 
};


for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click',closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
        }
    });




