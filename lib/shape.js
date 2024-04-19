class Shape {
  constructor() {
    this.color = "";
  }
  shapeColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  render() {
    console.log("Rendering a square with color " + this.color);
    return `<rect x="50" rx="100" ry="100" height="200" width="200" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    console.log("Rendering a circle with color " + this.color);
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    console.log("Rendering a triangle with color " + this.color);
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`;
  }
}

module.exports = { Square, Circle, Triangle };
