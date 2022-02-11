const quizData = [
    {
        question: 'How old is Dev?',
        a: '10',
        b: '15',
        c: '18',
        d: '101',
        correct: 'c'
    },
    {
        question: 'Which is the best programming language?',
        a: 'JavaScript',
        b: 'Java',
        c: 'C++',
        d: 'Python',
        correct: 'd'
    },
    {
        question: 'Who is the best Writer?',
        a: 'Stephen King',
        b: 'Khaled Hosseini',
        c: 'Gillian Flynn',
        d: 'George R.R. Martin',
        correct: 'b'
    },
    {
        question: 'Which is the best game?',
        a: 'GTAV',
        b: 'Valorant',
        c: 'Resident Evil 2 Remake',
        d: 'Resident Evil 7: Biohazard',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelect();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    for (const answerEl of answerEls) {
        if (answerEl.checked) {
            answer = answerEl.id;
        };
    }
    return answer;
}

function deSelect() {
    const answerEls = document.querySelectorAll('.answer');
    for (const answerEl of answerEls) {
        answerEl.checked = false;
    }
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Play Again. Yeah fucker, do it. You'll get better score this time, hopefully.</button>`;
        }
    } 
});