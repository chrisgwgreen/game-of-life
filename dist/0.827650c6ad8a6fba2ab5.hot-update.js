webpackHotUpdate(0,{

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// Link.react.js
const React = __webpack_require__(14);
// const PropTypes = require('prop-types');

class Controls extends React.Component {

    constructor(props) {
        super(props);
    }

    play() {}

    render() {

        const listItems = [];

        for (let i = 4; i < 30; i += 1) {
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