const transition = (grid, cellId) => {

    const gridLength = grid.length;
    const rcSize = Math.sqrt(gridLength);
    const rowIndex = cellId % rcSize;
    const isCellLive = grid[cellId];

    let neighbours = [];

    // Sanity checks...
    if (cellId >= gridLength) {
        throw new Error(`CellId must be less than ${gridLength - 1}`);
    }

    if (!Number.isInteger(rcSize)) {
        throw new Error('Grid must be square.');
    }

    // Get neighbours..
    if (cellId - rcSize >= 0) { // Directly Above...
        neighbours.push(grid[cellId - rcSize] === 1);
    }

    if (cellId + rcSize < gridLength) { // Directly Below...
        neighbours.push(grid[cellId + rcSize] === 1);
    }

    if (rowIndex - 1 >= 0) { // Left

        neighbours.push(grid[cellId - 1] === 1);

        if ((cellId - 1) - rcSize > 0) { // Above Left...
            neighbours.push(grid[(cellId - 1) - rcSize] === 1);
        }

        if ((cellId - 1) + rcSize < gridLength) { // Below Left...
            neighbours.push(grid[(cellId - 1) + rcSize] === 1);
        }

    }

    if (rowIndex + 1 <= rcSize - 1) { // Right

        neighbours.push(grid[cellId + 1] === 1);

        if ((cellId + 1) - rcSize >= 0) { // Above Right...
            neighbours.push(grid[(cellId + 1) - rcSize] === 1);
        }

        if ((cellId + 1) + rcSize < gridLength) { // Below Right...
            neighbours.push(grid[(cellId + 1) + rcSize] === 1);
        }

    }

    // Apply rules...
    let liveNeighbours = neighbours.filter(neighbour => neighbour === true).length;

    // Any live cell with fewer than two live neighbours dies
    if (isCellLive && (liveNeighbours < 2)) {
        return false;
    }

    // Any live cell with two or three live neighbours lives on to the next generation
    if (isCellLive && (liveNeighbours === 2 || liveNeighbours === 3)) {
        return true;
    }

    // Any live cell with more than three live neighbours dies...
    if (isCellLive && liveNeighbours > 3) {
        return false;
    }

    // Any dead cell with exactly three live neighbours becomes a live cell
    if (!isCellLive && liveNeighbours === 3) {
        return true;
    }

    return isCellLive; // Returns current state of cell given no rule for scenario... (i.e. no change...)

};


const play = () => {

    let grid = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,1,1,1,0,
        0,0,0,0,0,
        0,0,0,0,0
    ];

    let newGrid = [];

    grid.forEach((cell, i) => {
        newGrid.push(transition(grid, i)? 1 : 0);
    });

    // console.log(newGrid);
    // [ 0, 0, 0, 0, 0,
    //  0, 0, 1, 0, 0,
    //  0, 0, 1, 0, 0,
    //  0, 0, 1, 0, 0,
    //  0, 0, 0, 0, 0 ]

}

play();

module.exports = {
    transition
}
