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

    render() {

        return React.createElement(
            "div",
            null,
            React.createElement(
                "select",
                null,
                React.createElement(
                    "option",
                    { value: "volvo" },
                    "Volvo"
                ),
                React.createElement(
                    "option",
                    { value: "saab" },
                    "Saab"
                ),
                React.createElement(
                    "option",
                    { value: "opel" },
                    "Opel"
                ),
                React.createElement(
                    "option",
                    { value: "audi" },
                    "Audi"
                )
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