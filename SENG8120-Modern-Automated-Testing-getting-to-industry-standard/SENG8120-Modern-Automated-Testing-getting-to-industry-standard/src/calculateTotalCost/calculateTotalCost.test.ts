import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

   test('should handle special characters by returning NaN', () => {
    expect(calculateTotalCost('@#$%' as any, 50)).toBeNaN();
    expect(calculateTotalCost(100, '!&*(' as any)).toBeNaN();
    expect(calculateTotalCost('@#$%' as any, '!&*(' as any)).toBeNaN();
  });

  test('should return paint cost when labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost when paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('should handle negative values correctly', () => {
    expect(calculateTotalCost(-100, 50)).toBe(-50);
    expect(calculateTotalCost(100, -50)).toBe(50);
    expect(calculateTotalCost(-100, -50)).toBe(-150);
  });

  test('should handle non-numeric inputs by returning NaN', () => {
    expect(calculateTotalCost('a' as any, 50)).toBeNaN();
    expect(calculateTotalCost(100, 'b' as any)).toBeNaN();
    expect(calculateTotalCost('a' as any, 'b' as any)).toBeNaN();
  });

  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });
});
