const React = require('react');
const PropTypes = require('prop-types');
const GameOfLife = require('../../engine');

// Components...
const Title = require('../../component/title');
const Grid = require('../../component/grid');
const Controls = require('../../component/controls');

// Redux...
const connect = require('react-redux').connect;
const gridActions = require('../../redux-actions/grid');

class App extends React.Component {

    constructor() {
        super();

        this.toggleCell = this.toggleCell.bind(this);
        this.setGridSize = this.setGridSize.bind(this);
        this.play = this.play.bind(this);
        this.tick = this.tick.bind(this);
        this.stop = this.stop.bind(this);
        this.clearGrid = this.clearGrid.bind(this);

        this.state = {
            todoIndex: 0,
            isPlaying: false
        };
    }

    setGridSize(size) {
        this.props.dispatch(gridActions.setGridSize(parseInt(size)));
    }

    toggleCell(id) {
        this.props.dispatch(gridActions.toggleCell(id));
    }

    play() {
        this.setState({
            isPlaying: true
        }, ()=> {
            this.tick();
        });
    }

    tick() {
        this.props.dispatch(gridActions.setGrid(GameOfLife.tick(this.props.grid)));

        if (this.state.isPlaying) {
            setTimeout(this.tick, 400);
        }
    }

    stop() {
        this.setState({
            isPlaying: false
        });
    }

    clearGrid() {
        this.props.dispatch(gridActions.clearGrid());
    }

    render() {
        return (
            <div className='todo-list'>
                <Title title={'Game of Life'} />
                <Grid gridSize={this.props.gridSize} grid={this.props.grid} onGridClick={this.toggleCell}/>
                <Controls onGridSizeChange={this.setGridSize} play={this.play} stop={this.stop} clearGrid={this.clearGrid} isPlaying={this.state.isPlaying}/>
            </div>
        );
    }
}

App.propTypes = {
    grid: PropTypes.array,
    todos: PropTypes.array,
    gridSize: PropTypes.number,
    dispatch: PropTypes.func
};

// Redux mapping...
const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,
        gridObj: state.grid,
        grid: state.grid.grid,
        gridSize: state.grid.gridSize
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
