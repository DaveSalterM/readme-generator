// Function for license link and corresponding badge
function renderLicenseBadge(license) {
  if (license === 'Apache License'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 
  else if (license === 'GNU GPL v2.0 License'){
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } 
  else if (license === 'GNU GPL v3.0 License'){
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } 
  else if (license === 'MIT License'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } 
  else if (license === 'BSD 2-Clause License'){
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } 
  else if (license === 'BSD 3-Clause License'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } 
  else if (license === 'Boost Software License'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } 
  else if (license === 'Creative Commons Zero License'){
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } 
  else if (license === 'Eclipse License'){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } 
  else if (license === 'Mozilla License'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0`
  } 
  else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}

// Function for generating README markdown file with user input 
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits 

  ${data.credits}

  ## License

  ${data.license} 

  Click the badge for further information

  ${renderLicenseBadge(data.license)}

  ## Features

  ${data.features}

  ## Tests

  ${data.tests}

  ## Questions
  
  For any further questions, please contact ${data.email}, and visit https://github.com/${data.github} for addition projects
`;
}

module.exports = generateMarkdown;
