const renderHeader = () => {
    return (
`
<div class="header">
    <div class="header-logo">
        <img src="../../images/byu-i-logo.png" alt="logo">
    </div>
    <h1>Currency Converter</h1>
</div>
`
);}


document.querySelector('.home-header').innerHTML = renderHeader();