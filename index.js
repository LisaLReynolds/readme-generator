//packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown"); //this is the js file where the data that is input will be used to generate the readme

const inquirer = require("inquirer");
const fs = require("fs");

//array of questions for user input // Array of objects // array is special object in js
//the answers to these questions will be the data that will be used to fill in the readme
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please provide the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide description of project:",
  },
  {
    type: "input",
    name: "install",
    message: "Please provide instructions for installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide testing instructions:",
  },
  {
    type: "input",
    name: "guidelines",
    message: "Please provide contribution guidelines:",
  },
  {
    type: "input",
    name: "username",
    message: "Please provide your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email:",
  },
  {
    type: "list",
    name: "license",
    message: "Please provide the license:",
    choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "None"],
  },
];

//function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    //"README.md" is the name of the file, generateMarkdown is the content
    fs.writeFile("README.md", generateMarkdown(data), (err) => {
      if (err) console.log(err);
      else console.log("Your file was created successfully!");
    });
  });
}

// Function call to initialize app
init();
