//const api = require("./utils/api");
const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("../utils/generateMarkdown");


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
  message: "Any questions or comments about the future development of your project?",
  name: "questions"
  
}
];



/*const questions = JSON.stringify(questions, null, 2);

function writeToFile("questions.json", questions).then(function()  {
console.log("Successfully wrote to questions.json file");
});*/


function init() {
  // console.log("API Data: "+JSON.stringify(api));
  inquirer.prompt(questions).then(function(res){
    console.log("Res: "+JSON.stringify(res));
    generateMarkdown(res);
    fs.writeFile("test.txt",generateMarkdown(res),function(err,data){
      console.log(data);
    })
  })
}

init();
