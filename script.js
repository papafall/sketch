//Getting the buttons DOM
const squareBtn = document.querySelector("#squareBtn");
const drawBtn = document.querySelector("#draw");
const eraseBtn = document.querySelector("#erase");
const clearBtn = document.querySelector("#clear");
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

function erase(e) {
  if (isMouseDown) {
    if (!e.target.classList.contains("erase")) {
      e.target.classList.toggle("erase");
    }
  }
}

//Function to prompt the user to enter a number and only return if it's a number between 1 and 100
function getUserNum() {
  numOfSquares = parseInt(
    prompt("Select grid size - Enter a number between 1 and 100")
  );
  if (numOfSquares === null) {
    // User canceled the prompt
    alert("Canceled. Please enter a number.");
  } else if (isNaN(numOfSquares) || numOfSquares > 100 || numOfSquares < 1) {
    alert("Please enter a valid number between 1 and 100");
    getUserNum(); // Prompt again in case of invalid input
  }
}

//Function to create the grid once the user enters a number
function sketchPad() {
  //Setting the grid to empty as a default
  gridContainer.textContent = "";
  getUserNum();
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

      function drawAction() {
        gridItem.addEventListener("mouseover", draw);
        gridItem.addEventListener("mousedown", draw);
        gridContainer.addEventListener("mousemove", draw);
      }

      function eraseAction() {
        gridItem.addEventListener("mouseover", erase);
        gridItem.addEventListener("mousedown", erase);
        gridContainer.addEventListener("mousemove", erase);
      }

      drawAction();

      clearBtn.addEventListener("click", function () {
        gridItem.style.backgroundColor = ""; // Clear the background color
        gridItem.classList.remove("black", "erase"); // Remove both "black" and "erase" classes
        removeDrawingEvents();
      });

      eraseBtn.addEventListener("click", function () {
        gridItem.classList.toggle("erase");
        removeDrawingEvents();
      });

      function removeDrawingEvents() {
        gridItem.removeEventListener("mouseover", draw);
        gridItem.removeEventListener("mousedown", draw);
        gridContainer.removeEventListener("mousemove", draw);
      }
    }
  }
}

squareBtn.addEventListener("click", sketchPad);
