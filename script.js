const squareBtn = document.querySelector("#squareBtn");

squareBtn.addEventListener("click", function () {
  const gridContainer = document.getElementById("container");

  const numOfSquares = parseInt(prompt("How Many squares"));

  // Create 16x16 grid
  for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("square");
      gridContainer.appendChild(gridItem);
    }
  }
});
