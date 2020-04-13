const api = require("./utils/api");
const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


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
  
},
{
  type: "input",
  message: "What is your github user name?",
  name: "username"
} 
];



async function init() {
  
  let response = await inquirer.prompt(questions)
  let apiRes = await api(response.username)
    console.log(apiRes.data)
    
    fs.writeFile("log.md",generateMarkdown(response, apiRes.data),function(err,data){
      
    })
}

init();
