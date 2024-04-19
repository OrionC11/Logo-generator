const { Circle, Square, Triangle } = require("../lib/shape");

describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square();
    var color = "green";
    shape.shapeColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" rx="100" ry="100" height="200" width="200" fill="${color}" />`
    );
  });
});

describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    var color = "blue";
    shape.shapeColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />`
    );
  });
});

describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    var color = "pink";
    shape.shapeColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}" />`
    );
  });
});
