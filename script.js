// restart game button
let restartButton = document.querySelector('.restart-btn');

// grabs all the squares
var squares = document.querySelectorAll('td');

// clear all the squares
function clearSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
    }
}
restartButton.addEventListener('click', clearSquares);

// check the square marker
function changeMarker() {
    if(this.textContent === '') {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}

// add marker to the square
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}