# SENG8120 Modern Automated Testing 

Version: Alpaca

## Purpose

This repository houses the code we require for examples and assignments.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```
## Project Structure

- **calculateCanvasDiagonal**: Contains functions and tests for calculating the diagonal of a canvas.
- **calculateCanvasPerimeter**: Contains functions and tests for calculating the perimeter of a canvas.
- **calculateCanvasSize**: Contains functions and tests for calculating the area of a canvas.
- **calculatePaintCost**: Contains functions and tests for calculating the cost of paint.
- **calculateTotalCost**: Contains functions and tests for calculating the total cost.
- **convertAreaToSquareFeet**: Contains functions and tests for converting area to square feet.
- **estimatePaintingTime**: Contains functions and tests for estimating painting time.
- **paintRequiredCalculator**: Contains functions and tests for calculating the required paint.
- **paintRequiredForMultipleCoats**: Contains functions and tests for calculating the paint required for multiple coats.

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

