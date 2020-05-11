// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github license](https://img.shields.io/badge/license-${data.license}-brightgreen.svg)

  ## Description
  ${data.description}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[Credits](#credits)
  *[License](#license)
  *[Tests](#tests)
  *[Contact-Info](#contact-info)
  
  ## Istallation
  The installation process was as follows:
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Credits
  Contributors for this projects are as follows:
  ${data.contribution}

  ## License
  This project used the license: ${data.license}

  ## Tests
  ${data.test}

  ## Contact-Info
  My contact information is:
  Email: ${data.email}
  GitHub username: ${data.github}
`;
}

module.exports = generateMarkdown;
