let oldGrid = Array.from({length: 50}, () => Array(50).fill(false))
let newGrid = Array.from({length: 50}, () => Array(50).fill(false))

function animate() {
    drawGrid();
    calculateNewGrid();
    requestAnimationFrame(animate);
}

const drawGrid = () => {
    // Box width
    var bw = 400;
    // Box height
    var bh = 400;
    // Padding
    var p = 1;

    // Get the canvas and context
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    // clear the canvas
    context.clearRect(0, 0, bw, bh);

    for (var x = 0; x <= bw; x += 8) { // x cord
        for (var y = 0; y <= bh; y += 8) { // y cord
            context.strokeRect(x, y, 8, 8); // create outlined rec

            if (oldGrid[y / 8] && oldGrid[y /8][x/8]) {
                context.fillStyle = "black"; 
                context.fillRect(x, y, 8, 8);
            } else {
                context.fillStyle = "white";
                context.fillRect(x, y, 8, 8);
            }
        }
    }
}

const calculateNewGrid = () => {
    newGrid = Array.from({length: 50}, () => Array(50).fill(false))

    for (let i = 48; i >= 0; i--){ // loop all rows except last row (index 49)
        for (let j = 0; j < 50; j++){
            if (oldGrid[i][j]) { // current cell is active
                if (!oldGrid[i+1]?.[j]) { // check cell below is not active
                    newGrid[i+1][j] = true; // set cell below is active
                } else { // cell below is active
                    newGrid[i][j] = true; // set current cell acive
                }
            }
        }
    }

    // copy values from last grid / last row over to new row so this row isnt lost
    for (let j = 0; j < 50; j++) {
        if (oldGrid[49][j]) {
            newGrid[49][j] = true;
        }
    }

    oldGrid = newGrid;
}

const handleClick = (e) => {
    // grab cavnas comp
    const canvas = document.getElementById("canvas");

    // Get the bounding rectangle of the canvas
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate the grid position
    const gridX = Math.floor(x / 8);
    const gridY = Math.floor(y / 8);

    // update the matrix
    oldGrid[gridY] = oldGrid[gridY] || [];
    oldGrid[gridY][gridX] = true;
}

// on click handle
document.getElementById("canvas").onclick = (e) => {
    handleClick(e);
}

addEventListener("drag", (event) => { })

requestAnimationFrame(animate);