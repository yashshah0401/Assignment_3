import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10);
    expect(calculateCanvasDiagonal('5', '12')).toBeCloseTo(13);
  });

  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal('0', '0')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('3', '-4')). toBeCloseTo(5);
    expect(calculateCanvasDiagonal('-3', '-4')).toBeCloseTo(5);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('a', 'b')).toBeNaN();
  });

  test('should handle regex values by returning NaN', () => {
    expect(calculateCanvasDiagonal('/[a-z]/', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', '/[0-9]/')).toBeNaN();
    expect(calculateCanvasDiagonal('/[a-z]/', '/[0-9]/')).toBeNaN();
  });

  test('should handle utf16 characters by returning NaN', () => {
    expect(calculateCanvasDiagonal('\uD83D\uDE00', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', '\uD83D\uDE00')).toBeNaN();
    expect(calculateCanvasDiagonal('\uD83D\uDE00', '\uD83D\uDE00')).toBeNaN();
  });
});
