import React from 'react';
import  { useState, useEffect } from 'react';
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
  const [body, setBody] = useState("");


  useEffect(() => {
    try {
      async function getData() {
        if (stateReq.url) {
          const response = await axios({
            method: stateReq.method,
            url: stateReq.url,
            data: body,
          });
          setData(response);
          
        }
      }
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [stateReq, body]);

  

  async function callApi(requestParams) {

    if (requestParams.url !== "") {
      setRequestParams(requestParams);
      setBody(requestParams.request);
    } else {
      const response = {
        count: 2,
        results: [
          { name: "fake thing 1", url: "http://fakethings.com/1" },
          { name: "fake thing 2", url: "http://fakethings.com/2" },
        ],
      };
      setData({ response });
      setRequestParams(requestParams);
    }
  }

 
  return (
     

      <React.Fragment>
      <Header />
      <div>Request Method: {stateReq.method}</div>
      <div>URL: {stateReq.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={stateData.data} />
      <Footer />
    </React.Fragment>
  )
}

export default App;


