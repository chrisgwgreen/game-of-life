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
        // var ctx = (a canvas context);


        const ctx = this.canvas.getContext('2d');

        ctx.canvas.width = 500;
        ctx.canvas.height = 500;

        ctx.beginPath();
        ctx.rect(0, 0, 500, 500);
        ctx.fillStyle = 'red';
        ctx.fill();
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