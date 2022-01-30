const container = document.querySelector(".container");
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const buttonsContainer = document.querySelectorAll('buttons')

function makeGrid(row, cols) {
    for (let grid = 0; grid < (row * cols); grid++){
        const div = document.createElement("div");
        div.style.border = '1px solid red';
        container.style.gridTemplateRows = `repeat(${row}, ifr)`;
        container.style.gridTemplateColumns = `repeat(${cols}, ifr)`;
        container.appendChild(div).classList.add('box')
    }
    
}

makeGrid(16, 16);

function grayColor() {
    const boxes = container.querySelectorAll('.box');
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click', () => {
        let Rnum = Math.floor(Math.random() * 255)
    })
}