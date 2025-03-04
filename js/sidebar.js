const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

/* 
toggleBtn.onclick è un evento di click, ed è solo un altro modo per scrivere la classica funzione dove:
 <div onclick="myFunction()"> e all'interno del file js hai function myFunction() {}
*/

toggleBtn.onclick = function() {
    console.log (sidebar.classList);
    if (sidebar.classList.toggle('active')) {
        sidebar.classList.add('show-sidebar')
        document.querySelector('.sidebar').style.width = '30%';
        document.querySelector('.sidebar').style.transition = 'all 2s';

    }
    else {
        sidebar.classList.remove('show-sidebar');
        document.querySelector('.sidebar').style.width = '0';
        document.querySelector('.sidebar').style.transition = 'all 2s';
    }
};

closeBtn.onclick = function() {
    if (sidebar.classList.toggle('active')) {
        sidebar.classList.add('show-sidebar')
        document.querySelector('.sidebar').style.width = '0';
        document.querySelector('.sidebar').style.transition = 'all 2s';
    }
}