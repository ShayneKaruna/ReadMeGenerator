// If there is no license, return an empty string
function renderLicenseBadge(license) {
let badge ='';
  if(license === 'MIT') {
    badge = '(https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'BSL') {
    badge = '(https://img.shields.io/badge/license-BSL-blue)';
  }
  return badge;
}


// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return "https://opensource.org/licenses/Apache-2.0"
    }
    else if (license === "Apache 2.0"){
      return "https://opensource.org/licenses/Apache-2.0"
    }
    else if (license === "BSL" ){
    return "https://opensource.org/licenses/BSL-1.0"
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  } else{
    return '## License'
  }
}

// Template for generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n\n
## Description 
${data.description} \n\n
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contribute](#contribute)
* [Testing](#testing)
* [Questions](#questions) \n\n
## Installation
${data.installation} \n\n
## Usage
${data.usage} \n\n
## Credits
${data.credits} \n\n
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)} ${renderLicenseBadge(data.license)}
## Contribute 
${data.contribute} \n\n
## Testing 
${data.tests} \n\n
## Questions 
Please free to email me at ${data.email} for any questions
check out my Github: https://github.com/${data.username} 
`;
}

module.exports = generateMarkdown;