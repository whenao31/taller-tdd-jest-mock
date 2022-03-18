import * as app from "./app";
import * as math from "./math";
// Set all module functions to jest.fn
jest.mock("./math.js");
test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

test("calls math.multiply", () => {
    app.doMultiply(3, 1);
    expect(math.multiply).toHaveBeenCalledWith(3, 1);
});

test("calls math.divide", () => {
    app.doDivide(9, 4);
    expect(math.divide).toHaveBeenCalledWith(9, 4);
});