const gridContainer = document.querySelector("div.container");
const heightInput = document.querySelector("input#height");
const widthInput = document.querySelector("input#width");
const startButton = document.querySelector("button#startgrid");

const etchaSketch = () => {
    const createGrid = () => {      
        console.log("height", heightInput.value);
        console.log("width", widthInput.value);

        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        // apply height and width constraints with flexbox
        for (y = 0; y < parseInt(heightInput.value); y++) {
            const gridRow = document.createElement("div");
            gridRow.className = "row";
            gridContainer.appendChild(gridRow);
            for (x = 0; x < parseInt(widthInput.value); x++) {
                console.log("creating square coords x: ", x, " y: ", y);
                const gridSquare = document.createElement("div");
                gridSquare.className = "square";
                gridRow.appendChild(gridSquare);
            }
        }
        const gridSquares = document.querySelectorAll(".square");
        gridSquares.forEach(square => {
            square.addEventListener("mouseenter", draw);
        })
    }

    const draw = (e) => {
        console.log(e.target, "effect triggered");
        // update alpha +.1 every time the event is triggered up to 1.0
        e.target.style.backgroundColor = "rgba(255, 0, 0, ${alpha})";
        const alpha = 0.0;
    }

    startButton.addEventListener("click", createGrid);
}

etchaSketch();