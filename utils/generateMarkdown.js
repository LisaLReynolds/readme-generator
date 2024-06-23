//  function returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  //if license user input is not "None", return image of licese badge based on chosen license
  if (license !== "None")
    return ` ![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  return ""; // If user input is "None", return an empty string
}

// function that returns the license link
function renderLicenseLink(license) {
  //if license user input is not "None", return code to add license to table of contents
  if (license !== "None") return `- [License](#license)`;
  return ""; // If user input is "None", return an empty string
}

//function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "None")
    return `## License\nThis project is licensed under the ${license} license.`;
  return ""; // If user input is "None", return an empty string
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  - [Contribution Guidelines](#contribution-guidelines)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}

  ## Contribution Guidelines
  ${data.guidelines}

  ## Questions
  If you have any questions you can email me at ${data.email}.
  If you want to see more of my work visit my GitHub page at [${
    data.username
  }](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
