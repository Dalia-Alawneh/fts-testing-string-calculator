const calc = require('./../calculator');

describe('Calculator', () => {
  // Test case: Addition
  it('should return the correct sum of two numbers', () => {
    expect(calc(2, '+', 3)).toBe(5);
  });

  // Test case: Subtraction
  it('should return the correct difference of two numbers', () => {
    expect(calc(5, '-', 2)).toBe(3);
  });

  // Test case: Multiplication
  it('should return the correct product of two numbers', () => {
    expect(calc(4, '*', 6)).toBe(24);
  });

  // Test case: Division
  it('should return the correct quotient of two numbers', () => {
    expect(calc(10, '/', 2)).toBe(5);
  });

  // Test case: Division by zero
  it('should throw an error when dividing by zero', () => {
    expect(() => calc(6, '/', 0)).toThrow('Division by zero');
  });

  it("should throw ar error when dividing by zero for multiple operations", () => {
    expect(() => calc(3, '+', 5, '*', 10, '/', 0)).toThrow('Division by zero');
  })

  // Test case: Negative numbers
  it('should handle negative numbers correctly', () => {
    expect(calc(-8, '+', 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it('should handle decimal numbers correctly', () => {
    expect(calc(3.5, '*', 2)).toBe(7);
  });

  // Test case: Order of operations
  it('should follow the correct order of operations', () => {
    expect(calc(2, '+', 3, '*', 4)).toBe(14);
  });

  it('should follow the correct order of operations with multiple operators', () => {
    expect(calc(2, '+', 3, '-', 40, '/', 10, '%', 2)).toBe(5);
  });

  // Test case: Ignore large numbers
  it('should Ignore large numbers correctly for multiplication', () => {
    expect(calc(1000000, '*', 1000000)).toBe(0);
  });

  it('should ignore large numbers when adding them', () => {
    expect(calc(500, '+', 1001)).toBe(500);
  });

  // Test case: Invalid operator
  it('should throw an error for an invalid operator', () => {
    expect(() => calc(5, '$', 3)).toThrow('Invalid operator');
  });

  // Test case: Invalid input type
  it('should throw an error for invalid input types', () => {
    expect(() => calc('2', '+', 3)).toThrow('Invalid input types');
  });

  it('should throw an error when passing a string as a second operand', () => {
    expect(() => calc(2, '+', '3')).toThrow('Invalid input types');
  });

  it('should throw an error for passing a boolean as an operand', () => {
    expect(() => calc(true, '+', 3)).toThrow('Invalid input types');
  });

  // Test cases: Invalid input format
  it("should throw ar error for invalid input format", () => {
    expect(() => calc(3, 5, '+')).toThrow('Invalid input format');
  })

  it("should throw ar error for invalid input format", () => {
    expect(() => calc(3, true, '/')).toThrow('Invalid input format');
  })

  it("should throw ar error for invalid input format for missing a second operand", () => {
    expect(() => calc(3, '+')).toThrow('Invalid input format');
  })

  it("should throw ar error for invalid input format when passing operator first", () => {
    expect(() => calc('+', '5')).toThrow('Invalid input format');
  })
});