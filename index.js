

const express = require('express');
// allowing any pc to talk to your server ( don't wanna do that in real production)
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const app = express();
// after npm install cors in the server side , use below to allow front and backend services to talk to each others; ****** import but not effective way to do that ******

app.use(cors());

//  made a end point 

app.get('/user-data',(req, res)=>{
 

  const user ={
  
   name : 'Jim Bob',
   email: 'jimhebob@gmail.com'
 }
  res.send(user);
});

// mad a end point above;


app.get('/', (req, res)=>{
  res.send('<h1>Katy is wonderful HEHEHEHE!!!!!!!</h1>');
})

app.listen(PORT, ()=>{
  console.log('Server running at localhost: ' + PORT);
}).on('error', (err)=>{
  console.log('Server Error:', err.message); 
  console.log('Do you have a server is already running on PORT: '+ PORT);
});