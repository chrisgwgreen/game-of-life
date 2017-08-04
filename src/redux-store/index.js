const createStore = require('redux').createStore;
const rootReducer = require('../redux-reducers');

let store = createStore(rootReducer);

const configureStore = (initialState) => {

    const store = createStore(rootReducer, initialState);

    if (module.hot) {

        module.hot.accept('../redux-reducers', () => {
            const nextRootReducer = require('../redux-reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;

};

module.exports = configureStore;
