const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.addEventListener('click', function() {
    counter--;
    carousel();
})


nextBtn.addEventListener('click', function() {
    counter++;
    carousel();
    console.log (nextBtn.classList);
})

function carousel() {
    if (counter === slides.length) {
        counter = 0;
    }
    else if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100 }%)`;
        slide.style.transition = 'all 2s';
        // console.log (slide);
    });
}