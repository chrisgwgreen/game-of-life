const React = require('react');
const PropTypes = require('prop-types');

// Components...
const Title = require('../../component/title');
const Grid = require('../../component/grid');
const Controls = require('../../component/controls');

// Redux...
const connect = require('react-redux').connect;
const todoActions = require('../../redux-actions/todo');

class App extends React.Component {

    constructor() {
        super();

        this.toggleCell = this.toggleCell.bind(this);
        // this.toggleTodo = this.toggleTodo.bind(this);

        this.state = {
            todoIndex: 0
        };
    }
    componentDidMount() {

    }

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

    onGridSizeChange() {

    }
    toggleCell(id) {

        console.log(id);

    }

    render() {
        return (
            <div className='todo-list'>
                <Title title={'Todo List'} />
                <Controls onGridSizeChange={this.onGridSizeChange}/>
                <Grid gridSize={8} grid={[0,0,1,0,0,1,0,0,0,1,0,0]} onGridClick={this.toggleCell}/>
            </div>
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

const AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


module.exports = AppConnect;
