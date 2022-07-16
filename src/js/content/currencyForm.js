
// include api for currency change
base_url = 'https://currency-converter5.p.rapidapi.com/currency/'

// when user clicks, it calls function getResults
convert.addEventListener("click", getResults('USD',300,'CAD')); // UPDATE TO TAKE THE FORM INPUT

// function getCurrencies
function getCurrencies() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '77b84280a7msh7f71046025a9fcap133d5djsnff7dc983b150',
			'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
		}
	};

	fetch(base_url + 'list', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
	return response; // USE THIS RESPONSE TO POPULATE THE DROP DOWN LIST OF CURRENCY OPTIONS
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
	fetchUrl = base_url + 'convert?format=json&from=' + from + '&to=' + to + '&amount=' + amount

	fetch(fetchUrl, options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

	return response // DISPLAY AS RESULT
}

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