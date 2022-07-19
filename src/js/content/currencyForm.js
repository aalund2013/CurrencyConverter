// include api for currency change
base_url = 'https://currency-converter5.p.rapidapi.com/currency/';

const fromEl = document.querySelector('#from-currency');
const toEl = document.querySelector('#to-currency');
const amountEl = document.querySelector('#from-amount');

// when user clicks, it calls function getResults
document.addEventListener('submit', function (e) {
  e.preventDefault();
  const from = fromEl.value;
  const to = toEl.value;
  const amount = amountEl.value;
  debugger;
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
});

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
    .then((response) => getCurrencyList(response))
    .catch((err) => console.error(err));
  // return response;
}

const getCurrencyList = async (currencies) => {
  for (const key in currencies['currencies']) {
    // console.log(`${key} ${currencies[key]}`);
    document.querySelector(
      '#from-currency'
    ).innerHTML += `<option value="${currencies[key]}">${key}</option>`;
    document.querySelector(
      '#to-currency'
    ).innerHTML += `<option value="${currencies[key]}">${key}</option>`;
  }
};
getCurrencies();
