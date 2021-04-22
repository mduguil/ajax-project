
/* exported getQuoteData, getAnimalData, getAdviceData, formData */

var formData = {
  entries: [],
  nextEntryId: 1
};
var previousData = localStorage.getItem('feeling-entries');

if (previousData !== null) {
  formData = JSON.parse(previousData);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(formData);
  localStorage.setItem('feeling-entries', dataJSON);
});

function getQuoteData(callbackFunction) {
  var dataReq = new XMLHttpRequest();
  dataReq.open('GET', 'https://api.quotable.io/random');
  dataReq.responseType = 'json';
  dataReq.addEventListener('load', function () {
    callbackFunction(dataReq.response);
  });

  dataReq.send();
}

function getAnimalData(callbackFunction) {
  var dataReq = new XMLHttpRequest();
  dataReq.open('GET', 'https://dog.ceo/api/breeds/image/random');
  dataReq.responseType = 'json';
  dataReq.addEventListener('load', function () {
    callbackFunction(dataReq.response);
  });

  dataReq.send();
}

function getAdviceData(callbackFunction) {
  var dataReq = new XMLHttpRequest();
  dataReq.open('GET', 'https://api.adviceslip.com/advice');
  dataReq.responseType = 'json';
  dataReq.addEventListener('load', function () {
    callbackFunction(dataReq.response);
  });

  dataReq.send();
}
