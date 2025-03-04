const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// ricorda che i metodi add e remove non prendono il punto per specificare la classe 

modalBtn.onclick = function() {
    console.log (modalOverlay.classList)
    if (modalBtn.classList.toggle('active')) {
        modalOverlay.classList.add('open-modal');
    }
}


closeBtn.onclick = function() {
    console.log (modalOverlay.classList)
    if (closeBtn.classList.toggle('active')) {
        modalOverlay.classList.remove('open-modal');
    }
}


