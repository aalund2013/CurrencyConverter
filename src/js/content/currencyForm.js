// include api for currency change
base_url = 'https://currency-converter5.p.rapidapi.com/currency/';
// const convert = document.getElementsByClassName("convert-button")
// console.log(convert)
// when user clicks, it calls function getResults
// const fromCurrency =
document.addEventListener('submit', function (e) {
  e.preventDefault();
  const currencyForm = document.querySelector('#currency-form');
  const from = document.querySelector('#from-currency').value;
  const to = document.querySelector('#to-currency').value;
  const amount = document.querySelector('#from-amount').value;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '77b84280a7msh7f71046025a9fcap133d5djsnff7dc983b150',
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
    },
  };
  fetchUrl =
    base_url +
    'convert?format=json&from=' +
    from +
    '&to=' +
    to +
    '&amount=' +
    amount;

  fetch(fetchUrl, options)
    .then((response) => response.json())
    .then((response) => displayResults(response, to))
    .catch((err) => console.error(err));
}); // UPDATE TO TAKE THE FORM INPUT

// function getCurrencies
function getCurrencies() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '77b84280a7msh7f71046025a9fcap133d5djsnff7dc983b150',
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
    },
  };

  fetch(base_url + 'list', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return response; // USE THIS RESPONSE TO POPULATE THE DROP DOWN LIST OF CURRENCY OPTIONS
}

// display results after conversion
function displayResults(value, toCur) {
  const finalValue = document.getElementById('to-amount');
  finalValue.value = Number(value['rates'][toCur]['rate_for_amount']).toFixed(
    2
  );
  finalValue.style.display = 'block';
}

// when user click on reset button
function clearVal() {
  window.location.reload();
  document.getElementsByClassName('finalValue').innerHTML = '';
}

// document.querySelector('.home-content').innerHTML = CurrencyForm();
