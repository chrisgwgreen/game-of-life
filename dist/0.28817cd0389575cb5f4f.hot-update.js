webpackHotUpdate(0,{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Grid
const React = __webpack_require__(14);
const PropTypes = __webpack_require__(25);

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

        ctx.canvas.width = this.state.canvasWidth;
        ctx.canvas.height = this.state.canvasWidth;

        let canvasWidth = this.state.canvasWidth;
        let gridSize = this.props.gridSize;
        let cellSize = canvasWidth / gridSize;

        for (let i = 0; i < gridSize; i += 1) {
            // Rows...

            for (let j = 0; j < gridSize; j += 1) {
                // Coloumns...

                ctx.beginPath();
                ctx.rect(j * cellSize, i * cellSize, cellSize, cellSize);
                ctx.fillStyle = '#606c76';
                ctx.fill();

                ctx.beginPath();
                ctx.rect(j * cellSize + 2, i * cellSize + 2, cellSize - 4, cellSize - 4);
                ctx.fillStyle = this.props.grid[i * gridSize + j] === 1 ? '#2b2b2b' : 'white'; //
                ctx.fill();
            }
        }
    }

    click(e) {

        const bounding = this.canvas.getBoundingClientRect();

        console.log(e.clientX - bounding.left, e.clientY - bounding.top);
    }

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement('canvas', { ref: canvas => this.canvas = canvas, id: 'grid', onClick: this.click })
        );
    }

}

Grid.propTypes = {
    gridSize: PropTypes.number,
    grid: PropTypes.array
};

module.exports = Grid;

/***/ })

})