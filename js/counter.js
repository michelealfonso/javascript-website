let count =  0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
var counter = document.querySelector('#counter');

// console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
            document.querySelector('#value').style.color = 'red';
            document.querySelector('#counter').style.color = 'red';
        }
        else if (styles.contains('increase')) {
            count++;
            document.querySelector('#value').style.color = 'green';
            document.querySelector('#counter').style.color = 'green';
        }
        else if (styles.contains('reset')) {
            count = 0;
            document.querySelector('#value').style.color = 'black';
            document.querySelector('#counter').style.color = 'black';
        }
        value.textContent = count;
    });
});