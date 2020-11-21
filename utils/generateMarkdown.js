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
  - [Technologies](#technolo)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Details](#details)
  
  ## Description
  ${data.description}

  ## Link
  ${data.url}

  ## Installation
   ${data.installation}

  ## Technologies
  ${data.technology}
  
  ## Usage
  ${data.usage}


  ## Tests
  ${data.tests}

  ## Contributors
  ${data.contributer}
  `
};

module.exports = generateMarkdown;
