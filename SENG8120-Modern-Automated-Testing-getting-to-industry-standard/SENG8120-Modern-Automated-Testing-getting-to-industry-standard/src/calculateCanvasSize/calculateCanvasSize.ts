export default function calculateCanvasSize(length: string, width: string): number {
  const lengthNum = parseFloat(length);
  const widthNum = parseFloat(width);

  if (isNaN(lengthNum) || isNaN(widthNum)) {
    return NaN;
  }

  return lengthNum * widthNum;
}
