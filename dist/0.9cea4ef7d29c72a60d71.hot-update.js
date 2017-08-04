webpackHotUpdate(0,{

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(14);
const PropTypes = __webpack_require__(25);

// Components...
const Title = __webpack_require__(202);
const Grid = __webpack_require__(204);
const Controls = __webpack_require__(239);

// Redux...
const connect = __webpack_require__(88).connect;
const todoActions = __webpack_require__(231);

class App extends React.Component {

    constructor() {
        super();

        // this.addTodo = this.addTodo.bind(this);
        // this.toggleTodo = this.toggleTodo.bind(this);

        this.state = {
            todoIndex: 0
        };
    }
    componentDidMount() {}

    shouldComponentUpdate(nextState, nextProps) {
        return true;
    }

    // addTodo() {
    //     this.props.dispatch(todoActions.addTodo(this.textInput.value, this.state.todoIndex));
    //
    //     this.setState({
    //         todoIndex: this.state.todoIndex + 1
    //     });
    // }
    //
    // toggleTodo(id) {
    //     this.props.dispatch(todoActions.toggleTodo(id));
    // }

    onGridSizeChange() {}
    onGridClick() {}

    render() {
        return React.createElement(
            'div',
            { className: 'todo-list' },
            React.createElement(Title, { title: 'Todo List' }),
            React.createElement(Controls, { onGridSizeChange: this.onGridSizeChange }),
            React.createElement(Grid, { gridSize: this.props.gridSize, onGridClick: this.onGridClick })
        );
    }
}

App.propTypes = {
    todos: PropTypes.array,
    dispatch: PropTypes.func
};

// Redux mapping...
const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    };
};

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);

module.exports = AppConnect;

/***/ }),

/***/ 203:
false

})