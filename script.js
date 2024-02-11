//Getting the square request button
const squareBtn = document.querySelector("#squareBtn");

//Setting the grid default to 16x16
let numOfSquares = 16;

//Getting the main grid container
const gridContainer = document.getElementById("container");

//Defining when the mouse is clicked an held down
let isMouseDown = false;
gridContainer.addEventListener("mousedown", function () {
  isMouseDown = true;
});
gridContainer.addEventListener("mouseup", function () {
  isMouseDown = false;
});

//Drawing effect when mouse is clicked and held down
//the .black class has a background color of black
//This toggles the .black class off and on depending whether whether mouse is clicked and held down
function draw(e) {
  if (isMouseDown) {
    if (!e.target.classList.contains("black")) {
      e.target.classList.toggle("black");
    }
  }
}

//Function to create the grid once the user enters a number
function sketchPad() {
  //Setting the grid to empty as a default
  gridContainer.textContent = "";

  //Prompting the user to enter a number of squares
  numOfSquares = parseInt(
    prompt("Select grid size - Enter a number between 1 and 100")
  );

  // Create grid size using the number from prompt above
  for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("square");

      //Setting the grid div size by deviding the total size of container by the number of squares
      const height = 400 / numOfSquares;
      const width = 400 / numOfSquares;

      gridItem.style.cssText = `height: ${height}px; width: ${width}px;`;

      gridContainer.appendChild(gridItem);

      //Calling the drawing effecrt when mouse is clicked, held down, and dragged.
      gridItem.addEventListener("mouseover", draw);
      gridItem.addEventListener("mousedown", draw);
    }
  }
}

squareBtn.addEventListener("click", sketchPad);
