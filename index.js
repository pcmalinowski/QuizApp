$(function () {
  startQuiz();
  handleCorrectAnswerInfo();
  handleAnswerSubmitted();
  renderQuestionBox();
});

var choose = {
	questions: [
	{
      question: ``,
      answers: ['', '', '', ''],
      correctAnswer: ``
    },
    {
      question: ``,
      answers: [``, ``, ``, ``],
      correctAnswer: ``
    },
    {
      question: ``,
      answers: [``, ``, ``, ``],
      correctAnswer: ``
    },
    {
      question: ``,
      answers: [``, ``, ``, ``],
      correctAnswer: ``
    },
    {
      question: ``,
      answers: [``, ``, ``, ``],
      correctAnswer: ``
    },
    {
      question: ``,
      answers: [``, ``, ``, ``],
      correctAnswer: ``
    },
    {
      question: ``,
      answers: [``, ``, ``, ``],
      correctAnswer: ``
    },
    {
      question: ``,
      answers: [``, ``, ``, ``],
      correctAnswer: ``
    },
    {
      question: ``,
      answers: [``, ``, ``, ``],
      correctAnswer: ``
    },
    {
      question: ``,
      answers: [``, ``, ``, ``],
      correctAnswer: ``
    }
	],

questionIndex: 0,
totalCorrect: 0,

};