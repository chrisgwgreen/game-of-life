const todo = (state, action) => {

    switch (action.type) {

    case 'ADD_TODO':

        return {
            id: action.id,
            text: action.text,
            completed: false
        };

        break;

    case 'TOGGLE_TODO':

        if (state.id !== action.id) {
            return state;
        }

        return {
            id: state.id,
            text: state.text,
            completed: !state.completed
        };

        break;

    }

};

const todos = (state = [], action) => {

    switch (action.type) {

    case 'ADD_TODO':
        return [
            ...state,
            todo(undefined, action)
        ];
        break;
        
    case 'TOGGLE_TODO':

        return state.map(todoItem => todo(todoItem, action));

    default:
        return state;

    }

};

module.exports = todos;
