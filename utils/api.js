const axios = require('axios');
const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your github user name?",
      name: "username"
    }    
  ])
  .then(function(response) {
    api.getUser(response.username);
  });

const api = {
  getUser(username) {
    console.log("User: "+username);

   /*return axios.get("https://api.github.com/users/"+username).then(function(res) {
      console.log(res.data);*/

      var qURL = "https://api.github.com/users/"+username;
      var config = {
        headers: {'Authorization': 'token 3f91a260540d94e6b1a6dd15e2db9ed8f5c2d35f'}
      }

      axios.get(qURL, config).then(function(res){
        console.log("Res:"+JSON.stringify(res.data));
        return res;
      })
  /*  });  */
  }
};

module.exports = api;
