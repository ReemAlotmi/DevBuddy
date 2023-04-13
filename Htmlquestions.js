const quizData = [
    {
        question: "Choose the correct HTML element for the largest heading:",
        a: "<head>",
        b: "<heading>",
        c: "<h1>",
        d: "<h6>",
        correct: "c",
    },
    {
        question: "Choose the correct HTML element to insert a break line:",
        a: "<break>",
        b: "<br>",
        c: "<lb>",
        d: "</br>",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Choose the correct HTML element to define important text?",
        a: "<strong>",
        b: "<i>",
        c: "<important>",
        d: "none of the above",
        correct: "a",
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
    }
    )
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
        alert("Time is out!! :( ");

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