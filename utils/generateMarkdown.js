function generateMarkdown( data, userData) {
  return `
# ${data.title}

## ${data.description}

 ${data.contents}
==============================================================================================

* ${data.installation}

* ${data.usage}

* ${data.licenses}

* ${data.contributors}

* ${data.tests}

* ${data.questions}

* ${userData.avatar_url}

* ${userData.email}
`;
}

module.exports = generateMarkdown;
