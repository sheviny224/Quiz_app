const questions = [
  {
    question: "welke is het grootste dier ter wereld?",
    answers : [
      {Text : "haai", correct: false},
      {Text : "Blue whale", correct: true},
      {Text : "Olifant", correct: false},
      {Text : "Giraffe", correct: false},
    ]
  },

  {
    question: "welke is het kleinste land op aarde?",
    answers : [
      {Text : "vatican City", correct: true},
      {Text : "Buthan", correct: false},
      {Text : "Monaco", correct: false},
      {Text : "Giraffe", correct: false},
    ]
  },

  {
    question: "welke is de grootste woestijn ter wereld?",
    answers : [
      {Text : "Kalahari", correct: false},
      {Text : "Gobi", correct: false},
      {Text : "Sahara", correct: false},
      {Text : "Antartica", correct: true},
    ] 
  },

  {
    question: "wat is het kleinste continent ter wereld?",
    answers : [
      {Text : "Azie", correct: false},
      {Text : "Australie", correct: true},
      {Text : "Artic", correct: false},
      {Text : "Afrika", correct: false},
    ]
  }
]; 

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  volgendeButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    answerButton.appendChild(button);

  })

}
