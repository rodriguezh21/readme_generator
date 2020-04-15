const axios = require('axios');
require('dotenv').config()

// console.log("API Key:"+process.env.API_KEY);


  
  const api = async username => {
      
    var qURL = "https://api.github.com/users/"+username;
    var config = {
      headers: {"Authorization" : process.env.API_KEY}
    }
    
    return await axios.get(qURL, config) 
  
    
  }
  
 
module.exports = api
