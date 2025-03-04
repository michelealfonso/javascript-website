// sezione navbar 

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');
const navbarUl = document.querySelector('.nav-bar-ul');
const background = document.querySelector('.background');

hamburger.onclick = function () {
    navBar.classList.toggle('active');
}

// sezione fixed-bar 

window.addEventListener('scroll', function() {
    const navHeader = document.querySelector('.nav-header');
    navHeader.classList.toggle('sticky', window.scrollY > 50)
})

const myButton = document.getElementById("myBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";

    } else {
        myButton.style.display = "none";
    } 
};

myButton.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// sezione scroll 

const home = document.getElementById('home');
const about = document.getElementById('about');
const services = document.getElementById('services');
const tour = document.getElementById('tour');

var scrollToAnchor = function(e) {
	e.preventDefault();
	var id = this.attributes.href.value;
	var scrollTo = false;
	if(id.length > 1){
		var scrollTo = document.querySelector(id);
	}	
	if(scrollTo){
		var current_position = document.documentElement.scrollTop;
		animate(document.scrollingElement,"scrollTop", "", current_position, scrollTo.offsetTop, 250, true);
	}	
}	

window.onload = function () {
	var anchorLinks = document.querySelectorAll('a[href^="#"]');

	for (var i = 0; i < anchorLinks.length; i++) {
		anchorLinks[i].addEventListener('click', scrollToAnchor);
	} 
};

