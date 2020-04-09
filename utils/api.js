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
        headers: {'Authorization': 'token  9bf3a9f9dbce95d6b9667423f8d3c641985198fa'}
      }

      axios.get(qURL, config).then(function(res){
        console.log("Res:"+JSON.stringify(res.data));
        return res;
      })
  /*  });  */
  }
};

module.exports = api;
