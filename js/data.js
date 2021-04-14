/* exported data */

function getAdvice() {
  var dataReq = new XMLHttpRequest();
  dataReq.open('GET', 'https://api.adviceslip.com/advice');
  dataReq.responseType = 'text';
  dataReq.addEventListener('load', function () {
    advice = JSON.parse(dataReq.response);
    // console.log(advice);
  });
  dataReq.send();
}

getAdvice();

function getQuote() {
  var dataReq = new XMLHttpRequest();
  dataReq.open('GET', 'https://api.quotable.io/random');
  dataReq.responseType = 'json';
  dataReq.addEventListener('load', function () {
    quote = dataReq.response;
  });
  dataReq.send();
}

getQuote();

function getAnimalData(someFunc) {
  var dataReq = new XMLHttpRequest();
  dataReq.open('GET', 'https://dog.ceo/api/breeds/image/random');
  dataReq.responseType = 'json';
  dataReq.addEventListener('load', function () {
    someFunc(dataReq.response);
  });

  dataReq.send();
}
