const container = document.querySelector("#container");
const gridBtn = document.querySelector("#gridBtn");
let num = 0;
gridBtn.addEventListener("click", createGrid);
let opacity = 0;
container.addEventListener("mouseover", (e) => {
    const tempGrid = e.target;
    {
        if (tempGrid.classList.contains("inDiv"))
            tempGrid.style.backgroundColor = `rgb(${getColorNum()}, ${getColorNum()}, ${getColorNum()})`;
        if (opacity <= 1) {
            tempGrid.style.opacity = opacity;
            opacity += 0.1
        }
    }
});

container.addEventListener("mouseout", (e) => {
    const tempGrid = e.target;
    if (tempGrid.classList.contains("inDiv")) {
        tempGrid.style.backgroundColor = "transparent";
    }
});

function deleteGrid() {
    num = 0;
    container.textContent = "";
}
function getGridSize() {
    let num;
    do {
        num = +prompt("Number of Square Dimension? ", "16");
    } while (!Number.isInteger(num) || num < 0 || num > 100);
    return num;
}

function getColorNum() {
    return Math.floor(Math.random() * 256);
}

function createGrid() {
    deleteGrid();
    const inputNum = getGridSize();
    const gridSize = 600 / inputNum;
    for (let i = 0; i < inputNum; i++) {
        const divFlex = document.createElement("div");
        divFlex.style.display = "flex";
        divFlex.id = `flexBox${i}`;
        for (let j = 0; j < inputNum; j++) {
            const divBox = document.createElement("div");
            divBox.style.width = `${gridSize}px`;
            divBox.style.height = `${gridSize}px`;
            divBox.id = `divBox${num++}`;
            divBox.classList.add("inDiv");
            divFlex.appendChild(divBox);
        }
        container.appendChild(divFlex);
    }
}