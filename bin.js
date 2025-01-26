const bigDiv = document.querySelector("#daddy-container");
let div = [];

for (let i=0; i<16; i++) {
    div[i] = document.createElement("div");
    div[i].setAttribute("id", `row${i}`);
    div[i].style.cssText = "flex: 1; display: flex;";
    bigDiv.appendChild(div[i]);
    
    for (let j=0; j<16; j++) {
        const subDiv = document.createElement("div");
        subDiv.setAttribute("class", "column");
        div[i].appendChild(subDiv);
    }
        

}

