const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

//prompt of questions and returns the mardown file
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please provide the title of your new project.'
        },

        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.'
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
    
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },

        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.'
        },
    
        {
            type: 'list',
            name: 'license',
            message: 'List the license used for this project',
            choices: ['Apache', 'GNU GPL v2.0', 'GNU GPL v3.0', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero', 'Eclipse', 'Mozilla', 'Unlicense',]
        },

        {
            type: 'input',
            name: 'features',
            message: 'If your project has a lot of features, list them here.'
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Tests for application'
        },
        
        {
            type: 'input',
            name: 'github',
            message: 'Provide your GitHub username'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Provide your E-Mail address for addition user questions'
        },
    ])
