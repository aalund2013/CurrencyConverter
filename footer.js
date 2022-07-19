const footer = () => {
    return (
`
<div class="footer">
    <b>&copy BYU-Idaho Currency Converter Group 3 | ${new Date().getFullYear()}</b>
</div>
`
);}

document.querySelector('.home-footer').innerHTML = footer();