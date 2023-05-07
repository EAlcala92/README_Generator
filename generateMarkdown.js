// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //Checks if there is a license, if there is none, it returns an empty string 
  if (!license) {
    return '';
  }
  //Returns an badge image of the license
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Checks if there is a license, if there is none, it returns an empty string
  if (!license) {
    return '';
  }
  //returns a link to the appropriate license on the Choose a License website
  return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
}
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //checks if license is TRUE, if FALSE returns empty string
  if (!license) {
    return '';
  }
  //returns license section of README
  return `## License
  
  This project is licensed under the ${license} license`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  
  If you have any questions about this project, please contact me at ${data.email}. You can find more of my work on GitHub at [${data.username}](https://github.com/${data.username}/).
  `;
  }
  

module.exports = generateMarkdown;
