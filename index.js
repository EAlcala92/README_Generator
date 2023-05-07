// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installations did you use?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what is the usage?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'who contributed?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'what licenses did you use?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //writes the data to the file
    fs.writeFile(fileName, data, (err) => {
        //checks for an error
        if(err){
            //if an error occurred, this message appears with the error
            console.log('uh oh! there was a mistake: '+ err);
        }else
            //if there was no error, a message will appear noting the success
            console.log('Your README file was created!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then((answers) => {
        //writes the users answers to the questions array to the file
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    })
    //if there was an error, this is to catch it
    .catch((error) => {
        console.log('uh oh! there was a mistake: '+ error);
    })
}

// Function call to initialize app
init();
