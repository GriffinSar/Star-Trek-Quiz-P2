const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
var countDownTimer = 120;

//array of objects for each question and answer
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
    {
        question: " What Phrase do the Borg often use?",
        choice1: "Live Long and Prosper",
        choice2: "Make it so",
        choice3: "Resistance is Futile",
        choice4: "Today is a good day to die",
        answer: 3,
    },
    {
        question: " What was Picard's name as a Borg?",
        choice1: "Soong",
        choice2: "Lor",
        choice3: "Troy",
        choice4: "Locutus",
        answer: 4,
    },
    {
        question: "Christine Chapel originally joined the Enterprise because she was looking for whom?",
        choice1: "Fiance",
        choice2: "Brother",
        choice3: "Father",
        choice4: "Son",
        answer: 1,
    },
    {
        question: " What was the name of the first pilot episode of Star Trek? ",
        choice1: "The Waves",
        choice2: "The Starship",
        choice3: "The Cage",
        choice4: "The Walk",
        answer: 3,
    },
    {
        question: " In Star Trek VI, what is the name of the Klingon moon that spontaneously explodes?",
        choice1: "Praxis",
        choice2: "Bajor",
        choice3: "Qo'nos",
        choice4: "Kronos",
        answer: 1,
    },
    {
        question: " What was the name of the last The Next Generation film?",
        choice1: "Generations",
        choice2: "First Contact",
        choice3: "Insurrection",
        choice4: "Nemesis",
        answer: 4,
    },
    {
        question: " Which quadrant did Captain Janeway successfully cross?",
        choice1: "Alpha",
        choice2: "Beta",
        choice3: "Gamma",
        choice4: "Delta",
        answer: 4,
    },
    {
        question: " In Star Trek: Enterprise, what is Charles Tucker III's nickname?",
        choice1: "Chuckie",
        choice2: "CT",
        choice3: "Trip",
        choice4: "Cheese",
        answer: 3,
    },
    {
        question: "Which of the following captains had Shalaft's Syndrome?",
        choice1: "Kirk",
        choice2: "Picard",
        choice3: "Burnham",
        choice4: "Archer",
        answer: 2,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 14;
const INNCORECT_TIMER = -10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  countdownTimer = 120;
};



getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    } else {
      countDownTimer -= 10
  }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

//increases score for each right answer
incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

setInterval(function () {

  if (countDownTimer < 0) {
      endGame();
  } else {
      countDownTimer--
  }

  const timer = document.getElementById("timer")
  var timerString = "";
  if (countDownTimer > 60) {
      timerString += Math.floor(countDownTimer / 60) + "m ";
  }

  // make it so when the timer gets below 30 seconds the color changes from green to red
  if (countDownTimer < 30) {
      timer.setAttribute("class", "timerRed")
  }

  var seconds = countDownTimer % 60
  timerString += seconds + "s"
  timer.innerHTML = timerString
}, 1000)


function endGame() {
  return window.location.assign("/end.html")
}

//calls start game function
startGame();