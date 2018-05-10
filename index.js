const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res)=>{
  res.send('<h1>App is working!</h1>');
})

app.listen(PORT, ()=>{
  console.log('Server running at localhost: ' + PORT);
}).on('error', (err)=>{
  console.log('Server Error:', err.message); 
  console.log('Do you have a server is already running on PORT: '+ PORT);
});