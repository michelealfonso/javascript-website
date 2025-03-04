const faqs = document.querySelectorAll('.faq');
const btn = document.getElementsByTagName('button');

faqs.forEach(faq => {
    faq.addEventListener('click', function () {
        faq.classList.toggle('active');
        console.log(faq.classList);
    })
});

/*
 function myFunction() {
    for (let i = 0; i < faqs.length; i++) {
        if (faqs[i].classList.toggle('active')) {
            faqs[i].classList.add('faq');
        }
    }
}

myFunction();
*/
