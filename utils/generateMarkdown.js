// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ## Table of Contents
  - [Description](#description)
  - [Link](#url)
  - [Installation](#installation)
  - [Technologies](#technolo)
  - [Usage](#usage)
  - [License](#license)
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

  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## Contributors
  ${data.contributer}
  `
};

module.exports = generateMarkdown;
