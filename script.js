const container = document.querySelector(".grid-container");

const grid = (area) => {
  let gridArea = area * area;
  for (i = 0; i <= gridArea; i++) {
    const divs = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${area}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${area}, 1fr)`;
    container.appendChild(divs).classList.add("grid-item");
  }

  handleUI();
};
grid(16);

const changeGridSize = (() => {
  const gridSizeSlider = document.querySelector("#slider");
  const sliderValue = document.querySelector("#slider-value");

  gridSizeSlider.addEventListener("mouseup", () => {
    const divs = container.querySelectorAll("div");
    container.innerHTML = "";
    divs.forEach((div) => div.remove());
    grid(slider.value);
  });

  gridSizeSlider.oninput = function () {
    sliderValue.innerHTML = `${this.value} x ${this.value}`;
  };

  handleUI();
})();

function handleUI () {
  const colorSelector = document.querySelector("#choose-color");
  const colorButton = document.querySelector(".color-button");
  const rainbowButton = document.querySelector(".rainbow-button");
  const eraseButton = document.querySelector(".erase-button");
  const clearButton = document.querySelector(".clear-button");
  const divs = container.querySelectorAll("div");

  colorButton.addEventListener("click", () => {
    divs.forEach((div) =>
      div.addEventListener(
        "mouseover",
        () => (div.style.backgroundColor = colorSelector.value)
      )
    );
  });

  rainbowButton.addEventListener("click", () => {
    divs.forEach((div) =>
      div.addEventListener("mouseover", () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        div.style.backgroundColor = `rgb(${r},${g},${b})`;
      })
    );
  });

  eraseButton.addEventListener("click", () => {
    divs.forEach((div) =>
      div.addEventListener(
        "mouseover",
        () => (div.style.backgroundColor = "#fff8dc")
      )
    );
  });

  clearButton.addEventListener("click", () => {
    const divs = container.querySelectorAll("div");
    divs.forEach((div) => (div.style.backgroundColor = "#fff8dc"));
  });
};