//node modules
const inquirer = require("inquirer")
const fs = require("fs")



// array of questions for user
const questions = [
    //User related questions
    {
        type: "input",
        message: "What is your user GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    //Questions for readme
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is the GitHub URL for your project?",
        name: "url"
    },
    {
        type: "input",
        message: "What packages need to be installed to run your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What technologies were used to create your project?",
        name: "technology"
    },
    {
        type: "input",
        message: "Give an example of how your project can be used.",
        name: "usage"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license would you like to have?",
        name: "license",
        choices: ['ISC','MIT', 'GPL', 'Apache', 'GNU', 'none']
    },
    {
        type: "input",
        message: "Please list the contributers, including yourself.",
        name: "contributer"
    },
    {
        type: "input",
        message: "What command is used to run a test?",
        name: "tests",
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
