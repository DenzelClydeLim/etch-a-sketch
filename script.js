const container = document.querySelector("#container");
const body = document.querySelector("body");
const gridBtn = document.querySelector("#gridBtn");


gridBtn.addEventListener("click", createGrid);

function deleteGrid() {
    container.textContent = "";
}
function getGridSize() {
    let num;
    do {
        num = +prompt("Number of Square Dimension? ", "16");
    } while (!Number.isInteger(num) || num < 0 || num > 100);
    return num;
}

function createGrid() {
    deleteGrid();
    const inputNum = getGridSize();
    const gridSize = 600 / inputNum;

    for (i = 0; i < inputNum; i++) {
        const divFlex = document.createElement("div");
        divFlex.style.display = "flex";
        divFlex.id = i;
        for (j = 0; j < inputNum; j++) {
            const divBox = document.createElement("div");
            divBox.style.width = `${gridSize}px`;
            divBox.style.height = `${gridSize}px`;
            divBox.classList.toggle("inDiv");
            divFlex.appendChild(divBox);
        }
        container.appendChild(divFlex);
    }
}