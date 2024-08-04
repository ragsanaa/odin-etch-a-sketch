var container = document.querySelector(".container");
const button = document.querySelector("button");
var gridNumber = 16;
createGrid(gridNumber);
button.addEventListener("click", () => {
  count = prompt("Enter the number of grids you want");
  if (count === null) {
    count = 16;
  } else if (count < 1 || count > 100) {
    alert("Enter a number between 1 and 100");
    count = 16;
  } else {
    gridNumber = parseInt(count);
    createGrid(gridNumber);
  }
});

function createGrid(gridNumber) {
  container.innerHTML = "";

  for (i = 0; i < gridNumber; i++) {
    console.log("hello");
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for (j = 0; j < gridNumber; j++) {
      const div = document.createElement("div");
      div.classList.add("box");
      div.style.backgroundColor = "white";
      div.style.border = "1px solid black";
      div.style.width = "30px";
      div.style.height = "30px";
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
      });

      grid.appendChild(div);
    }
    container.appendChild(grid);
  }
}
