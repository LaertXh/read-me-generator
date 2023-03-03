//DEPENDENCIES =============================================================================
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

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
        type: "list",
        message: "Choose a license:",
        choices: [
            {
                "name": "N/A",
            },
            {
              "name": "MIT License",

            },
            {
              "name": "GNU Lesser General Public License v3.0"

            },
            {
              "name": "Mozilla Public License 2.0"

            },
            {
              "name": "GNU Affero General Public License v3.0"

            },
            {
              "name": "The Unlicense",
            },
            {
              "name": "Apache License 2.0",
            },
            {
              "name": "GNU General Public License v3.0",
            }
          ],
        name: "license"
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
    }


];

const badge = {
  "MIT License": {
    "id": "MIT",
    "url": "mit",
  },
  "GNU Lesser General Public License v3.0":{
    "id": "LGPL_3.0",
    "url": "lgpl-3.0",
  },
  "Mozilla Public License 2.0": {
    "id": "MPL_2.0",
    "url": "mpl-2.0",
  },
  "GNU Affero General Public License v3.0": {
    "id": "AGPL_3.0",
    "url": "apache-2.0",
  },
  "The Unlicense": {
    "id": "Unlicense",
    "url": "unlicense",
  },
  "Apache License 2.0": {
    "id": "Apache_2.0",
    "url": "apache-2.0",
  },
  "GNU General Public License v3.0": {
    "id": "GPL_3.0",
    "url": "gpl-3.0",
  },
  "N/A": {
    "id": "N/A",
    "url": "N/A",
  }


}
const fileName = "README.md";


//FUNCTIONS ================================================================================
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err):0);
}

// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions).then((response) =>{
      const li = response.license;
      const thisBadge = generateMarkdown.renderLicenseBadge(badge[li].id, badge[li].url);
      let text = 
`# ${response.title}
${thisBadge} 

## Description
${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Badges](#badges)
- [Contribution](#contribution)
- [Tests](#tests)

## Installation
${response.installation}

## Usage
${response.usage}

${generateMarkdown.renderLicenseSection(response.license)}
[${response.license}](${generateMarkdown.renderLicenseLink(badge[response.license].url)})

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







