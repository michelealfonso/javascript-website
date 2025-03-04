const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

hamburger.onclick = function() {
    if (navBar.classList.toggle('active')) {
        document.querySelector(".nav-bar").style.height = "450px";
        document.querySelector(".nav-bar-ul").style.opacity = 1;
    }
    else if (navBar.classList.toggle('!active')) {
        document.querySelector(".nav-bar").style.height = "0px";
        document.querySelector(".nav-bar-ul").style.opacity = 1;
    }
}