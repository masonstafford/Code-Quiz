function playQuestion() {
    var startMenu = document.getElementById("firstDiv");
    startMenu.style.display = "none";
    loadQuestion();
}

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

var timer;
var int = 60;
var curQuestion = 0;
var questionArea = document.querySelector("#questionArea");
var answers = document.querySelector("#answers")
var result = document.querySelector("#result")

function countdown() {
    int--;

    document.querySelector("#timer").innerHTML = int;
    if (int === 0) {
        console.log("times up!");
        timesUp();
        timer = setInterval(countdown, 1000);
    } 
}

function loadQuestion() {
    timer = setInterval(countdown, 1000);
    questionArea.innerHTML = ""
    answers.innerHTML = ""
    questionArea.innerHTML = "<h3>" + questions[curQuestion].title + "</h3>";
    for (let i = 0; i < questions[curQuestion].choices.length; i++) {
        var buttonHolder = document.createElement("button");
        buttonHolder.textContent = questions[curQuestion].choices[i];
        console.log(questions[curQuestion].choices[i]);
        answers.appendChild(buttonHolder);
        buttonHolder.addEventListener("click", checkAnswers)
    }
}

function checkAnswers() {
    curQuestion++;
    console.log(this.textContent);
    var Qresult = document.createElement("h5");
    if (this.textContent === questions[curQuestion].answer) {
        
    } else {
        int = int -5
    }
    result.appendChild(Qresult);

    loadQuestion()

}

function timesUp() {
    clearInterval(timer)
    document.querySelector("#timer").innerHTML = int;
}

document.getElementById("start-button").addEventListener("click", playQuestion)