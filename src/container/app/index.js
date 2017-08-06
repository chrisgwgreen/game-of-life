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

        let newGrid = GameOfLife.tick(this.props.grid);

        if (JSON.stringify(this.props.grid) !== JSON.stringify(newGrid)) {

            this.props.dispatch(gridActions.setGrid(newGrid));

            if (this.state.isPlaying) {
                setTimeout(this.tick, 400);
            }

        } else {
            this.stop();
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
            <div className='game'>
                <Title title={'Game of Life'} />
                <Controls onGridSizeChange={this.setGridSize} play={this.play} stop={this.stop} clearGrid={this.clearGrid} isPlaying={this.state.isPlaying}/>
                <Grid gridSize={this.props.gridSize} grid={this.props.grid} onGridClick={this.toggleCell} isPlaying={this.state.isPlaying}/>
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
