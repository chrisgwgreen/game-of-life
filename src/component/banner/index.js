const React = require('react');
const PropTypes = require('prop-types');

const Banner = props => {

    return (
        <div className='banner'>
            <h1 className='banner--title'>
                Game of Life
            </h1>
            <span className='banner--description'>
                This app demonstrates a possible implementation of John Horton Conway's <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" rel="noopener noreferrer" target="_blank">Game of life</a>.
            </span>
            <span className='banner--description'>
                To play, select a grid size, click on cells to toggle life/death then press Play to initiate the Game of Life.
            </span>
        </div>
    );

};

module.exports = Banner;
