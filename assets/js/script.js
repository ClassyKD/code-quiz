//Element Grabbers
var timerEl = document.getElementById('timer');
var questionsNumberEl = document.getElementById('questions');
var fillerEl = document.getElementById('filler');
var selectEl = document.getElementById('select');
var button1 = document.getElementById('A1');
var button2 = document.getElementById('A2');
var button3 = document.getElementById('A3');
var button4 = document.getElementById('A4');
var button5 = document.getElementById('A5');
var alertEl = document.getElementById('alert');
var textBox = document.getElementById('myText');
var button6 = document.getElementById('A6');
//Global elements

var correct = 0;
var timeLeft = 5;
var questionNumberPlace = 0;




//Questions
var q1 = {
    questionNum:"1",
    askq:"question",
    answer1:"sonic the hedgehog",
    answer2:"2",
    answer3:"2",
    answer4:"2",
    correctAnswer:"sonic the hedgehog",
};

var q2 = {
    questionNum: "2",
    askq:"question",
    answer1: "naruto",
    answer2: "2",
    answer3: "2",
    answer4: "2",
    correctAnswer: "naruto",
};

var q3 = {
    questionNum: "3",
    askq:"question",
    answer1: "1",
    answer2: "2",
    answer3: "2",
    answer4: "2",
    correctAnswer: "1",
};

var q4 = {
    questionNum: "4",
    askq:"question",
    answer1: "1",
    answer2: "2",
    answer3: "2",
    answer4: "2",
    correctAnswer: "1",
};

var q5 = {
    questionNum: "5",
    askq:"question",
    answer1: "1",
    answer2: "2",
    answer3: "2",
    answer4: "2",
    correctAnswer: "1",
};

var end = {
    questionNum: "",
    askq:"Congrats you got " + correct + " correct",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctAnswer: "",
    function () {clearInterval(timeInterval);}
};



var questionPool = [q1, q2, q3 ,q4 ,q5, end];
var currentQuestion = questionPool[questionNumberPlace];


//function on opening
function opening() {
    //start button
    document.getElementById("boxText").style.display = "none";
    questionsNumberEl.textContent = "Coding Quiz"
    fillerEl.textContent = "Press start to begin quiz"
    button5.textContent = "Start";
    
    document.getElementById("A5").addEventListener("click", startQuestion);
    //todo reset value to 0
    correct = 0;
    questionNumberPlace = 0;
    
}

//countdown
function countdown() {
  
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time left " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            Highscore();
            //todo end quiz
        }
    }, 1000);
}

//start button ignition
function startQuestion() {
    countdown();
    contentFill();
    button5.textContent = "";
    //fix questions
    
}



//questions ar
function contentFill() {
    currentQuestion = questionPool[questionNumberPlace];
    questionsNumberEl.textContent = currentQuestion.questionNum;
    fillerEl.textContent = currentQuestion.askq;
    button1.textContent = currentQuestion.answer1;
    button2.textContent = currentQuestion.answer2;
    button3.textContent = currentQuestion.answer3;
    button4.textContent = currentQuestion.answer4;
}

document.addEventListener("click", function(event) {
    if (event.target === button1 ||
    event.target === button2 ||
    event.target === button3 ||
    event.target === button4) 
        if (questionNumberPlace === 6) { 
            clearInterval(timeInterval)
        Highscore();
    } else if (event.target.textContent === currentQuestion.correctAnswer) {
            console.log("correct");
            ++correct;
            console.log (correct);  
            alertEl.textContent = "Correct";
            questionNumberPlace++;
            console.log (questionNumberPlace);
            contentFill();

        } else {
            console.log (correct);
            alertEl.textContent = "Wrong";
            console.log("Wrong");
            questionNumberPlace++;
            console.log (questionNumberPlace);
            timeLeft - 5
            contentFill();
        } else {
        return;
}});


function Highscore() {
    
    questionsNumberEl.textContent = "";
    fillerEl.textContent = "Enter name to save score";
    button1.textContent = "";
    button2.textContent = "";
    button3.textContent = "";
    button4.textContent = "";
    button6.textContent = "Submit";
    document.getElementById("boxText").style.display = "inline";
    document.addEventListener("click", function(event){
        if (event.target === button6) {
            
        }
    })
}

//fix Page Load Execute Below
opening();









