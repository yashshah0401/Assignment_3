export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number {
  if (isNaN(paintRequired) || isNaN(costPerLiter)) {
    return NaN;
  }

  return paintRequired * costPerLiter;
}
