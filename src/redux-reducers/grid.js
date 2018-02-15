const initialState = {
    gridSize: 10,
    grid: [
        0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,1,0,1,0,0,0,
        0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,1,0,1,0,0,0,
        0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,1,0,0,0,0
    ]
};

const grid = (state = initialState, action) => {

    let newState;

    switch (action.type) {

    case 'SET_GRID_SIZE':

        newState = {
            gridSize: action.size,
            grid: Array(action.size * action.size).fill(0)
        };

        return newState;

        break;

    case 'CLEAR_GRID':

        return Object.assign({}, state, {
            grid: Array(state.gridSize * state.gridSize).fill(0)
        });

        break;

    case 'SET_GRID':

        return Object.assign({}, state, {
            grid: action.grid
        });

        break;

    case 'TOGGLE_CELL':

        newState = Object.assign({}, state);
        newState.grid[action.id] = state.grid[action.id] === 1? 0: 1;;

        return newState;

        break;

    default:
        return state;

    }

};

module.exports = grid;
