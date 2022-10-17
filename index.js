const inquirer = require('inquirer');
const fs = require('fs');
const generateContent = require('./utils/generateMTML.js');
const fileName = "index.html";

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's title?",
    "Description of the project (e.g. What was your motivation? What problem does it solve?): ",
    "What are the steps required to install your project?",
    "The instructions and examples for use: ",
    "Please list the collaborators here: ",
    "Please provide examples on how to run the tests, if any: ",
    "What is your GitHub username?",
    "What is your email address for contact use?",
    "Please choose the license used in this project, if any: ",
];

// TODO: Create a function to write README file    
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateContent.generateHTML(data), (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: questions[0],
            },
            {
                type: "input",
                name: "description",
                message: questions[1],
            },
            {
                type: "input",
                name: "installation",
                message: questions[2],
            },
            {
                type: "input",
                name: "usage",
                message: questions[3],
            },
            {
                type: "input",
                name: "credits",
                message: questions[4],
            },
            {
                type: "input",
                name: "tests",
                message: questions[5],
            },
            {
                type: "input",
                name: "username",
                message: questions[6],
            },
            {
                type: "input",
                name: "email",
                message: questions[7],
            },
            {
                type: "list",
                name: "license",
                message: questions[8],
                choices: [
                    "none",
                    "apache-2.0", 
                    "bsl-1.0",
                    "bsd-3-clause", 
                    "bsd-2-clause", 
                    "cc0-1.0", 
                    "cc-by-4.0", 
                    "cc-by-sa-4.0",
                    "epl-1.0",
                    "gpl-3.0",
                    "gpl-2.0",
                    "agpl-3.0",
                    "isc",
                    "mit",
                    "mpl-2.0",
                    "ofl-1.1",
                    "unlicense",
                    "zlib"
                ],
            },
        ])
        .then((data) => {
            writeToFile(fileName, data);
        });
}

// Function call to initialize app
init();
