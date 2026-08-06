//start screen button
const start_btn = document.getElementById("start-btn");
const start_screen = document.getElementById("start-screen");
const quiz_screen = document.getElementById("quiz-screen");
const quiz_header = document.querySelector(".quiz-header");
const quiz_info = document.querySelector(".quiz-info");
const answers_container = document.getElementById("answers-container");
const option = document.querySelectorAll(".answer");
let current_question = document.getElementById("current-question");
let Score = document.getElementById("Score");
let result_screen = document.getElementById("result-screen");
result_info = document.getElementById("result-info");
current_question = document.getElementById("current-question");


start_btn.addEventListener("click", () => {
  start_screen.style.display = "none";
  quiz_screen.style.display = "flex";
  quiz_header.style.display = "flex";
  quiz_info.style.display = "flex";
  answers_container.style.display = "flex";
  showQuestion();
});

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];
let currentQuestion = 0;
function showQuestion() {
  quiz_header.innerHTML = quizQuestions[currentQuestion].question;
  option.forEach((btn, index) => {
    btn.innerHTML = quizQuestions[currentQuestion].answers[index].text;
    current_question.innerText=currentQuestion+1 +" "
    btn.style.backgroundColor = "";
    btn.disabled = false;
  });
}

//logic every time index reach max value of arrary and everytime it's back to normal for every qestion
let score =0;
option.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    //logic : first access first of  quiz question then access options of first qeustion after ckeck if correct return true or wrong return false 

    if (quizQuestions[currentQuestion].answers[index].correct) {
      btn.style.backgroundColor = "green";
      score++
      Score.innerHTML=score
    } else {
      btn.style.backgroundColor = "red";
    }
    
    option.forEach((button) => {
      button.disabled = true;
    });
    
    setTimeout(() => {
      //logic : current_question  starting value = 0 then add one to previous value of current_question and it's repeat in every question also take half second to change question 
      currentQuestion++;
      if (currentQuestion < quizQuestions.length) {
        showQuestion();
      } else {
        quiz_header.innerHTML = "Quiz Finished!";
        answers_container.style.display = "none";
        result_screen.style.display = "flex";
        quiz_screen.style.display = "none";
        quiz_info.style.display = "none";
      }
    }, 500);
  });
});
