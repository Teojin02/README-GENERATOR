//npm package dependecy 
const fs = require("fs");


//data files for generation of readme
const userPrompts = require("./utils/userPrompts");
const generateMarkdown = requre ("./utils?generateMarkdown");



// array of questions for user
const questions = [

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
let data = await userPrompts();
let md = generateMarkdown (data);
writeToFile ("README-Test", md);
}

// function call to initialize program
init();
