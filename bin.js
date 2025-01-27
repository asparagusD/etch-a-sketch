const bigDiv = document.querySelector("#daddy-container");
let div = [];
let junk;
let numberOfSquares = 16;
let cngNumberOfSquares = document.createElement("button");
cngNumberOfSquares.textContent = "Change number of squares";

bigDiv.appendChild(cngNumberOfSquares);
cngNumberOfSquares.addEventListener("click", () => {
    junk = numberOfSquares;
    numberOfSquares = +prompt("How many squares do you need per side, boy?", "");
    while (numberOfSquares>100 || numberOfSquares<0) {
        numberOfSquares = +prompt("Enter a value from 1 to 100, boy!", "");
    }
    clearGrid(junk);
    grid(numberOfSquares);

    
});

function grid(squares) {
    for (let i=0; i<squares; i++) {
        div[i] = document.createElement("div");
        div[i].setAttribute("id", `row${i}`);
        div[i].style.cssText = "flex: 1; display: flex;";
        bigDiv.appendChild(div[i]);
        
        for (let j=0; j<squares; j++) {
            const subDiv = document.createElement("div");
            subDiv.setAttribute("class", "column");
            div[i].appendChild(subDiv);
    
            subDiv.addEventListener("mouseenter", () => {
                subDiv.style.cssText = "background-color: beige;";
            });
            subDiv.addEventListener("mouseleave", () => {
                subDiv.style.cssText = "background-color: cyan;";
            });
        }
    }
}

function clearGrid(removeElements) {
    for (let i=0; i<removeElements; i++) {
        bigDiv.removeChild(div[i]);
    }
}

grid(numberOfSquares);




