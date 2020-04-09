const api = require("./utils/api");
const fs = require("fs")


const questions = [
{
    type: "input",
    message: "What is your Project Title?",
    name: "title"

},
{
  type: "input",
  message: "What is your Project Description?",
  name: "description"
  
},
{
  type: "input",
  message: "Table of Contents",
  name: "contents"
  
},
{
  type: "input",
  message: "How to install?",
  name: "installation"
  
},
{
  type: "input",
  message: "How is your project used?",
  name: "usage"
  
},
{
  type: "input",
  message: "What licenses does your project have?",
  name: "licenses"
  
},
{
  type: "input",
  message: "Who contributed to this project?",
  name: "contributors"
  
},
{
  type: "input",
  message: "How did you perform tests on this APP?",
  name: "tests"
  
},
{
  type: "input",
  message: "Any questions or comments about your project?",
  name: "questions"
  
}
];

function writeToFile(fileName, data) {
fs.writeFile("log.txt", process.argv[2], function(err){
  if (err) {
    return console.log(err);
  }

  console.log("Success!");
})
};


function init() {
  console.log("API Data: "+JSON.stringify(api));
}

init();
