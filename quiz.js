const questions = [
    {
        Question: "Who was the first president of Kenya?",
        answers: [
            {text: "Raila Odinga", correct: false},
            {text: "Jomo Kenyatta", correct: true},
            {text: "Daniel Moi", correct: false},
            {text: "Dedan Kimathi", correct: false},
        ]
    },
    {
        Question: "What is the capital city of Kenya?",
        answers: [
            {text: "Nairobi", correct: true},
            {text: "Nakuru", correct: false},
            {text: "Mombasa", correct: false},
            {text: "Machakos", correct: false},
        ]
    },
    {
        Question: "Which is the highest mountain in the world?",
        answers: [
            {text: "Mt.Kilimanjaro", correct: false},
            {text: "Mt.Longonot", correct: false},
            {text: "Mt.Everest", correct: true},
            {text: "Mt.Kenya", correct: false},
        ]
    },
    {
        Question: "Which country is known for its pyramids?",
        answers: [
            {text: "England", correct: false},
            {text: "Egypt", correct: true},
            {text: "Tanzania", correct: false},
            {text: "UAE", correct: false},
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.
    Question;
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}
function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true' ;
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==='true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block'
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Your score: ${score}/ ${questions.length}`;
    nextButton.innerHTML = 'Try again';
    nextButton.style.display = 'block';
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})



startQuiz();




