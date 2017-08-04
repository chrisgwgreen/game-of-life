const addTodo = (text, id) => {
    return {
        type: 'ADD_TODO',
        text,
        id
    };
};

const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

module.exports = {
    addTodo,
    toggleTodo
};
