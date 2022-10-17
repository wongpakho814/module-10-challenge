const inquirer = require("inquirer");
const fs = require("fs");
const generateContent = require("./lib/generateHTML.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const fileName = "./dist/index.html";
var peopleList = [];

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

// An array of questions for the intern's information for user input
const internQuestions = [
  "What is the intern's name?",
  "What is the intern's employee ID?",
  "What is the intern's email address?",
  "What is the intern's school name?",
];

// Function to initiate the HTML file, and write the manager data to it
async function addManager() {
  await inquirer
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
      const manager = new Manager(
        data.managerName,
        data.managerID,
        data.managerEmail,
        data.managerOfficeNum
      );
      peopleList.push(manager); // Add the manager to the list of people in the company
    });
}

// Function to write the HTML file according to the peopleList given
function writeToHTML() {
  fs.writeFile(fileName, generateContent.generateHTML(peopleList), (err) =>
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
  await addManager();
  while (isFinished === false) {
    await showMenu().then((respond) => {
      if (respond.members === "engineer") {
        return new Promise((resolve, reject) => {
          inquirer
            .prompt([
              {
                type: "input",
                name: "engineerName",
                message: engineerQuestions[0],
              },
              {
                type: "input",
                name: "engineerID",
                message: engineerQuestions[1],
              },
              {
                type: "input",
                name: "engineerEmail",
                message: engineerQuestions[2],
              },
              {
                type: "input",
                name: "engineerGitHub",
                message: engineerQuestions[3],
              },
            ])
            .then((data) => {
              const engineer = new Engineer(
                data.engineerName,
                data.engineerID,
                data.engineerEmail,
                data.engineerGitHub
              );
              peopleList.push(engineer); // Add the engineer to the peopleList
              resolve(data);
            });
        });
      } else if (respond.members === "intern") {
        return new Promise((resolve, reject) => {
          inquirer
            .prompt([
              {
                type: "input",
                name: "internName",
                message: internQuestions[0],
              },
              {
                type: "input",
                name: "internID",
                message: internQuestions[1],
              },
              {
                type: "input",
                name: "internEmail",
                message: internQuestions[2],
              },
              {
                type: "input",
                name: "internSchool",
                message: internQuestions[3],
              },
            ])
            .then((data) => {
              const intern = new Intern(
                data.internName,
                data.internID,
                data.internEmail,
                data.internSchool
              );
              peopleList.push(intern); // Add the intern to the peopleList
              resolve(data);
            });
        });
      } else {
        isFinished = true;
        writeToHTML();
      }
    });
  }
}

// Function call to initialize app
init();
