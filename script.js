var grid = document.querySelector(".grid");
var pencil = document.querySelector("#pen-color");
var gridNumber = document.querySelector("#grid-number");
var drawingEnabled = true;

var defaultFormat = document.querySelector("#default");
var darkenFormat = document.querySelector("#darken");
var randomizeFormat = document.querySelector("#randomize");

function createGrid() {
  grid.innerHTML = "";
  let size = gridNumber.value;
  let boxSize = grid.clientWidth / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = "#fff";
    div.dataset.colorValue = 0;
    div.addEventListener("mouseover", () => {
      if (drawingEnabled) {
        if (darkenFormat.checked) {
          darkenBox(div);
        } else if (randomizeFormat.checked) {
          randomizeColor(div);
        } else if (defaultFormat.checked) {
          div.style.backgroundColor = pencil.value;
        }
      }
    });
    grid.appendChild(div);
  }
}

function clearGrid() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "#fff";
    box.dataset.colorValue = 0;
  });
}

function randomizeColor(box) {
  // Generate a random RGB color
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  box.style.backgroundColor = randomColor;
}

function darkenBox(box) {
  let currentColorValue = parseFloat(box.dataset.colorValue);
  if (currentColorValue < 1) {
    currentColorValue += 0.1;
    box.dataset.colorValue = currentColorValue;
    let darkenedColor = `rgba(0, 0, 0, ${currentColorValue})`;
    box.style.backgroundColor = darkenedColor;
  }
}

// Toggle drawing state when spacebar is pressed
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    drawingEnabled = !drawingEnabled;
  }
});

// Initialize the grid
createGrid();
