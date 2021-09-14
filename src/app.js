import React from 'react';
import  { useState } from 'react';
import axios from 'axios'
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
//https://pokeapi.co/api/v2/pokemon
function App() {

  // const [post, setPost] = useState(null);

  

  // Hooks : functional compoenents
  const [stateData, setData] = useState({data: null});
  const [stateReq, setRequestParams] = useState({requestParams: {} });  

 


  function callApi(requestParams) {


   
      axios.get(requestParams.url).then((response) => {
        setData({data:response.data});
        console.log(stateData.data)
      });
    
  
    if (!stateData) return null;
 
  
    setRequestParams({requestParams});
  

  }

  return (
     

      <React.Fragment>
      <Header />
      <div>Request Method: {stateReq.requestParams.method}</div>
      <div>URL: {stateReq.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={stateData.data} />
      <Footer />
    </React.Fragment>
  )
}

export default App;


