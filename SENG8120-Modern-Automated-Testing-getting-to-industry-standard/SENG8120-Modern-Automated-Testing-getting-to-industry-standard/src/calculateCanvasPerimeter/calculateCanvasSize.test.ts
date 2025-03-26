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
});
