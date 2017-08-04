webpackHotUpdate(0,{

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(14);
const PropTypes = __webpack_require__(25);

class Controls extends React.Component {

    constructor(props) {
        super(props);
    }

    play() {}

    stop() {}

    clear() {}

    render() {

        const listItems = [];

        for (let i = 4; i <= 20; i += 1) {
            listItems.push(React.createElement(
                'option',
                { key: i.toString(), value: 'volvo' },
                i.toString()
            ));
        }

        return React.createElement(
            'div',
            null,
            React.createElement(
                'select',
                null,
                listItems
            ),
            React.createElement(
                'button',
                { className: 'todo-list--add', onClick: this.play },
                'Play'
            ),
            React.createElement(
                'button',
                { className: 'todo-list--add', onClick: this.stop },
                'Stop'
            ),
            React.createElement(
                'button',
                { className: 'todo-list--add', onClick: this.clear },
                'Clear'
            )
        );
    }

}

// Link.propTypes = {
//     page: PropTypes.string
// };

module.exports = Controls;

/***/ })

})