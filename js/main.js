/* global getAnimalData, getQuoteData, getAdviceData */

var $body = document.querySelector('body');
var $title = document.querySelector('.page-title');
var $slogan = document.querySelector('.slogan');
var $sadButton = document.querySelector('.sad');
var $happyButton = document.querySelector('.happy');
var $moods = document.querySelector('.mood-container');
var $sadView = document.querySelector('.sad-view-container');
var $happyView = document.querySelector('.happy-view-container');
var $dogImg = document.querySelector('.dog');
var $quote = document.querySelector('.quote');
var $author = document.querySelector('.author');
var $advice = document.querySelector('.advice');
var $homeIcon = document.querySelector('.fa-home');
var $sadReviewBtn = document.querySelector('.review-container');
var $happyReviewBtn = document.querySelector('.happy-review-container');
var $encouragement = document.querySelector('.sad-like-container');
var $encouragementPhrase = document.querySelector('.encouragement');

var encouragements = {
  1: 'Today is a different day than yesterday.',
  2: 'Believe in yourself.',
  3: 'Go kick ass!'
};

$title.addEventListener('click', showHome);
$homeIcon.addEventListener('click', showHome);
$sadButton.addEventListener('click', showSadView);
$happyButton.addEventListener('click', showHappyView);
$sadReviewBtn.addEventListener('click', doAfterSadReview);
$happyReviewBtn.addEventListener('click', doAfterHappyReview);

function doAfterSadReview(event) {
  if (event.target.matches('.sad-dislike')) {
    getAnimalData(setDogImg);
    getQuoteData(setQuote);
  }

  if (event.target.matches('.sad-like')) {
    showEncouragement();
    $encouragementPhrase.textContent = encouragements[getRandomInt(encouragements)];
    setTimeout(showHome, 2500);
  }
}

function doAfterHappyReview(event) {
  if (event.target.matches('.happy-dislike')) {
    getAdviceData(setAdvice);
  }

  // if (event.target.matches('.happy-like'))
}

function getRandomInt(obj) {
  var length = Object.keys(obj).length;
  return Math.floor(Math.random() * length) + 1;
}

function hideHome() {
  $moods.className = 'mood-container hidden';
  $slogan.className = 'slogan hidden';
  $homeIcon.className = 'fas fa-home';
}

function showHome() {
  $moods.className = 'mood-container';
  $slogan.className = 'slogan';
  $sadView.className = 'sad-view-container hidden';
  $happyView.className = 'happy-view-container hidden';
  $homeIcon.className = 'fas fa-home hidden';
  $encouragement.className = 'sad-like-container hidden';
  $body.setAttribute('class', '');
}

function showSadView() {
  hideHome();
  getAnimalData(setDogImg);
  getQuoteData(setQuote);
  $sadView.className = 'sad-view-container';
}

function showEncouragement() {
  $sadView.className = 'sad-view-container hidden';
  $encouragement.className = 'sad-like-container';
}

function showHappyView() {
  hideHome();
  $body.setAttribute('class', 'happy-view');
  $happyView.className = 'happy-view-container';
  getAdviceData(setAdvice);
}

function setDogImg(animal) {
  var animalData = animal;
  $dogImg.setAttribute('src', animalData.message);
}

function setQuote(quote) {
  var quoteData = quote;
  $quote.textContent = quoteData.content;
  $author.textContent = quoteData.author;
}

function setAdvice(quote) {
  var adviceData = quote;
  var advice = adviceData.slip.advice;
  $advice.textContent = advice;
}
