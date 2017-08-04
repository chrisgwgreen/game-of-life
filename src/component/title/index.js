const React = require('react');
const PropTypes = require('prop-types');

class Title extends React.Component {

    componentDidMount() {
        console.log('Title Mounted');
    }
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

Title.propTypes = {
    title: PropTypes.string
};

module.exports = Title;
