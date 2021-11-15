const inquirer = require('inquirer');
const fs = require('fs');

let javascriptBadge = '![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)\n';
let cssBadge = '![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)\n';
let htmlBadge = '![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)\n';
let jqueryBadge = '![JQuery](	https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)\n';

let fileName;

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'userName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'appName',
            message: 'What is the name of your application?'
        },
        {
            type: 'input',
            name: 'appDescription',
            message: 'Describe the application.'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'How do you use your application'
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'How to install your application'
        },
        {
            type: 'input',
            name: 'imagePath',
            message: 'What is the path to your applications image? (ex ./images/imagename.png'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages are used in this project?',
            choices: ['HTML', 'CSS', 'Javascript', 'JQuery']
        }
    ])
    .then((answers) => {
        fileName = "readme-" + answers.appName + '.md';
        fileData =
            //tags will go here.
            '# ' + answers.appName + '\n'
            + '## Table of Contents' + '\n'
            + "* [Description](#Description) \n"
            + "* [How to use](#usage) \n"
            + "* [Installing](#Installing) \n"
            + "* [Contributing](#contribution) \n"
            + '## Description \n'
            + answers.appDescription + '\n'
            + '![' + answers.appName + '](' + answers.imagePath + ')\n'
            + "## usage \n"
            + answers.instructions + '\n'
            + "## Questions \n"
            + "## Contributers \n"
            + answers.userName + "\n"

            ;
        fs.writeFile(fileName, fileData, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            console.log(answers);
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });