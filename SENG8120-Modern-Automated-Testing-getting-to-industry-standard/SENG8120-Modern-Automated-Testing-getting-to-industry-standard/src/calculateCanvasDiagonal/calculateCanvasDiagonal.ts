export default function calculateCanvasDiagonal(length: string, width: string): number {
  const lengthNum = parseFloat(length);
  const widthNum = parseFloat(width);

  if (isNaN(lengthNum) || isNaN(widthNum)) {
    return NaN;
  }

  return Math.sqrt(lengthNum ** 2 + widthNum ** 2);
}
