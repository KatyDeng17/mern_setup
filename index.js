// import { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } from 'constants';
// above is the vscode added for me. remove it for error.

const express = require('express');
// allowing any pc to talk to your server ( don't wanna do that in real production)
const cors = require('cors');
// set up server to handle react project ;
const { resolve } = require('path'); 


const PORT = process.env.PORT || 8000;
const app = express();
// after npm install cors in the server side , use below to allow front and backend services to talk to each others; ****** import but not effective way to do that ******

app.use(cors());
// app.use(express.urlencoded({extended: false })); don't need this for post data;


app.use(express.static(resolve(__dirname,'client','dist'))); 


// ***********************************************************************************//

// add the below code for post request data; 
// using post request step 4; 
app.use(express.json());
//  made a end point 
//*********** getting data from server using post **********/
// using post request step 1; 
app.post('/api/send-data',(req, res)=>{
  //posting the data on the terminal; 
  console.log("Data sent: ", req.body); 
  // testing for sending data back to the front end 
  res.send({success: true, mirror:req.body});
});
//*********** getting data from server using get **********/

app.get('/api/user-data',(req, res)=>{
  const user ={
   name : 'Jim Bob',
   email: 'jimhebob@gmail.com'
 }
  res.send(user);
});

//10 step 
app.get('/api/get-article', (req, res)=>{
  const article = {
    title: 'Some Awesome Article',
    author: 'Katy', 
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste cumque obcaecati ad culpa nesciunt necessitatibus tempore. Perferendis magnam laudantium error mollitia. Repellendus earum veritatis ipsa. Blanditiis sit culpa voluptates distinctio.'
  }
  res.send(article);

});

// mad a end point above;


// app.get('/', (req, res)=>{
//   res.send('<h1>Katy is wonderful HEHEHEHE!!!!!!!</h1>');
// })

app.get('*',(req, res)=>{
  res.sendFile(resolve(__dirname, 'client','dist','index.html'));
}); 

// ************************getting data from server using get*******************//

app.listen(PORT, ()=>{
  console.log('Server running at localhost: ' + PORT);
}).on('error', (err)=>{
  console.log('Server Error:', err.message); 
  console.log('Do you have a server is already running on PORT: '+ PORT);
});