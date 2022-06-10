const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Who Proceeded James T. Kirk as captain of the U.S.S. Enterprise? ',
        choice1: 'Robert April',
        choice2: 'Christopher Pike',
        choice3: 'Spock',
        choice4: 'Jean Luc Picard',
        answer: 2,
    },
    {
        question:
            "Who Captained the first known Federation ship to spar with the Borg and survive?",
        choice1: "Kirk",
        choice2: "Janeway",
        choice3: "Picard",
        choice4: "Sisko",
        answer: 3,
    },
    {
        question: " Which Captain became known as the Emissary of the Prophets to the Bajorans",
        choice1: "Sisko",
        choice2: "Picard",
        choice3: "Archer",
        choice4: "Burnham",
        answer: 1,
    },

    {
        question: " Wich captain was so close to William T. Riker that he likened them to his cha'Dlch?",
        choice1: "Picard",
        choice2: "Michael Burnham",
        choice3: "Carol Freeman",
        choice4: "Sisko",
        answer: 3,
    },
    {
        question: " Which captain left Starfleet after they refused aid to the Romulans?",
        choice1: "Kirk",
        choice2: "Picard",
        choice3: "Burnham",
        choice4: "Archer",
        answer: 2,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/ ${ MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            if (classToApply === "correct") {
                incrementScore(CORRECT_BONUS);
            }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);   
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();