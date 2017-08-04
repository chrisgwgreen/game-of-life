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

        ctx.beginPath();
        ctx.rect(0, 0, 500, 500);
        ctx.fillStyle = '#606c76';
        ctx.fill();

        ctx.beginPath();
        ctx.rect(2, 2, 496, 496);
        ctx.fillStyle = '#2b2b2b';
        ctx.fill();

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