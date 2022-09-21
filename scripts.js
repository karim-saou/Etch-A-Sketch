// build grid
const body = document.querySelector("body");
const container = document.querySelector(".grid-container");
const GridSizeBtn = document.querySelector("#size-control");
var grid = getGridBuilt(16,16); //build grid by default parameters 16x16

// change grid sizes from user
GridSizeBtn.addEventListener("click", () => {
    let gridSizes = getGridSizes();
    grid = getGridBuilt(gridSizes[0], gridSizes[1]);
});

// code for Etch with color red
grid.addEventListener("mousedown", gridDraw);

// function to build grid
function getGridBuilt(rowNumber, columnNumber) {
    // remove the existing grid to prevent add new sizes to previous sizes
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    // built grid with new sizes
    for (let i = 0; i < rowNumber; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < columnNumber; j++) {
            var column = document.createElement("div");
            column.className = "column";
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    return container;
}


// function to draw inside grid
function gridDraw(e) {
    if (e.buttons == 1) {
        container.addEventListener("mouseover", (event) => {
            if (event.buttons == 1 && event.target.className === "column") {
                event.target.style.backgroundColor = "red";
            }
        });
    }
}

function getGridSizes() {
    let rowSize = +prompt("Enter size of row between 1 and 100", 16);
    let columnSize = +prompt("Enter size of column between 1 and 100", 16);
    if (rowSize === null || rowSize === "" || columnSize === null ||
        columnSize === "" || isNaN(rowSize)  ===true || isNaN(columnSize) ===true) {
        alert("rows and columns must be between 1 and 100. size set by default at 16x16");
        rowSize = 16;
        columnSize = 16;
    }
    else if (rowSize > 100 || columnSize > 100 || rowSize <= 0 || columnSize <= 0) {
        alert("rows and columns must be between 1 and 100. size set by default at 16x16");
        rowSize = 16;
        columnSize = 16;
    }
    return [rowSize, columnSize];
   
}


