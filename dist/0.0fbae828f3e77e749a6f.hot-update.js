webpackHotUpdate(0,{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Link.react.js
const React = __webpack_require__(14);
// const PropTypes = require('prop-types');

class Grid extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const ctx = this.canvas.getContext('2d');

        ctx.canvas.width = 500;
        ctx.canvas.height = 500;

        let canvasWidth = 500;
        let gridSize = 5;
        let cellSize = canvasWidth / gridSize;

        for (let i = 0; i < gridSize; i += 1) {
            // Rows...


            for (let j = 0; j < gridSize; j += 1) {
                // Coloumns...

                ctx.beginPath();
                ctx.rect(j * cellSize, j * cellSize, cellSize, cellSize);
                ctx.fillStyle = '#606c76';
                ctx.fill();
            }
        }

        // ctx.beginPath();
        // ctx.rect(2, 2, 496, 496);
        // ctx.fillStyle = 'white';
        // ctx.fill();

        //#2b2b2b
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement('canvas', { ref: canvas => this.canvas = canvas, id: 'grid' })
        );
    }

}

// Link.propTypes = {
//     page: PropTypes.string
// };

module.exports = Grid;

/***/ })

})