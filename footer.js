const getTheme = () => {
    return localStorage.getItem('them');
}

const currentTheme = getTheme();


const footer = () => {
    return (
`
<div class="footer-${currentTheme}">
    <b>&copy BYU-Idaho Currency Converter Group 3 | ${new Date().getFullYear()}</b>
</div>
`
);}

document.querySelector('.home-footer').innerHTML = footer();