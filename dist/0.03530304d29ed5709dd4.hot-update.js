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
        let gridSize = 18;
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
                ctx.fillStyle = 'white'; //#2b2b2b
                ctx.fill();
            }
        }
    }

    click(e) {
        console.log('Hello', e);
    }

    render() {

        const click = e => {
            console.log(e);
        };

        return React.createElement(
            'div',
            null,
            React.createElement('canvas', { ref: canvas => this.canvas = canvas, id: 'grid', onClick: this.click })
        );
    }

}

// Link.propTypes = {
//     page: PropTypes.string
// };

module.exports = Grid;

/***/ })

})