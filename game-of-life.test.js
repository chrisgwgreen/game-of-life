const gameOfLife = require('./index');

test('Any live cell with fewer than two live neighbours dies (5x5)', () => {

    expect(gameOfLife.transition([
        0,0,0,0,0,
        0,0,0,0,0,
        0,1,1,1,0,
        0,0,0,0,0,
        0,0,0,0,0
    ], 11)).toBe(false);

});

test('Any live cell with two or three live neighbours lives on to the next generation (5x5)', () => {

    expect(gameOfLife.transition([
        0,0,0,0,0,
        0,0,0,0,0,
        0,1,1,1,0,
        0,0,0,0,0,
        0,0,0,0,0
    ], 12)).toBe(true);

});

test('Any live cell with more than three live neighbours dies (5x5)', () => {

    expect(gameOfLife.transition([
        0,0,0,0,0,
        0,0,1,1,0,
        0,1,1,1,0,
        0,0,0,0,0,
        0,0,0,0,0
    ], 7)).toBe(false);

});

test('Any dead cell with exactly three live neighbours becomes a live cell (5x5)', () => {

    expect(gameOfLife.transition([
        0,0,0,0,0,
        0,0,0,0,0,
        0,1,1,1,0,
        0,0,0,0,0,
        0,0,0,0,0
    ], 7)).toBe(true);

});

test('Any dead cell with exactly three live neighbours becomes a live cell (6x6)', () => {

    expect(gameOfLife.transition([
        0,0,0,0,0,0,
        0,0,0,0,0,0,
        0,1,1,1,0,0,
        0,0,0,0,0,0,
        0,0,0,1,0,0,
        0,0,0,0,0,0
    ], 21)).toBe(true);

});


test('Any live cell with two or three live neighbours lives on to the next generation (9x9)', () => {

    expect(gameOfLife.transition([
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,0,0,0,
        0,0,0,0,0,0,1,0,0,
        0,0,0,0,0,0,0,1,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,
    ], 33)).toBe(true);

});
