//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = () =>
    inquirer.prompt([
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
            choices: [
                "ISC",
                "MIT",
                "GPL",
                "Apache",
                "GNU",
                "N/A"]
        },
        {
            type: "input",
            message: "What command is used to run a test?",
            name: "tests",
        },
        {
            type: "input",
            message: "Please list the contributers, including yourself.",
            name: "contributer"
        }
    ]);

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
    })
}

// function to initialize program
async function init() {
    try {
        const response = await questions();
        generateMarkdown(response);
        writeToFile("readme.md", generateMarkdown(response));
    } catch (err) {
        console.log(err);
    }
};

// function call to initialize program
init();
