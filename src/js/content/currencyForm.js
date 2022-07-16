
// include api for currency change
const base_api_url = "https://api.exchangerate-api.com/v6";// when user clicks, it calls function getResults

convert.addEventListener("click", getResults);

// function getCurrencies
function getCurrencies() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '77b84280a7msh7f71046025a9fcap133d5djsnff7dc983b150',
			'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
		}
	};

	fetch('https://currency-converter5.p.rapidapi.com/currency/list', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
	return response;
}

// function getResults
function getResults(from, to, amount) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '77b84280a7msh7f71046025a9fcap133d5djsnff7dc983b150',
			'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
		}
	};
	fetchUrl = 'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from='+from+'&to='+to+'&amount='+amount
	
	fetch(fetchUrl, options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
}

// function getResults() {
// 	fetch(`${api}`)
// 		.then(currency => {
// 			return currency.json();
// 		}).then(displayResults);
// }

// display results after conversion
function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	finalValue.innerHTML =
	((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.style.display = "block";
}

// when user click on reset button
function clearVal() {
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";
};


document.querySelector('.home-content').innerHTML = CurrencyForm();