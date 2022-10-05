const container= document.getElementById("container"); // container is the parent ID

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function highlight(e){
    if (e.type ==='mouseover' && !mouseDown) return
        // e.target.style.backgroundColor = "black"; 
        const randomR = Math.floor(Math.random()*256);
        const randomG = Math.floor(Math.random()*256);
        const randomB = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG},${randomB})`;
};

function makeRows(rows, cols){
    document.getElementById("container").innerHTML=""; // clears container
    container.style.gridTemplateColumns = `repeat(${rows},1fr)`; // For each row, set to row width based on .grid class width 
    container.style.gridTemplateColumns = `repeat(${cols},1fr)`; // Repeat for col

    for (c=0; c<(rows*cols); c++ ){
        let cell = document.createElement("div"); //creates new div for each cell 
        cell.addEventListener('mouseover', highlight) //Trigger highlight function upon mouseover
        cell.addEventListener('mousedown', highlight)
        container.appendChild(cell).className = "grid-item"; //creates element of childclass
    };
};

const buttons = document.querySelectorAll('button');
let rows = 16; //default row
let cols = 16; //default col

buttons.forEach( (button) => { //Button formatting
    button.addEventListener('click', () => {
        rows = prompt("Enter Rows: "), 
        cols = prompt("Enter Cols: "), 
        makeRows(rows, cols)
     });
}); 

makeRows(rows, cols); 
