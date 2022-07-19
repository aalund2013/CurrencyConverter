import axios from "axios";

const getCurrency = async () => {
    let response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
    let currencies = response.data.rates;

    for (const key in currencies) {
        // console.log(`${key} ${currencies[key]}`);
        document.querySelector("#from-currency").innerHTML += `<option value="${currencies[key]}">${key}</option>`;
        document.querySelector("#to-currency").innerHTML += `<option value="${currencies[key]}">${key}</option>`;

    }

}
getCurrency();




const CurrencyForm = () => {
    return (
`
<div class="currency-form-wrapper">
    <form class="currency-form">
        <h4>From: </h4>
        <select name="from-currency" id="from-currency">

        </select>

        <h4>Amount: </h4>
        <input type="number" name="from-amount" id="from-amount" min="0" step="0.01" value="0">

        <h4>To: </h4>
        <select name="to-currency" id="to-currency">

        </select>

        <h4 class="result-header">Result: </h4>
        <input type="number" name="to-amount" id="to-amount" min="0" step="0.01" value="0" readonly>
    </form>
    <button class="convert-button">Convert</button>

</div>
`
);}

const btnConvertion = () => {
    let fromCurrency = document.querySelector("#from-currency").value;
    let incomingAmount = document.querySelector("#from-amount").value;
    let toCurrency = document.querySelector("#to-currency").value;
    console.log(fromCurrency, incomingAmount, toCurrency);
    let result = incomingAmount * toCurrency;
    document.querySelector("#to-amount").value = result;    
}

document.querySelector('.home-content').innerHTML = CurrencyForm();
document.querySelector(".convert-button").addEventListener("click", btnConvertion);

