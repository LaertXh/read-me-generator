//DEPENDENCIES =============================================================================
const inquirer = require("inquirer");
const fs = require("fs");

//DATA =====================================================================================
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project name?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter the DESCRIPTION or enter nothing to print N/A",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the INSTALLATIONS or enter nothing to print N/A",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the USAGE instructions or enter nothing to print N/A",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter the CONTRIBUTION guidelines or enter nothing to print N/A",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter a TEST instructions or enter nothing to print N/A",
        name: "test"
    },


];
const fileName = "README.md";


//FUNCTIONS ================================================================================
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err):0);
}

// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions).then((response) =>{
        let text = 
`# ${response.title}
        
## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contribution
${response.contribution}

## Test
${response.text}

`
        writeToFile(fileName, text);


    });
    
}

//USER INTERACTIONS ========================================================================

//INITIALIZATIONS =========================================================================
// Function call to initialize app
init();







