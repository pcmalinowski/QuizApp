$(function () {
  startQuiz();
  handleAnswerSubmitted();
  renderQuestionFeedback();
  findQuestion();
});

var choose = {
	questions: [
	{
      question: `What character does Jim ask out by leaving her a voicemail?`,
      answers: ['Pam', 'Katy', 'Brenda', 'Karen'],
      rightAnswer: `Brenda`
    },
    {
      question: `How did the chair model die?`,
      answers: [`Car Crash`, `Overdose`, `Skydiving`, `Brushing her teeth`],
      rightAnswer: `Car Crash`
    },
    {
      question: `What is the name of Michael's computer?`,
      answers: [`Howard`, `Frank`, `Chevy`, `Harvey`],
      rightAnswer: `Harvey`
    },
    {
      question: `Where does Jim say you can buy gaydar?`,
      answers: [`Brookstone`, `Sharper Image`, `Skymall`, `RadioShack`],
      rightAnswer: `Sharper Image`
    },
    {
      question: `What soccer team was Jim on in 4th Grade?`,
      answers: [`The Orange Team`, `The Red Team`, `The Lightning`, `The Chargers`],
      rightAnswer: `The Orange Team`
    },
    {
      question: `What is the name of the file of Jan's racy vacation photo?`,
      answers: [`HOT`, `Jamaican Jan Sun Princess`, `Jamaican Jan Paradise`, `Vacation Jan By Micheal Scott`],
      rightAnswer: `Jamaican Jan Sun Princess`
    },
    {
      question: `What device does Pam use to time Dwights laps running around the building?`,
      answers: [`Digital Thermometer`, `Computer Mouse`, `Stopwatch`, `Cellphone`],
      rightAnswer: `Digital Thermometer`
    },
    {
      question: `What part Native American does Micheal claim to be?`,
      answers: [`1/6`, `1/3`, `2/15`, `4/18`],
      rightAnswer: `2/15`
    },
    {
      question: `During his survival mission, which of these did Micheal not take into the woods?`,
      answers: [`Camera`, `Lighter`, `Knife`, `Bag of Cereal`],
      rightAnswer: `Lighter`
    },
    {
      question: `What type of meat is in Dwight's meat sandwich?`,
      answers: [`Alligator`, `Pork`, `Pony`, `Goat`],
      rightAnswer: `Pony`
    }
	],

questionList: 0,
numberRight: 0,

};

function startQuiz() {
  $('#start-button').click(function (event) {
    $('#quiz-text').removeClass('hidden');
    $('#start-button').addClass('hidden');
  });
}

function resetQuiz() {
  choose.numberRight = 0;
  choose.questionList = 0;
}

function findQuestion() {
  var questionObj = choose.questions[choose.questionList];
  creatQuestionText();
  renderQuestionChoices(questionObj.answers);
}

function creatQuestionText() {
  var changeHTML = '<span>(' + (choose.questionList + 1) + '/' + choose.questions.length + ')</span>'
  var questionText = choose.questions[choose.questionList].question;
  $('.js-question').html(changeHTML + questionText);
}

function renderQuestionChoices(answers) {
  $('#questions-list label').each(function (index, label) {
    $(this).find('input').attr('value', answers[index]);
    $(this).find('input').prop('checked', false);
    $(this).find('span').text(answers[index]);
  });
}

function handleAnswerSubmitted() {
  $('#submit-choice').click(function (event) {
    event.preventDefault();
    var userPick = $('input[name="answerSelect"]:checked').val();
    checkAnswer(userPick);
  });
}

function checkAnswer(userPick) {
  var correctChoice = choose.questions[choose.questionList].rightAnswer;
  if (userPick == correctChoice) {
    choose.numberRight++;
    renderQuestionFeedback(true);
    choose.questionList++;
  } else if(userPick == undefined){
    renderQuestionFeedback('unanswered');
  } else {
    renderQuestionFeedback(false);
    choose.questionList++;
  }
  if (choose.questionList == choose.questions.length) {
    renderFinalResults();
  } else {
    findQuestion();
  }
}

function renderQuestionFeedback(boolean) {
  var feedback = $('.answer-feedback');
  if (boolean == true){
    feedback.find('h3').text('Yeshhh!');
  } else if (boolean == false){
    var bingo = choose.questions[choose.questionList].rightAnswer
    feedback.find(`h3`).text(`Toby, you are the worst. The correct answer was ${bingo}.`);
  } else if (boolean == 'unanswered'){
    feedback.find('h3').text('I will just wait till everyone goes home to make a decision.');
  }
}

function renderFinalResults() {
  $('#quiz-text').addClass('hidden');
  $('#restart-quiz').removeClass('hidden');
  var element = $('.js-quiz-results');
  element.html('<h2>' + 'You answered ' + choose.numberRight + ' of ' + choose.questions.length + ' right!' + '</h2>');
  handleQuizRestart();
}

function handleQuizRestart() {
  $('#restart-quiz').on('click', function (event) {
    $('#quiz-text').removeClass('hidden');
    $('#restart-quiz').addClass('hidden');
    $('.js-quiz-results').text('');
    resetQuiz();
    findQuestion();
  });
}
