/* global getAnimalData, getQuoteData, getAdviceData, formData */

var $body = document.querySelector('body');
var $title = document.querySelector('.page-title');
var $slogan = document.querySelector('.slogan');
var $sadButton = document.querySelector('.sad');
var $happyButton = document.querySelector('.happy');
var $moods = document.querySelector('.mood-container');
var $sadView = document.querySelector('.sad-view-container');
var $happyView = document.querySelector('.happy-view-container');
var $entriesView = document.querySelector('.entry-view-container');
var $dogImg = document.querySelector('.dog');
var $quote = document.querySelector('.quote');
var $author = document.querySelector('.author');
var $advice = document.querySelector('.advice');
var $homeIcon = document.querySelector('.fa-home');
var $entryIcon = document.querySelector('.fa-bars');
var $sadReviewBtn = document.querySelector('.review-container');
var $happyReviewBtn = document.querySelector('.happy-review-container');
var $sadEncouragement = document.querySelector('.sad-like-container');
var $sadEncouragementPhrase = document.querySelector('.encouragement');
var $happyEncouragement = document.querySelector('.happy-like-container');
var $happyEncouragementPhrase = document.querySelector('.happy-encouragement');
var $newEntryBtn = document.querySelector('.new-entry-btn');
var $entryList = document.querySelector('.entry-container');
var $entryPlaceholder = document.querySelector('.placeholder-container');
var $formView = document.querySelector('.form-container');
var $form = document.querySelector('form');
var $name = document.querySelector('#name');
var $moodInput = document.querySelector('#mood-input');
var $notes = document.querySelector('#notes');

var encouragements = ['Today is a different day than yesterday.', 'Believe in yourself.', 'Go kick ass!'];

$title.addEventListener('click', showHome);
$homeIcon.addEventListener('click', showHome);
$entryIcon.addEventListener('click', showEntries);
$sadButton.addEventListener('click', showSadView);
$happyButton.addEventListener('click', showHappyView);
$sadReviewBtn.addEventListener('click', doAfterSadReview);
$happyReviewBtn.addEventListener('click', doAfterHappyReview);
$newEntryBtn.addEventListener('click', showForm);
$form.addEventListener('submit', submitEntry);

function hideEntryPlaceholder() {
  $entryPlaceholder.className = 'placeholder-container hidden';
}
var entry = {
  name: $name.value,
  mood: $moodInput.value,
  notes: $notes.value,
  entryId: formData.nextEntryId,
  date: new Date()
};

function getDate(entry) {
  var newDate = new Date(entry.date);
  var month = newDate.getMonth();
  var year = newDate.getFullYear();
  var day = newDate.getDate();
  return monthName(month) + ' ' + day + ', ' + year;
}

function submitEntry(event) {
  event.preventDefault();

  var entry = {
    name: $name.value,
    mood: $moodInput.value,
    notes: $notes.value,
    entryId: formData.nextEntryId,
    date: new Date()
  };

  $entryList.prepend(createEntry(entry));
  formData.entries.unshift(entry);
  formData.nextEntryId++;
  $form.reset();
  showEntries();
}

function createEntry(entry) {
  var $entry = document.createElement('ul');
  $entry.className = 'entry';

  var $userTimeContainer = document.createElement('div');
  $userTimeContainer.className = 'user-time-container';

  var $userName = document.createElement('li');
  $userName.textContent = entry.name;
  $userName.className = 'user-name';

  var $timeStamp = document.createElement('li');
  $timeStamp.textContent = getDate(entry);
  $timeStamp.className = 'timestamp';

  var $userMood = document.createElement('li');
  $userMood.textContent = entry.mood;
  $userMood.className = 'user-mood';

  var $userNotes = document.createElement('li');
  $userNotes.textContent = entry.notes;
  $userNotes.className = 'user-notes';

  $entry.appendChild($userTimeContainer);
  $userTimeContainer.appendChild($userName);
  $userTimeContainer.appendChild($timeStamp);
  $entry.appendChild($userMood);
  $entry.appendChild($userNotes);

  return $entry;
}

function showForm() {
  $entriesView.className = 'entry-view-container hidden';
  $formView.className = 'form-container center';
}

function showEntries() {
  hideHome();

  $sadView.className = 'sad-view-container hidden';
  $happyView.className = 'happy-view-container hidden';
  $body.setAttribute('class', '');

  if (formData.entries.length) {
    hideEntryPlaceholder();
  }

  $entriesView.className = 'entry-view-container';
  $formView.className = 'form-container center hidden';
}

function doAfterSadReview(event) {
  if (event.target.matches('.sad-dislike')) {
    getAnimalData(setDogImg);
    getQuoteData(setQuote);
  }

  if (event.target.matches('.sad-like')) {
    showSadEncouragement();
    $sadEncouragementPhrase.textContent = encouragements[getRandomInt(encouragements)];
    setTimeout(showHome, 2200);
  }
}

function doAfterHappyReview(event) {
  if (event.target.matches('.happy-dislike')) {
    getAdviceData(setAdvice);
  }

  if (event.target.matches('.happy-like')) {
    $happyEncouragement.className = 'happy-like-container';
    $happyView.className = 'happy-view-container hidden';

    $happyEncouragementPhrase.textContent = encouragements[getRandomInt(encouragements)];
    setTimeout(showHome, 2200);
  }
}

function getRandomInt(arr) {
  var length = arr.length;
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
  $sadEncouragement.className = 'sad-like-container hidden';
  $happyEncouragement.className = 'happy-like-container hidden';
  $formView.className = 'form-container hidden';
  $entriesView.className = 'entry-view-container hidden';
  $body.setAttribute('class', '');
}

function showSadView() {
  hideHome();
  getAnimalData(setDogImg);
  getQuoteData(setQuote);
  $sadView.className = 'sad-view-container';
}

function showSadEncouragement() {
  $sadView.className = 'sad-view-container hidden';
  $sadEncouragement.className = 'sad-like-container';
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

function monthName(num) {
  switch (num) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'Spetember';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
  }
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (var entryNum = 0; entryNum < formData.entries.length; entryNum++) {
    $entryList.appendChild(createEntry(formData.entries[entryNum]));
  }
});
