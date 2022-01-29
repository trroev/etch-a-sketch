const container = document.getElementById('container');
const slider = document.getElementById('slider');
const chooseColor = document.getElementById('choose-color');
const clearBtn = document.getElementById('clear');
const sliderValue = document.getElementById('slider-value');

slider.addEventListener('mouseup', gridSize);
chooseColor.addEventListener('input', draw);

function grid(area) {
    for (i = 0; i < (area * area); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${area}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${area}, 1fr)`;
        container.appendChild(div).classList.add('grid-item')
    }
    let gridItems = container.querySelectorAll('div');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', draw));
};

grid(16);

function gridSize() {
    let gridItems = container.querySelectorAll('div');
    gridItems.forEach(gridItem => gridItem.remove());
    grid(slider.value);
}

slider.oninput = function() {
    sliderValue.innerHTML = `${this.value} x ${this.value}`;
}

function clear() {
    const divs = container.querySelectorAll('div');
    clearBtn.addEventListener('click', () => {
        divs.forEach(div => div.style.backgroundColor = '#fff8dc')
    })
}
clear();


function draw(e) {
    const divs = container.querySelectorAll('div');
    document.getElementById('settings').addEventListener('click', event => {
        if (event.target.id === 'color') {
            divs.forEach(div => div.addEventListener('mouseover', () =>
            div.style.backgroundColor = chooseColor.value))
        } else if (event.target.id === 'rainbow') {
            divs.forEach(div => div.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                div.style.backgroundColor = `rgb(${r},${g},${b})`
            }))
        } else if (event.target.id === 'erase') {
            divs.forEach(div => div.addEventListener('mouseover', () =>
            div.style.backgroundColor = '#fff8dc'))
        }
    })
}
