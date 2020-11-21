// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  
  ## License
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg "Liscense Badge")
  [License](https://opensource.org/licenses/${data.license})

  ## Table of Contents

  - [Description](#description)
  - [Link](#url)
  - [Installation](#installation)
  - [Technologies](#technologies)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Details](#details)
  
  ## Description
  ${data.description}

  ## Link
  To Access this application, please use this link: ${data.url}

  ## Installation
  ${data.installation}

  ## Technologies
  The technologies I have used in this project are: ${data.technology}
  
  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Contributors
  ${data.contributer}

  ## Contact Me
  Please contact me here for any questions;    
  [GitHub Profile: ${data.username}](https://github.com/${data.username})    
  Email Address: ${data.email}    
  `
};

module.exports = generateMarkdown;
