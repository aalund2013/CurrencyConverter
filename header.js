// import logoTheme from './theme.png';

const createThemLocalstorage = () => {
    if (!localStorage.getItem('them')) {
        localStorage.setItem('them', 'light');
    }
}

const getTheme = () => {
    return localStorage.getItem('them');
}

const currentTheme = getTheme();

const setTheme = () => {
    const them = localStorage.getItem('them');
    if (them === 'light') {
        localStorage.setItem('them', 'dark');
        window.location.reload();
    }else {
        localStorage.setItem('them', 'light');
        window.location.reload();
    }
}

const renderHeader = () => {
    return (
`
<div class="header-${currentTheme}">
    <div class="header-logo">
        <img src="byu-i-logo.png" alt="logo">
    </div>
    <h1>Currency Converter</h1>
    <div class="header-theme">
        <img class="btn-theme" src="./theme.png" alt="theme">
    </div>
</div>
`
);}

createThemLocalstorage();

document.querySelector('.home-header').innerHTML = renderHeader();
document.querySelector('.btn-theme').addEventListener('click', setTheme);