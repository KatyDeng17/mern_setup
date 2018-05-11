import React, {Component} from 'react'; 
import axios from 'axios';
class Test extends Component {
  componentDidMount(){
    this.getUserData();
    this.getArticle();
    // using post request step 3; 
    this.sendData();
  }

// using post request step 2; 
async sendData(){
  const dataToSend = {
     something: "here is something",
     anotherThing: "Here is another thing",
     stuff: "waht is all this then?"
  }
  const response = await axios.post('/api/send-data', dataToSend);
  console.log('Send Data: ', response)
}
// ***************
async getArticle(){
  const response = await axios.get('/api/get-article'); 
  console.log('Article Data:', response);

}
  async getUserData(){
    // const response = await axios.get('http://localhost:8000/user-data');
    const response = await axios.get('/api/user-data');


    console.log('user Data Response: ', response);
  }
  render (){
    return <h1> test Component </h1>
  }


}
export default Test; 