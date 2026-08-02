//start screen button
start_btn = document.getElementById("start-btn");
start_screen = document.getElementById("start-screen");
quiz_screen = document.getElementsByClassName("quiz-screen");
console.log(quiz_screen);

quiz_header = document.getElementsByClassName("quiz-header");
quiz_info = document.getElementsByClassName("quiz-info");

start_btn.addEventListener("click", () => {
  start_screen.style.display = "none";
  quiz_screen.style.display = "";
});

const QuizQuestions=[
    {
        questions :"What is the capital of france ?",
        answer:[
            {text:"London",correct:false},
            {text:"Berlin",correct:false},
            {text:"Paris",correct:true},
            {text:"Madrid",correct:false}   
        ],
    }
    ]
