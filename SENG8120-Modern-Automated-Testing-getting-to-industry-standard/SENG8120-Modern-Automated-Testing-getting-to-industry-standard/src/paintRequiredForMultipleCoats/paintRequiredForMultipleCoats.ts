export default function paintRequiredForMultipleCoats(area: number, coveragePerLiter: number, coats: number): number {
  if (isNaN(area) || isNaN(coveragePerLiter) || isNaN(coats)) {
    return NaN;
  }

  return (area / coveragePerLiter) * coats;
}
