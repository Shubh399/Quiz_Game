  //start screen button
  const start_btn = document.getElementById("start-btn");
  const start_screen = document.getElementById("start-screen");
  const quiz_screen = document.getElementById("quiz-screen");
  const quiz_header = document.querySelector(".quiz-header");
  const quiz_info = document.querySelector(".quiz-info");
  const answers_container = document.getElementById("answers-container");
 const option = document.querySelectorAll(".answer");


  start_btn.addEventListener("click", () => {
    start_screen.style.display = "none";
    quiz_screen.style.display = "flex";
    quiz_header.style.display = "flex";
    quiz_info.style.display = "flex";
    answers_container.style.display='flex';

  });

  const quizQuestions = [
    {
      question1: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Paris", correct: true },
        { text: "Madrid", correct: false },
      ],
    },
    {
      question2: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question3: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      question4: "Which of these is NOT a programming language?",
      answers: [
        { text: "Java", correct: false },
        { text: "Python", correct: false },
        { text: "Banana", correct: true },
        { text: "JavaScript", correct: false },
      ],
    },
    {
      question5: "What is the chemical symbol for gold?",
      answers: [
        { text: "Go", correct: false },
        { text: "Gd", correct: false },
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
      ],
    },
  ];

  quiz_header.innerHTML = quizQuestions[0].question1;

 option.forEach((btn, index) => {
   btn.innerHTML = quizQuestions[0].answers[index].text;
 });

 