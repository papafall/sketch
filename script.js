const squareBtn = document.querySelector("#squareBtn");

function sketchPad() {
  const gridContainer = document.getElementById("container");
  gridContainer.textContent = "";

  const numOfSquares = parseInt(prompt("How Many squares?"));

  // Create 16x16 grid
  for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("square");

      const height = 400 / numOfSquares;
      const width = 400 / numOfSquares;

      gridItem.style.cssText = `height: ${height}px; width: ${width}px;`;

      gridContainer.appendChild(gridItem);
    }
  }
}

squareBtn.addEventListener("click", sketchPad);
