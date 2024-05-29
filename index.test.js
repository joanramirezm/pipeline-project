const prueba = require('./index');

test('returns "Joan Ramirez Montilla (2021-1850)"', () => {
    expect(prueba()).toBe("Joan Ramirez Montilla (2021-1850)");
});