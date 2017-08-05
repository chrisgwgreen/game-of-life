const setGridSize = (size) => {
    return {
        type: 'SET_GRID_SIZE',
        size
    };
};

const clearGrid = () => {
    return {
        type: 'CLEAR_GRID'
    };
};

const setGrid = (grid) => {
    return {
        type: 'SET_GRID',
        grid
    };
};

const toggleCell = (id) => {
    return {
        type: 'TOGGLE_CELL',
        id
    };
};

module.exports = {
    setGridSize,
    clearGrid,
    setGrid,
    toggleCell
};
