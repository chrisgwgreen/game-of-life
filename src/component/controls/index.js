// controls
const React = require('react');
const PropTypes = require('prop-types');

class Controls extends React.Component {

    constructor(props) {
        super(props);
    }

    play() {

    }

    stop() {

    }

    clear() {

    }

    render() {

        const listItems = [];

        for (let i = 4; i <= 20; i += 1) {
            listItems.push(<option key={i.toString()} value="volvo">{i.toString()}</option>);
        }

        return (
            <div>
                <select>
                    {listItems}
                </select>
                <button className='todo-list--add' onClick={this.play}>Play</button>
                <button className='todo-list--add' onClick={this.stop}>Stop</button>
                <button className='todo-list--add' onClick={this.clear}>Clear</button>
            </div>
        );
    }

}


// Link.propTypes = {
//     page: PropTypes.string
// };

module.exports = Controls;
