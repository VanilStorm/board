const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;

const colors = ['#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#00FF00', '#00FF80', '#00FFFF', '#0080FF', '#0000FF', '#8000FF', '#FF00FF', '#FF0080']

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor(elem) {
    elem.style.backgroundColor = `${colorPicker()}`;
    elem.style.boxShadow = `0 0 2px ${colorPicker()}, 0 0 10px ${colorPicker()}`;
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d';
    elem.style.boxShadow = `0 0 2px #000`;

}

function colorPicker() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}