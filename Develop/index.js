const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: "input",
    message: "Please provide a GITHUB Username",
    name: "UserName"
  },
  {
    type: "input",
    message: "Please provide you eamil address to be contacted about questions regarding your app.",
    name: "Useremail"
  },
  {
    type: "input",
    message: "Please provide the name of your project",
    name: "Userproject"
  },
  {
    type: "input",
    message: "Please enter the name of your GitHub respository for this project?",
    name: "Userrepo"
  },
  {
    type: "input",
    message: "Please provide description of your project",
    name: "UserDescription"
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "Licence",
    choices: [
        "MIT", 
        "GPLv3", 
        "Apache",
        "BSD 3"
      ] 
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "InstallDep"
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "UserTest"
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "Contribute"
  }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
        console.log("Successful");
      });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function({
      UserName, 
      Useremail, 
      Userproject,
      Userrepo, 
      UserDescription, 
      Licence, 
      InstallDep, 
      UserTest, 
      Contribute}) {
        if (
        UserName !== "" && 
        Useremail !== "" && 
        Userproject !=="" &&
        Userrepo !=="" && 
        UserDescription !=="" && 
        Licence !=="" && 
        InstallDep !=="" && 
        UserTest !=="" &&
        Contribute !=="") {
         ;

            writeToFile("README.md", generateMarkdown({
              UserName, 
              Useremail, 
              Userproject,
              Userrepo, 
              UserDescription, 
              Licence, 
              InstallDep, 
              UserTest, 
              Contribute}));
        }
        else {
            console.log("Please enter all information");
            init();
        }
    })
}

// function call to initialize program
init();