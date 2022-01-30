const container = document.getElementById('container');
const slider = document.getElementById('slider');
const chooseColor = document.getElementById('choose-color');
const sliderValue = document.getElementById('slider-value');
const clear = document.getElementById('clear');

slider.addEventListener('mouseup', gridSize);
chooseColor.addEventListener('input', draw);
clear.addEventListener('click', clearGrid);

function grid(area) {
    for (i = 0; i < (area * area); i++) {
        const divs = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${area}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${area}, 1fr)`;
        container.appendChild(divs).classList.add('grid-item');
        divs.addEventListener('mouseover', draw);
    }
};
grid(16);

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
        } else {
            divs.forEach(div => div.addEventListener('mouseover', () =>
            div.style.backgroundColor = '#000000'))
        }
    })
}
draw();

function gridSize() {
    container.innerHTML = '';
    let gridItems = container.querySelectorAll('div');
    gridItems.forEach(gridItem => gridItem.remove());
    grid(slider.value);
}

slider.oninput = function() {
    sliderValue.innerHTML = `${this.value} x ${this.value}`;
}

function clearGrid() {
    const divs = container.querySelectorAll('div');
    divs.forEach(div => div.style.backgroundColor = '#fff8dc');
}