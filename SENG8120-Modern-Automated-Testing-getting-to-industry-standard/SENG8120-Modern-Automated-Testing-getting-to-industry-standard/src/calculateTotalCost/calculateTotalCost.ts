export default function calculateTotalCost(paintCost: number, laborCost: number): number {
  if (isNaN(paintCost) || isNaN(laborCost)) {
    return NaN;
  }

  return paintCost + laborCost;
}
