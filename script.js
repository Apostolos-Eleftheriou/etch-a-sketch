const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const grid = document.getElementById('grid')



function setupGrid(size, size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

        for (let i = 0; i < size * size; i++) {
          const gridElement = document.createElement('div'); 
          gridElement.addEventListener('mouseover', rainbowMode)
          // gridElement.style.borderColor = 'red';
          gridElement.className = 'box';
          grid.appendChild(gridElement);
        }
}

setupGrid(4, 4);

function rainbowMode(e) {
    const randomR = Math.floor(Math.random() * 255); 
    const randomG = Math.floor(Math.random() * 255); 
    const randomB = Math.floor(Math.random() * 255); 
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
};
