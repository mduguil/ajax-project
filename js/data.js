
/* exported getQuoteData, getAnimalData */

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
