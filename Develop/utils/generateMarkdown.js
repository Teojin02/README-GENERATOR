// function to generate markdown for README
function generateMarkdown({
  title,
  userName,
  description,
  install,
  usage,
  contributing,
  tests,
  userLicense,
  email,
}) {
  if (userLicense === "MIT") {
    licenseBadge =
      "![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)";
    userLicenseSummary = `MIT License
    
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
} else if (userLicense === "Apache") {
  licenseBadge =
    "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  userLicenseSummary = `Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at ["http://www.apache.org/licenses/LICENSE-2.0"]("http://www.apache.org/licenses/LICENSE-2.0")
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
} else if (userLicense === "GPLv2") {
  licenseBadge =
    "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
  userLicenseSummary = `This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.
    
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
    
You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.`;
}

return `
# ${title}
${licenseBadge}
  
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
  
## Description
${description}
## Installation 
${install}
## Usage
${usage}
## License
Copyright (c) 2020 ${userName}
  
${userLicenseSummary}
## Contributing
${contributing}
## Tests
${tests}
  
## Questions
Please email me at ${email} with any questions about this project.  You can also see more of my work by visiting my GitHub profile at [${userName}](https://github.com{userName}).
`;
}

module.exports = generateMarkdown;
