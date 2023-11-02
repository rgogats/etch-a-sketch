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
        const currentBackgroundColor = e.target.style.backgroundColor.match(/\d+/g);
        console.log("backgroundColor", currentBackgroundColor);
        let currentTransparency;
        let newTransparency;
        const randomR = Math.floor(Math.random() * 255).toString();
        const randomG = Math.floor(Math.random() * 255).toString();
        const randomB = Math.floor(Math.random() * 255).toString();
        const newColorValue = "rgba(" + randomR + ", " + randomG + ", " + randomB + ", 0.1)";

        console.log(currentBackgroundColor ? "backgroundColor Truthy" : "backgroundColor Falsy");

        currentBackgroundColor
        // if target has already been "drawn" on, take current rgba color and add 10% to transparency.  
        // stop transparency from going 1.0
        ? (
            currentTransparency = parseFloat(currentBackgroundColor[3] + "." + currentBackgroundColor[4]),
            console.log("currentTrans", currentTransparency),
            newTransparency = currentTransparency + 0.1,
            console.log("newTrans", newTransparency),
            console.log(newTransparency),
            e.target.style.backgroundColor = "rgba(" + currentBackgroundColor[0] + ", " + currentBackgroundColor[1] + ", " + currentBackgroundColor[2] + ", " + newTransparency 
        ) : (
            e.target.style.backgroundColor = newColorValue
        )
    }

    const inputLimiter = () => {
        return (heightInput.value >= 100 || widthInput.value >= 100) ? 
        (
            console.log("Please enter size values under 100"),
            heightInput.value = null, 
            widthInput.value = null
        )
        : null;
    }
    
    startButton.addEventListener("click", inputLimiter);
    startButton.addEventListener("click", createGrid);
}

etchaSketch();