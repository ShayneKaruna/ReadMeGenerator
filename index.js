// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input

const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project.',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for your project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the main usage of your project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter your credits',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Enter the license of your project None, MIT, BSL, Apache',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter the contributing guidline for your project.',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Enter the tests instruction of your project.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email'
    }

];

// Function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Success")
        }
        
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};


// Function call to initialize app
init();