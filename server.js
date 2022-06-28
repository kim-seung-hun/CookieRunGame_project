const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('server start')  
})

app.get('/', function (req,res) {
    res.sendFile(__dirname + "/login/loginPage/login.html")
})