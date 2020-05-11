const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
        {
            type: 'input',
            name: 'github', 
            message: 'Enter your Github Username (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email', 
            message: 'Enter your email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (Required)',
            validate: projecDescInput => {
                if(projecDescInput) {
                    return true;
                } else {
                    console.log('Enter a valid project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide any installation instruction:',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter valid installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter Usage information: (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage details!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter Contribution details: (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please provide contribution details.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message:'Provide Test Instructions: (required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose from the list of licenses:',
            choices: ['MIT', 'BSD', 'GNUGPLv3', 'Apache2.0', 'GNULGPLv3', 'GNUAGPLv3'],
            validate: licenseListInput => {
                if (licenseListInput) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    
];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize questions prompts and gather data
const init = () => {
    return inquirer.prompt(questions);
}

// function call to initialize program
init()
    .then(userData => {
        const answerData = generateReadMe(userData);
        console.log(answerData);
        fs.writeFile('README.md', answerData, err => {
            if (err) throw new Error(err);
            console.log('README created!');
        });
    });
