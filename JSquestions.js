const quizData = [
    {
        question: "How to write an IF statement in JavaScript?",
        a: "if i == 5 then",
        b: "if i = 5",
        c: "if i == 5 then",
        d: "if (i == 5)",
        correct: "d",
    },
    {
        question: "How does a FOR loop start?",
        a: "for(i=0; i<=5; i++)",
        b: "for i=1 to 5",
        c: "for(i=0; i<=5)",
        d: "for(i<=5; i++)",
        correct: "a",
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        a: "Math.ceil(x,y)",
        b: "Math.max(x,y)",
        c: "ceil(x,y)",
        d: "top(x,y)",
        correct: "b",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "script tag",
        b: "js tag",
        c: "javascript tag",
        d: "scripting tag",
        correct: "a",
    },
    {
        question: "You define a method using ",
        a: "obj.method",
        b: "obj.method[]",
        c: "obj.method()",
        d: "obj-method",
        correct: "c",
    },
    {
        question: "Which event do you use to run something after the page has finished loading?",
        a: "onfinishedg",
        b: "onload",
        c: "onunload",
        d: "oncomplete",
        correct: "b",
    },
    {
        question: "How many parameters can be passed to one function?",
        a: "none",
        b: "as many as you like",
        c: "one for each argument",
        d: "one",
        correct: "c",
    },

{
        question: "Which event is specific to the keyboard?",
        a: "onclick",
        b: "onfocus",
        c: "onkeydown",
        d: "onkeyboardpree",
        correct: "c",
    },
    {
        question: "What label catches all values except those specified?",
        a: "otherwise",
        b: "default",
        c: "any",
        d: "all",
        correct: "b",
    },
    {
        question: "What HTML tag identified JavaScrip added to a web paget?",
        a: "<javaScript>",
        b: "<program>",
        c: "Script",
        d: "js",
        correct: "c",
    },




{
        question: "Which of the following JavaScrip statements are correct difinitions of an array?",
        a: "var a= new Array(100)",
        b: "var a= new Array[100]",
        c: "var[] a= new Array[100]",
        d: "a= new Array[100]",
        correct: "a",
    },
    {
        question: "The JavaScrip statement a= new Array(2,4)",
        a: "defines a new two-dimensional array a whose dimensions are 2 and 4",
        b: "defines an array a and assigns the values 2 and 4 to 1[1] and a[2]",
        c: "defines an array a and assigns the values 2 and 4 to 1[0] and a[1]",
        d: "defines a three-element array whose elements have indexes 2 through 4",
        correct: "c",
    },
    {
        question: "Which of the following JavaScript statements use arrays?",
        a: "k= a(i)",
        b: "k= a[i]",
        c: "k= a>>i",
        d: "k= a^i",
        correct: "b",
    },






{
        question: "Which machine actually executes the Java Script?",
        a: "The web server",
        b: "The machine which is running a web browser",
        c: "Java Script engine",
        d: "Both 1 and 3",
        correct: "b",
    },
    {
        question: "Which of the below is used in Java Script to insert special characters?",
        a: "&",
        b: "/",
        c: "-",
        d: "%",
        correct: "b",
    },
    
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        a: "Pathname",
        b: "Protocol",
        c: "Defaultstatus",
        d: "Host",
        correct: "c",
    },





    {
        question: "Which of the following is a client-side Java Script object?",
        a: "File",
        b: "Function",
        c: "FileUpload",
        d: "Time",
        correct: "c",
    },


    {
        question: "Which attribute needs to be changed to make elements invisible?",
        a: "visibilty",
        b: "visible",
        c: "invisibility",
        d: "invisible",
        correct: "a",
    },


    {
        question: "Why so Java and Java Script have similar name?",
        a: "The syntax of Java Script is loosely based on Java syntax",
        b: "Java Script is a stripped-down version of Java",
        c: "They both support Object Oriented Programmimg",
        d: "None of the above",
        correct: "a",
    },





    {
        question: "Which of the following is a server-side Java Script object?",
        a: "Function",
        b: "File",
        c: "FileUpload",
        d: "Date",
        correct: "b",
    },

    {
        question: "Which of the following is not a valid JavaScrip variable name?",
        a: "2java",
        b: "_java_and_java_names",
        c: "javaandjava",
        d: "None of the above",
        correct: "a",
    },


    {
        question: "What language define the behavior of a web page?",
        a: "HTML",
        b: "CSS",
        c: "XML",
        d: "Java Script",
        correct: "d",
    },


    {
        question: "Which of the following are capable of Java Script functions?",
        a: "Retirning multiple values",
        b: "Accepting parameters and returning values",
        c: "Accepting parameters",
        d: "all of the above",
        correct: "c",
    },


    {
        question: "What are the purposes of comments in JavaScript code? select incorrect option",
        a: "Comments can make the code easier to understand",
        b: "Comments can not help hide the code from browsers that cannot interpret JavaScrip",
        c: "Comments can help display a warning to users of old browsers that do not support JavaScrip",
        d: "none of the above",
        correct: "b",
    },


    {
        question: "A ? B : C is equivalent to ",
        a: "if (A) {B} else {C}",
        b: "if (A == B) C",
        c: "if (A != B) C",
        d: "if (A) {B ; C}",
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