
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    let currentIndex = 0; // il primo div della nosta griglia 
    let appleIndex = 0;
    let currentSnake = [2,1,0];
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;

    function startGame() {
        console.log ('ho cliccato');
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple');
        clearInterval(interval);
        score = 0;
        randomApple();
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        currentSnake = [2,1,0];
        currentIndex = 0;
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    function moveOutcomes() {
        if(
            (currentSnake[0] + width >= (width * width) && direction === width ) || 
            (currentSnake[0] % width === width -1 && direction === 1) || 
            (currentSnake[0] % width === 0 && direction === -1) || 
            (currentSnake[0] - width < 0 && direction === -width) || 
            squares[currentSnake[0] + direction].classList.contains('snake')
        ) {
            return clearInterval(interval);
        }

        const tail = currentSnake.pop();
        squares[tail].classList.remove('snake');
        currentSnake.unshift(currentSnake[0] + direction);

        if(squares[currentSnake[0]]. classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple');
            squares[tail].classList.add('snake');
            currentSnake.push(tail);
            randomApple();
            score++;
            scoreDisplay.textContent = score;
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(moveOutcomes, intervalTime);
        }

        squares[currentSnake[0]].classList.add('snake');
    }

    function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        }
        while (squares[appleIndex]. classList.contains('snake'))
        squares[appleIndex].classList.add('apple');
    }

    function control(e) {
        squares[currentIndex].classList.remove('snake');
        if(e.keyCode === 39) {
            direction = 1; //se premiamo la freccia destra sulla nostra tastiera, il serpente andrà a destra
          } else if (e.keyCode === 38) {
            direction = -width; //se premiamo la freccia su, il serpente tornerà indietro di dieci div, sembrando salire
          } else if (e.keyCode === 37) {
            direction = -1; //se premiamo a sinistra, il serpente andrà a sinistra di un div
          } else if (e.keyCode === 40) {
            direction = +width; //se premiamo verso il basso, la testa del serpente apparirà istantaneamente nel div dieci div da dove ti trovi ora
          }
    }

    document.addEventListener('keyup', control);
    startBtn.addEventListener('click', startGame);
})