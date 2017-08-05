const combineReducers = require('redux').combineReducers;
const grid = require('./grid');

const todoApp = combineReducers({
    grid
});

module.exports = todoApp;
