function generateMarkdown(data) {
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
`;
}

module.exports = generateMarkdown;
