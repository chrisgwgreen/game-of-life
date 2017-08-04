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
        // ctx.canvas.width  = window.innerWidth;
        // ctx.canvas.height = window.innerHeight;

        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0, 0, 100, 100);
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