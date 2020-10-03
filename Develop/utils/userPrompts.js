// prompt user for info to be generated in README
const inquirer = require("inquirer");

function userPrompts() {
  return inquirer.prompt([
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
  ]);
  //
}

module.exports = userPrompts;