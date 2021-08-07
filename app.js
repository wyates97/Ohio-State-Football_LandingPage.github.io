// Thumbnail image selector
function imgSlider(anything) {
    document.querySelector('.osuHelmet').src = anything;
}

// Image background color changer
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

// Toggle menu
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}