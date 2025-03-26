import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('returns correct result', () => {
    const result = calculateCanvasSize('10', '100');
    expect(result).toEqual(1000);
  });

  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasSize('0', '0')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculateCanvasSize('-10', '100')).toBe(-1000);
    expect(calculateCanvasSize('10', '-100')).toBe(-1000);
    expect(calculateCanvasSize('-10', '-100')).toBe(1000);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(calculateCanvasSize('a', '100')).toBeNaN();
    expect(calculateCanvasSize('10', 'b')).toBeNaN();
    expect(calculateCanvasSize('a', 'b')).toBeNaN();
  });

test('should handle regex values by returning NaN', () => {
    expect(calculateCanvasSize('/[a-z]/', '100')).toBeNaN();
    expect(calculateCanvasSize('10', '/[0-9]/')).toBeNaN();
    expect(calculateCanvasSize('/[a-z]/', '/[0-9]/')).toBeNaN();
  });

  test('should handle utf16 characters by returning NaN', () => {
    expect(calculateCanvasSize('\uD83D\uDE00', '100')).toBeNaN();
    expect(calculateCanvasSize('10', '\uD83D\uDE00')).toBeNaN();
    expect(calculateCanvasSize('\uD83D\uDE00', '\uD83D\uDE00')).toBeNaN();
  });
});
