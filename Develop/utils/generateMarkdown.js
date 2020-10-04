// function to generate markdown for README
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ![License](https://img.shields.io/github/license/${data.UserName}/${data.Userrepo})
  ## Description
  * ${data.UserDescription}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ## Installation
  To install necessary dependencies, run the following command:
      ${data.InstallDep}
  ## License
  * ${data.Licence}
  ## Contributing
  ${data.Contribute}
  ## Tests
  To eliminate bugs, type the following commend to test application:
      ${data.UserTest}
  ## Questions
  * If you have any questions, feel free to contact me via email: ${data.Useremail}
  * My GitHub profile: https://github.com/${data.UserName}
  
  `
  ;

}

module.exports = generateMarkdown;