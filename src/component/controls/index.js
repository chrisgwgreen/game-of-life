// controls
const React = require('react');
const PropTypes = require('prop-types');

class Controls extends React.Component {

    constructor(props) {

        super(props);

        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.clear = this.clear.bind(this);
        this.gridChange = this.gridChange.bind(this);

    }

    play() {
        this.props.play();
    }

    stop() {
        this.props.stop();
    }

    clear() {
        this.props.clearGrid();
    }

    gridChange(e) {
        this.props.onGridSizeChange(e.target.value);
    }

    render() {

        const listItems = [];

        for (let i = 4; i <= 20; i += 1) {
            listItems.push(<option key={i.toString()} value={i}>{i.toString()}</option>);
        }

        return (
            <div>
                <select onChange={this.gridChange}>
                    {listItems}
                </select>
                <button className='todo-list--add' onClick={this.play}>Play</button>
                <button className='todo-list--add' onClick={this.stop}>Stop</button>
                <button className='todo-list--add' onClick={this.clear}>Clear</button>
            </div>
        );
    }

}

Controls.propTypes = {
    onGridSizeChange: PropTypes.func,
    clearGrid: PropTypes.func,
    play: PropTypes.func,
    stop: PropTypes.func
};

module.exports = Controls;
