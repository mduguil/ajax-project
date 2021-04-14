var $sadButton = document.querySelector('.sad-container');
var $happyButton = document.querySelector('.happy-container');
var $moods = document.querySelector('.mood-container');
var $dogImg = document.querySelector('.dog');

$sadButton.addEventListener('click', showDogImg);
// $happyButton.addEventListener('click');

function hideHome(event) {
  $moods.className = 'mood-container hidden';
}

function showDogImg() {
  hideHome();
  getAnimalData(setDogImg);

}

function setDogImg(animal) {
  var animalData = animal;
  $dogImg.setAttribute('src', animalData.message);
}
