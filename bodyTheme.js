const bodyThem = () => {
    return localStorage.getItem('them');
}

const currentThem = getTheme();


//add class to the body tag
const renderBody = () => {
    document.querySelector('body').classList.add(`${currentTheme}`); 
}

renderBody();