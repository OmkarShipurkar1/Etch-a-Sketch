const container = document.querySelector(".container");
const btn = document.querySelector(".make");
const inputSize = document.querySelector(".size");
let size = 5;

//NOTE - Added the color functionality
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let color = "black";
let isClicked = false;

//NOTE - made the grid flexible to user input
function makeGrid() {
  if (container.hasChildNodes()) {
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
  }

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < size; j++) {
      let box = document.createElement("div");
      box.style.width = `${630 / size}px`;
      box.style.height = `${630 / size}px`;
      box.classList.add("newBox");

      box.addEventListener("mouseover", () => {
        if (isClicked) {
          color = document.querySelector("#color").value;
        } else {
          color = getRandomColor();
        }
        box.style.backgroundColor = color;
      });

      row.append(box);
    }
    container.append(row);
  }
}

makeGrid();

// User size
btn.addEventListener("click", function () {
  size = inputSize.value;
  makeGrid();
});

document.querySelector(".clear").addEventListener("click", () => {
  makeGrid();
});

document.querySelector(".select").addEventListener("click", () => {
  isClicked = true;
});

document.querySelector(".random").addEventListener("click", () => {
  isClicked = false;
});
