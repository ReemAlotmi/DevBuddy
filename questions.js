const quizData = [
    {
        question: "What does CSS stand for ?",
        a: "Cascading Style Sheets ",
        b: "Colorful Style Sheets",
        c: "Computer Style Sheets",
        d: "Creative Style Sheets",
        correct: "a",
    },

    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "At the end of the document",
        b: "In the <head> section ",
        c: "In the <body> section",
        d: "</br>",
        correct: "b",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: " body {color: black;}",
        b: "{body;color:black;}",
        c: "body:color=black;",
        d: "{body:color=black;}",
        correct: "a",
    },


    {
        question: "Which property is used to change the background color?",
        a: "color  ",
        b: "text-color  ",
        c: "bgcolor  ",
        d: "background-color ",
        correct: "d",
    },

    {
        question: "How do you select elements with class name 'test'?",
        a: ".test  ",
        b: "test  ",
        c: "*test  ",
        d: "#test",
        correct: "a",
    },


    {
        question: "To inserting a style sheet we can use",
        a: "External",
        b: "Internal",
        c: "Inline",
        d: " All of them",
        correct: "d",
    },

    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<css>",
        b: "<script>",
        c: "<style>  ",
        d: "None",
        correct: "c",
    },

    {
        question: "Simple selectors ,select elements based on",
        a: "name",
        b: " a certain state",
        c: "a part of an element",
        d: "an attribute",
        correct: "a",
    },


    {
        question: "In CSS Syntax is made of ",
        a: "Selector ,Value",
        b: "Selector ,Property ,Value ",
        c: "Property ,Value",
        d: "None",
        correct: "b",
    },

    {
        question: "Which CSS property controls the text size? ",
        a: " text-style",
        b: "text-size",
        c: "font-style",
        d: "font-size  ",
        correct: "d",
    },




];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    if(answer==null){
        alert("You did not selected an answer")
    }
    return answer
}


var totalTime = 90;
var minutes = Math.floor(totalTime / 60);
var seconds = totalTime - minutes * 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = minutes+":"+seconds;
    seconds--;
    if (seconds == -1) {
         minutes--;
         seconds=59
    if (minutes == -1) {
        clearInterval(time);
        alert("Time out!! :(");

         quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
    }
}
    }


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})