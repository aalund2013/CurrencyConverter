const CurrencyForm = () => {
    return (
`
<div class="currency-form-wrapper">
    <form class="currency-form">
        <h4>From: </h4>
        <select name="from-currency" id="from-currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CNY">CNY</option>
            <option value="INR">INR</option>
            <option value="MXN">MXN</option>
        </select>

        <h4>Amount: </h4>
        <input type="number" name="from-amount" id="from-amount" min="0" step="0.01" value="0">

        <h4>To: </h4>
        <select name="to-currency" id="to-currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CNY">CNY</option>
            <option value="INR">INR</option>
            <option value="MXN">MXN</option>
        </select>

        <h4 class="result-header">Result: </h4>
        <input type="number" name="to-amount" id="to-amount" min="0" step="0.01" value="0" readonly>
    </form>
    <button class="convert-button">Convert</button>

</div>
`
);}

document.querySelector('.home-content').innerHTML = CurrencyForm();