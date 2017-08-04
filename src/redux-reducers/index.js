const combineReducers = require('redux').combineReducers;
const todos = require('./todos');

const todoApp = combineReducers({
    todos
});

module.exports = todoApp;
