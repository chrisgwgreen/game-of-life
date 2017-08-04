const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./container/app');

// Redux...
const Provider = require('react-redux').Provider;
const configureStore = require('./redux-store');
const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
