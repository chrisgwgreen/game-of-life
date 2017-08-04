// Grid
const React = require('react');
const PropTypes = require('prop-types');

class Grid extends React.Component {

    constructor(props) {
        super(props);

        this.click = this.click.bind(this);

        this.state = {
            canvasWidth: 500
        };
    }

    componentDidMount() {

        const ctx = this.canvas.getContext('2d');

        ctx.canvas.width  = this.state.canvasWidth;
        ctx.canvas.height = this.state.canvasWidth;

        let canvasWidth = this.state.canvasWidth;
        let gridSize = this.props.gridSize;
        let cellSize = canvasWidth/gridSize;

        for(let i = 0; i < gridSize; i += 1) { // Rows...

            for(let j = 0; j < gridSize; j += 1) { // Coloumns...

                ctx.beginPath();
                ctx.rect((j * cellSize), (i * cellSize), cellSize, cellSize);
                ctx.fillStyle = '#606c76';
                ctx.fill();

                ctx.beginPath();
                ctx.rect((j * cellSize) + 2, (i * cellSize) + 2, cellSize - 4, cellSize - 4);
                ctx.fillStyle = this.props.grid[(i * gridSize) + j] === 1 ? '#2b2b2b': 'white'; //
                ctx.fill();

            }

        }

    }

    click(e) {

        const bounding = this.canvas.getBoundingClientRect();
        let cellSize = this.state.canvasWidth/this.props.gridSize;

        const xIndex = Math.floor((e.clientX - bounding.left) / cellSize);
        const yIndex = Math.floor((e.clientY - bounding.top) / cellSize);

        const gridIndex = xIndex + (yIndex * this.props.gridSize);

        this.props.onGridClick(gridIndex);

    }

    render() {

        return (
            <div>
                <canvas ref={canvas => this.canvas = canvas} id="grid" onClick={this.click}/>
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
