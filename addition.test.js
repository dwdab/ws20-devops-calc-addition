const addition = require('./addition');

describe('check operator', () => {
  it('operator should be +', () => {
    expect(addition.operator).toBe('+');
  });
});

describe('check function', () => {

  it('2+3 should be 5', () => {
    // Arrange
    const x = 2;
    const y = 3;

    // Act
    const result = addition.fn(x, y);

    // Assert
    expect(result).toBe(5);
  });

  it('-2+3 should be 1', () => {
    // Arrange
    const x = -2;
    const y = 3;

    // Act
    const result = addition.fn(x, y);

    // Assert
    expect(result).toBe(1);
  });

});
