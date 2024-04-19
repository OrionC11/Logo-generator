const fs = require("fs");
const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shape");

// Below we create the Logo Class to generate our svg later
class Logo {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${this.shapeElement}
    ${this.textElement}</svg>`;
  }
  addTextElement(text, color) {
    this.textElement = `<text x="150"  y= "125" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  addShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

// This sets the questions for the inquirer prompt

const questions = [
  {
    type: "input",
    message: "Enter Up to 3 Characters of Text.",
    name: "text",
  },
  {
    type: "input",
    message: "Enter a Color for the text.",
    name: "text-color",
  },
  {
    type: "input",
    message: "Enter a Color for the Shape.",
    name: "shape-color",
  },
  {
    type: "list",
    message: "Select a Shape.",
    name: "shape",
    choices: ["Square", "Circle", "Triangle"],
  },
];

// this actually writes the information to a new file called "logo.svg"
function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]");
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Logo.svg successfully Created");
  });
}

// Here we initialize the function which will run to actually generate our logo.
async function generatelogo() {
  var logoString = "";
  var logoFile = "logo.svg";

  const answers = await inquirer.prompt(questions);

  // this block of code below is used to check that the user entered 3 or less characters for the logo text
  var userText = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    userText = answers.text;
  } else {
    console.log(
      "Invalid user text field detected! Please enter 1-3 Characters, no more and no less"
    );
    return;
  }
  // The block of code that follows sets all of the inquirer responses to variables to be used when generating the logo
  console.log("User text: " + userText);
  userFontColor = answers["text-color"];
  console.log("User font color: " + userFontColor);
  userShapeColor = answers["shape-color"];
  console.log("User shape color: " + userShapeColor);
  userShapeType = answers.shape;
  console.log("User chosen shape: " + userShapeType);

  // This actually initialize the shape that is picked and logs if an incorrect shape is somehow picked
  let userShape;
  if (userShapeType === "Square" || userShapeType === "square") {
    userShape = new Square();
    console.log("User selected Square shape");
  } else if (userShapeType === "Circle" || userShapeType === "circle") {
    userShape = new Circle();
    console.log("User selected Circle shape");
  } else if (userShapeType === "Triangle" || userShapeType === "triangle") {
    userShape = new Triangle();
    console.log("User selected Triangle shape");
  } else {
    console.log("Invalid shape!");
  }
  userShape.shapeColor(userShapeColor);

  //this portion actually generates the logo passing the user choices through the generation
  var logo = new Logo();
  logo.addTextElement(userText, userFontColor);
  logo.addShapeElement(userShape);
  logoString = logo.render();

  console.log("Rendering shape:\n\n" + logoString);

  console.log("Shape generation complete!");
  console.log("Writing shape to file...");
  writeToFile(logoFile, logoString);
}
generatelogo();
