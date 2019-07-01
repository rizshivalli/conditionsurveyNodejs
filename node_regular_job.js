var Request = require('request');
var minutes = 1, the_interval = minutes * 60 * 1000;
setInterval(function() {
  console.log("I am doing my 5 minutes check");
  // do your stuff here

  Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3333/SurveyJsonFiles/Example"
  
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});


 // console.log("count")
}, the_interval);