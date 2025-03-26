export default function estimatePaintingTime(area: number, paintingSpeed: number): number {
  if (isNaN(area) || isNaN(paintingSpeed)) {
    return NaN;
  }

  return area / paintingSpeed;
}
