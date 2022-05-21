if(localStorage.length > 0) {
    document.body.style.background = localStorage.Color
}

function setColor(color) {
    document.body.style.background = color;
    localStorage.Color = color
}