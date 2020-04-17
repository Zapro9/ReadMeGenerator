const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please give a project description."
    },
    {
        type: "input",
        name: "table",
        message: "Please provide table of contents."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how this will be used."  
    },
    {
        type: "input",
        name: "licenses",
        message: "Please provide all license and copyright information."
    },
    {
        type: "input",
        name: "credits",
        message: "Please provide acknowledgements here."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide all test"
    }
]);
}

function generateReadMe(answers) {
    return `
        **Project title:** ${answers.title}
        *Description:* ${answers.description}
        Table of Contents: ${answers.table}
        Installation: ${answers.installation}
        Usage: ${answers.usage}
        License: ${answers.licenses}
        Contributing: ${answers.credits}
        Tests: ${answers.test}
    `
}

promptUser()
  .then(function(answers) {
    const html = generateReadMe(answers);

    return writeFileAsync("readme.md", html);
  });
