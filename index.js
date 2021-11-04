const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'applicationName',
            message: 'What is the name of your application?'
        },
        {
            type: 'input',
            name: 'applicationDescription',
            message: 'Describe the application.'
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        let fileName = 'readme.md' //answers.applicationName.toLowerCase().split(' ').join('') + '.md';
        let fileData = '# ' + answers.applicationName + '\n' + answers.applicationDescription + '\n ## Image of application \n ![alt="image of application"](./assets/images/myproject.png)';
        console.log(fileName);
        console.log(fileData);
        fs.writeFile(fileName, fileData, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });