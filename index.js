// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please provide the title",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide description of project",
  },
  {
    type: "input",
    name: "install",
    message: "Please provide instructions for installation",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions",
  },
  {
    type: "input",
    name: "testing",
    message: "Please provide testing instructions",
  },
  {
    type: "input",
    name: "guidelines",
    message: "Please provide contribution guidelines",
  },
  {
    type: "input",
    name: "username",
    message: "Please provide your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email",
  },
  {
    type: "list",
    name: "license",
    message: "Please provide the license",
    choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "None"],
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README.md", generateMarkdown(data), (err) => {
      if (err) console.log(err);
      else console.log("Your file was created successfully!");
    });
  });
}

// Function call to initialize app
init();
