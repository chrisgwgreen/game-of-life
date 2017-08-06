// Grid
const React = require('react');
const PropTypes = require('prop-types');

class Grid extends React.Component {

    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
        this.updateGrid = this.updateGrid.bind(this);

        this.state = {
            canvasWidth: 1000
        };
    }

    componentDidMount() {


        const canvasWidth = this.canvas.getBoundingClientRect().width - 2;

        this.ctx = this.canvas.getContext('2d');
        this.ctx.canvas.width  = canvasWidth;
        this.ctx.canvas.height = canvasWidth;
        this.updateGrid();

        this.setState({
            canvasWidth
        });

    }

    click(e) {

        const bounding = this.canvas.getBoundingClientRect();
        const cellSize = this.state.canvasWidth/this.props.gridSize;
        const xIndex = Math.floor((e.clientX - bounding.left) / cellSize);
        const yIndex = Math.floor((e.clientY - bounding.top) / cellSize);
        const gridIndex = xIndex + (yIndex * this.props.gridSize);

        this.props.onGridClick(gridIndex);
    }

    componentDidUpdate() {
        this.updateGrid();
    }

    updateGrid() {
        let canvasWidth = this.state.canvasWidth;
        let gridSize = this.props.gridSize;
        let cellSize = canvasWidth/gridSize;

        for(let i = 0; i < gridSize; i += 1) { // Rows...
            for(let j = 0; j < gridSize; j += 1) { // Coloumns...
                this.ctx.beginPath();
                this.ctx.rect((j * cellSize), (i * cellSize), cellSize, cellSize);
                this.ctx.fillStyle = '#dddddd';
                this.ctx.fill();

                this.ctx.beginPath();
                this.ctx.rect((j * cellSize) + 2, (i * cellSize) + 2, cellSize - 4, cellSize - 4);
                this.ctx.fillStyle = this.props.grid[(i * gridSize) + j] === 1 ? '#2b2b2b': 'white'; //
                this.ctx.fill();
            }
        }
    }

    render() {
        return (
            <div className="grid">
                <canvas className="grid--canvas" ref={canvas => this.canvas = canvas} onClick={this.click}/>
            </div>
        );
    }
}

Grid.propTypes = {
    gridSize: PropTypes.number,
    grid: PropTypes.array,
    onGridClick: PropTypes.func
};

module.exports = Grid;
