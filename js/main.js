var $title = document.querySelector('.page-title');
var $slogan = document.querySelector('.slogan');
var $sadButton = document.querySelector('.sad-container');
var $happyButton = document.querySelector('.happy-container');
var $moods = document.querySelector('.mood-container');
var $sadView = document.querySelector('.sad-view-container');
var $dogImg = document.querySelector('.dog');
var $quote = document.querySelector('.quote');
var $author = document.querySelector('.author');
var $homeIcon = document.querySelector('.fa-home');

$title.addEventListener('click', showHome);
$homeIcon.addEventListener('click', showHome);
$sadButton.addEventListener('click', showSadView);
// $happyButton.addEventListener('click');

function hideHome(event) {
  $moods.className = 'mood-container hidden';
  $slogan.className = 'slogan hidden';
  $homeIcon.className = 'fas fa-home';
}

function showHome(event) {
  $moods.className = 'mood-container';
  $slogan.className = 'slogan';
  $sadView.className = 'sad-view-container hidden';
  $homeIcon.className = 'fas fa-home hidden';
}

function showSadView() {
  hideHome();
  getAnimalData(setDogImg);
  getQuoteData(setQuote);
  $sadView.className = 'sad-view-container';
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
