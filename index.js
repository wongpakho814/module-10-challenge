const inquirer = require("inquirer");
const fs = require("fs");
const generateContent = require("./lib/generateHTML.js");
const Manager = require("./lib/manager.js");
const fileName = "./dist/index.html";

// An array of questions for the team manager's information for user input
const managerQuestions = [
  "What is the team manager's name?",
  "What is the team manager's employee ID?",
  "What is the team manager's email address?",
  "What is the team manager's office number?",
  "Please pick an option to add an engineer, or an intern, or to finish building your team: ",
];

// An array of questions for the engineer's information for user input
const engineerQuestions = [
  "What is the engineer's name?",
  "What is the engineer's employee ID?",
  "What is the engineer's email address?",
  "What is the engineer's GitHub username?",
];

// Function to initiate the HTML file, and write the manager data to it
function writeManagerToFile(fileName, manager) {
  fs.writeFile(fileName, generateContent.generateHTML(manager), (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

// Function that acts as the menu for user to add more engineer/intern until the finish option is chosen
const showMenu = () => {
  return inquirer.prompt({
    type: "list",
    name: "members",
    message: managerQuestions[4],
    choices: ["engineer", "intern", "finish"],
  });
};

// Function to initialize app
async function init() {
  let isFinished = false;
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: managerQuestions[0],
      },
      {
        type: "input",
        name: "managerID",
        message: managerQuestions[1],
      },
      {
        type: "input",
        name: "managerEmail",
        message: managerQuestions[2],
      },
      {
        type: "input",
        name: "managerOfficeNum",
        message: managerQuestions[3],
      },
    ])
    .then((data) => {
      const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNum);
      writeManagerToFile(fileName, manager);
    });
    // .then(({ members }) => {
    //   if (members === "engineer") {
    //     inquirer
    //       .prompt([
    //         {
    //           type: "input",
    //           name: "engineerName",
    //           message: engineerQuestions[0],
    //         },
    //         {
    //           type: "input",
    //           name: "engineerID",
    //           message: engineerQuestions[1],
    //         },
    //         {
    //           type: "input",
    //           name: "engineerEmail",
    //           message: engineerQuestions[2],
    //         },
    //         {
    //           type: "input",
    //           name: "engineerGitHub",
    //           message: engineerQuestions[3],
    //         },
    //         {
    //           type: "list",
    //           name: "members",
    //           message: engineerQuestions[4],
    //           choices: ["engineer", "intern", "finish"],
    //         },
    //       ])
    //       .then({});
    //   }
    // });
}

// Function call to initialize app
init();
