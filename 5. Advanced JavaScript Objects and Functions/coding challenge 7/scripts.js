
(function() {
  function Question(name, listAnswer, correctAnswer) {
    this.name = name;
    this.listAnswer = listAnswer;
    this.correctAnswer = correctAnswer;
  }
  
  var Question1 = new Question('What are JavaScript Data Types?', ['var', 'number', 'conditional'], 1);
  var Question2 = new Question('Explain how can you submit a form using JavaScript?', ['document.form[0].submit();', 'submit();'], 0);
  var Question2 = new Question('Javascript the coolest programming in the world?', ['yes', 'no'], 0);
  
  Question.prototype.displayQuestion = function() {
    console.log(this.name);
  
    for(var i=0; i<this.listAnswer.length; i++) {
      console.log(i + '. ' + this.listAnswer[i]);
    }
  }
 
  Question.prototype.checkAnswer = function(answerUser, callback) {
    var sc;
    if(this.correctAnswer === answerUser) {
      console.log('correct anwser');
      sc = callback(true);
    } else {
      console.log('should be choose other answer');
      sc = callback(false);
    }

    this.displayScore(sc); 
  }

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('--------------------------------------');
  }

  console.log(Question);
  
  var questions = [Question1, Question2];

  function score() {
    var sc = 0;
    return function(correct) {
      if(correct) {
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score();

  function nextQuestion() {
    
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    
    var answerUser = prompt('Choose the answer');
   
    if(answerUser !== 'exit') {
      questions[n].checkAnswer(parseInt(answerUser), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();
  
})();
