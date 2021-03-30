const express = require("express")

const app = express()


app.get('/', (request, response) => {
    console.log('Request Received') 
    // response.send('Welcome');
    response.json({msg: 'Welcome'});
  })

app.listen(3333, () => {
    console.log("server is listening");
})