const squareBtn = document.querySelector("#squareBtn");
let numOfSquares = 16;

const gridContainer = document.getElementById("container");

let isMouseDown = false;
gridContainer.addEventListener("mousedown", function () {
  isMouseDown = true;
});
gridContainer.addEventListener("mouseup", function () {
  isMouseDown = false;
});

function draw(e) {
  if (isMouseDown) {
    e.style.backgroundColor = "black";
  }
}

function sketchPad() {
  gridContainer.textContent = "";

  numOfSquares = parseInt(prompt("How Many squares?"));

  // Create 16x16 grid
  for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("square");

      const height = 400 / numOfSquares;
      const width = 400 / numOfSquares;

      gridItem.style.cssText = `height: ${height}px; width: ${width}px;`;

      gridContainer.appendChild(gridItem);

      gridItem.addEventListener("mouseover", draw);
      gridItem.addEventListener("mousedown", draw);
    }
  }
}

squareBtn.addEventListener("click", sketchPad);
