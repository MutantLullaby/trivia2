// Trivia game Psuedo Code

// Welcome Page with msg "Welcome to Disney Trivia"
// Directions?
// Three strikes and you lose.
// The user should type their name.
// When user clicks button to submit their name the first question appears

$(document).ready(function() {

/*******************************************************************************
section 1
*******************************************************************************/

  var playerName = '';
  var playerAnswer1 = '';
  var answer1 = 'slumber party panic'
  var answer1 = 'slumber party panic'
  var correctCounter = 0;
  var triesleft = 3;

  // Hide Player Name
  $('#dashboard').hide();
  $('.question').hide();
  $('.correct-msg').hide();
  $('.incorrect-msg').hide();
  $('#lose-game-msg').hide();

/*******************************************************************************
Welcome Screen
*******************************************************************************/

  // type name immediately
  $('#player-name').focus();

    // welcome screen disappears
  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#dashboard').show().addClass('animated fadeIn');
    $('#question1').show().addClass('animated fadeIn').focus();
  };

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
    $('#welcome-screen').addClass('animated fadeOut');
    $('tries-left').text(triesleft);
    setTimeout(removeWelcomeScreen, 1000);
  });

/*******************************************************************************
Question 1
*******************************************************************************/
 
  // Store answer 1
  $('#question1-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer1 = $('#input-question1').val().trim().toLowerCase(); // player's input
    console.log('The players answer for question 1 is ' + playerAnswer1);
    // showPlayerAnswer1(); // This first showPlayerAnswer1 function
    answerCheck1();
  });

  // Show answers
  function showPlayerAnswer1() {
    $('#show-player-answer1').text(playerAnswer1);
    $('#correct-answer1').text(answer1)
  };

  //good / fade out msg
  function fadeOutAnswerCheckMsg() {
   $('#incorrect-msg1').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion() {
    $('#question1').addClass('fadeOut');
    setTimeout($('#question1').detach(), 2500);
    $('#question1').show().addClass('animated fadeIn')
  };

function triesLeftCountDown() {
  triesLeft--;
  $('#tries-left').text(triesLeft);
  if (triesLeft === 0) {
    $('.question').addClass('animated fadeOut');
    $('.question').detach();
    $('#lose-game-msg').show().addClass('animated fadeIn')
  };
};

  function answerCheck1() {
    if(playerAnswer1 === answer1) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      correctCounter++;
      $('#score').text(correctCounter);
    }
    else { //wrong
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      setTimeout(fadeOutAnswerCheckMsg, 2500);
    }

  };

/*******************************************************************************
QUESTION2
*******************************************************************************/

  // Store answer 2
  $('#question2-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer2 = $('#input-question2').val().trim().toLowerCase(); // player's input
    console.log('The players answer for question 1 is ' + playerAnswer2);
    // showPlayerAnswer2(); // This first showPlayerAnswer1 function
    answerCheck2();
  });

  // Show answers
  function showPlayerAnswer2() {
    $('#show-player-answer2').text(playerAnswer2);
    $('#correct-answer2').text(answer2)
  };

  //good / fade out msg
  function fadeOutAnswerCheckMsg() {
   $('#incorrect-msg2').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion2() {
    $('#question2').addClass('fadeOut');
    setTimeout($('#question2').detach(), 2500);
    $('#question2').show().addClass('animated fadeIn')
  };

function triesLeftCountDown() {
  triesLeft--;
  $('#tries-left').text(triesLeft);
  if (triesLeft === 0) {
    $('.question').addClass('animated fadeOut');
    $('.question').detach();
    $('#lose-game-msg').show().addClass('animated fadeIn')
  };
};

  function answerCheck2() {
    if(playerAnswer1 === answer1) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      correctCounter++;
      $('#score').text(correctCounter);
    }
    else { //wrong
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      setTimeout(fadeOutAnswerCheckMsg, 2500);
    }

  };

/*******************************************************************************
QUESTION3
*******************************************************************************/
}); // ready function ends