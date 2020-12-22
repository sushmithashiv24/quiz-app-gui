let questionText = document.querySelector('#question-text');
let answerText = document.querySelector('#answer-text');
let submit = document.querySelector('#btn-submit');
let alert = document.querySelector('#alert');
let alertWrong = document.querySelector('#alert-wrong');
let questionNumDisplay = document.querySelector('#question-num');
let displayScore = document.querySelector('#score');
let displayWrongScore = document.querySelector('#score-wrong');
let btnMcq = document.querySelector('#btn-mcq');
let mcqQuestion = document.querySelector('#mcqQuestion');
let oneWordQuestions = document.querySelector('#one-word-questions');
let mcqQuestions = document.querySelector('#mcq-questions');
let scoreDisplay = document.querySelector('#scores');
let displayFinalScore = document.querySelector('#final-score');

var questionsList = [{
        question: 'India\'s Largest City by Population: ',
        answer: 'Mumbai',
    },
    {
        question: 'National Song of India: ',
        answer: 'Vande Mataram',
    },
    {
        question: 'National Motto of India: ',
        answer: 'Satyameva Jayate',
    },
    {
        question: 'Golden Temple is situated in: ',
        answer: 'Amritsar',
    },
];


var mcqList = [

    {
        array: ['Mumbai', 'Hyderabad', 'Guragon', 'Bangalore'],
        question: 'Which City is known as "Electronic City of India"? ',
        answer: 'Bangalore'
    },
    {
        array: ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
        question: 'The Indian Institute of Science is located at ',
        answer: 'Bangalore'
    },
    {
        array: ['Dugong', 'Blue whale', 'River Dolphin', 'Pygmy Killer Whale'],
        question: 'What is the name of India\'s National Aquactic Animal: ',
        answer: 'River Dolphin'
    },
    {
        array: ['New Delhi', 'Hyderabad', 'Amritsar', 'Mumbai'],
        question: 'The Centre for Cellular and Molecular Biology in India is situated at: ',
        answer: 'Hyderabad'
    },
    {
        array: ['Delhi', 'Dehradun', 'Lucknow', 'Gandhinagar'],
        question: 'National Institute of Aeronautical Engineering is located at ',
        answer: 'Delhi'
    },
    {
        array: ['T.N.Kaul', 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
        question: 'Who wrote the famous book - "We the people"? ',
        answer: 'Nani Palkhivala'
    },
];

let questionNo = 0;
let score = 0;
let finalScore;

submit.addEventListener('click', function quizBtn() {
    answer = answerText.value;
    quiz(answer, questionNo);
    questionNo++;
    // console.log(questionNo);
    if (questionNo > 3) {
        // console.log(questionNo);
        // console.log('Hello');
        oneWordQuestions.className = 'hide'
        mcqQuestions.className = 'show';

    } else {
        // console.log(questionNo);
        questionNumDisplay.innerText = questionNo + 1;
        questionText.innerText = questionsList[questionNo].question;
        answerText.value = '';
    }
    // questionNumDisplay.innerText = questionNo + 1;
    // questionText.innerText = questionsList[questionNo].question;
    // answerText.value = '';
});

function quiz(answer, questionNum) {
    // console.log(questionNum);
    // console.log(answer);
    if (answer.toLowerCase() === questionsList[questionNum].answer.toLowerCase()) {
        // console.log('Right');
        // console.log(score);
        score += 2;
        // console.log(score);
        displayScore.innerText = score;
        alert.className = 'show';
        setTimeout(function() {
            alert.className = alert.className.replace("show", "");
        }, 1000);
    } else {
        // console.log(score);
        score -= 1;
        if (score < 0) {
            score = 0;
        }
        // console.log(score);
        displayWrongScore.innerText = score;
        alertWrong.className = 'show';
        setTimeout(function() {
            alertWrong.className = alertWrong.className.replace("show", "");
        }, 1000);
    }
}

let choice = document.querySelectorAll('input[name="quizQuestions"]');
let mcqLabels = document.querySelectorAll('.mcqLabel');
// console.log(mcqLabels);
let questionNoMcq = 0;
let questionNoMcqLabel = 3;
btnMcq.addEventListener('click', function mcqQuiz() {
    let selectedText;
    // console.log(choice.check);
    for (const selectedChoice of choice) {
        // console.log(selectedChoice);
        if (selectedChoice.checked) {
            // console.log(selectedChoice.checked);
            selectedText = selectedChoice.value;
            // console.log(selectedText);
            // break;
        }
    }
    mcq(selectedText, questionNoMcq);
    questionNoMcq++;
    questionNoMcqLabel++;
    questionNumDisplay.innerText = questionNoMcqLabel + 1;
    if (questionNoMcq >= 6) {
        // console.log('Hello');
        // finalScoreAlert();
        mcq('', questionNoMcq)
            // window.alert('Thank You');
    } else {
        mcqQuestion.innerText = mcqList[questionNoMcq].question;

        for (let i = 0; i < mcqList[questionNoMcq].array.length; i++) {
            for (let i = 0; i < choice.length; i++) {
                choice[i].value = mcqList[questionNoMcq].array[i];
                // console.log(choice[i].value);
            }
        }

        for (let i = 0; i < mcqLabels.length; i++) {
            // console.log(mcqLabels[i].htmlFor);
            // console.log(mcqList[questionNoMcq].array[i]);
            mcqLabels[i].htmlFor = mcqList[questionNoMcq].array[i];
            mcqLabels[i].innerText = mcqList[questionNoMcq].array[i];
        }
    }
})

function mcq(selectedText, questionNoMcq) {
    console.log(questionNoMcq);
    // if (condition) {

    // }
    if (selectedText === mcqList[questionNoMcq].answer) {
        // console.log(mcqList[questionNoMcq].answer);
        // console.log('Yes')
        score += 2;
        console.log(score);
        displayScore.innerText = score;
        alert.className = 'show';
        setTimeout(function() {
            alert.className = alert.className.replace("show", "");
        }, 1000);
    } else {
        // console.log('No');
        score -= 1;
        if (score < 0) {
            score = 0;
        }
        finalScore = score;
        // console.log(score);
        console.log(questionNoMcq);
        if (questionNoMcq == 5) {
            console.log(questionNoMcq);
            console.log('HEllo');
            finalScoreAlert(finalScore);
        } else {
            console.log(questionNoMcq);
            displayWrongScore.innerText = score;
            alertWrong.className = 'show';
            setTimeout(function() {
                alertWrong.className = alertWrong.className.replace("show", "");
            }, 1000);
        }

    }
}

function finalScoreAlert(scre) {
    displayFinalScore.innerText = scre;
    scoreDisplay.className = 'show';
    setTimeout(function() {
        scoreDisplay.className = scoreDisplay.className.replace("show", "");
    }, 2000);
}