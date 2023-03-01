//DEPENDENCIES =============================================================================
const inquirer = require("inquirer");
const fs = require("fs");

//DATA =====================================================================================
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project name?",
        name: "name"
    },
    {
        type: "input",
        message: "Enter a DESCRIPTION line or enter nothing to continue to the next section",
        name: "description"
    },
    {
        type: "input",
        message: "Enter a INSTALLATION INSTRUCTION line or enter nothing to continue to the next section",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter a USAGE INSTRUCTION line or enter nothing to continue to the next section",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter a CONTRIBUTION GUIDELINE or enter nothing to continue to the next section",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter a TEST INSTRUCTION or enter nothing to continue to the next section",
        name: "test"
    },
    

];


//FUNCTIONS ================================================================================
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

//USER INTERACTIONS ========================================================================

//INITIALIZATIONS =========================================================================
// Function call to initialize app
init();







