//npm package dependecy 
const fs = require("fs");


//data files for generation of readme
const userPrompts = require("./utils/userPrompts");
const generateMarkdown = require ("./utils/generateMarkdown");



// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName",
      },
      {
        type: "input",
        message: "Enter the name of your GitHub repository for this project?",
        name: "repo",
      },
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
      },
      {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "install",
      },
      {
        type: "input",
        message: "Please provide instructions and examples for use.",
        name: "usage",
      },
      {
        type: "list",
        message:
          "Please choose the type of license you would like for your project:",
        choices: ["MIT", "Apache", "GPLv2"],
        name: "userLicense",
      },
      {
        type: "input",
        message:
          "Please provide guidelines for how other developers can contribute to your project.",
        name: "contributing",
      },
      {
        type: "input",
        message:
          "Please provide examples of tests to run in your application, and instructions on how to run them.",
        name: "tests",
      },
      {
        type: "input",
        message:
          "Please provide your email address to be contacted about questions regarding your app.",
        name: "email",
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + "date", ".md" , function (err){
        if (err) {
        }
        console.log ("Done");
    });
}

// function to initialize program
function init() {
let data =  userPrompts();
let md = generateMarkdown (data);
writeToFile ("README-Test", md);
}

// function call to initialize program
init();
