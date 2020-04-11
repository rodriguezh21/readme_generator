const axios = require('axios');
const inquirer = require('inquirer')
require('dotenv').config()

console.log(process.env)


  
  const api = async username => {
    
    // console.log("User: "+username);
    
    /*return axios.get("https://api.github.com/users/"+username).then(function(res) {
      console.log(res.data);*/
    
    var qURL = "https://api.github.com/users/"+username;
    var config = {
      headers: {"Authorization" : process.env.API_KEY}
    }
    
    return await axios.get(qURL, config) 
  }
  
  /*  });  */
  


module.exports = api
