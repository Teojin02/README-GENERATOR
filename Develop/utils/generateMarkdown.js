// function to generate markdown for README
function generateMarkdown({
  email, 
  title,
  userLicense,
  description,
  install,
  test,
  usage,
  contributing,
  userName,
}) {
  if (userLicense === "MIT") {
    licenseBadge = 
    "![License: MIT] "
  }
}
module.exports = generateMarkdown;
