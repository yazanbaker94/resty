import React from 'react';
import  { useState, useEffect, useReducer  } from 'react';
import axios from 'axios'
import './app.scss';
import History from '../src/components/History'
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";





//https://pokeapi.co/api/v2/pokemon


const initialState =  [];


function historyReducer(history = initialState, action) {
  console.log("action......", action)
  console.log("state =", history)
  const {type, payload} = action;
  switch(type) {
      case 'ADD_HISTORY':
           history = [...history, payload];
          // return the new state
          return history;
      // case 'EMPTY_PEOPLE':
      //     return state;
      default:
          return history;
  }
}


function addHistory (url, method, result) {
  console.log("inside addHistory, url : ", url);
  return {
      type: 'ADD_HISTORY',
      payload: {
        url,
        method,
        result
      }
  }
}




function App() {

  // const [post, setPost] = useState(null);
  const [history, dispatch] = useReducer(historyReducer, initialState);


  // Hooks : functional compoenents
  const [stateData, setData] = useState({data: null});
  const [requestParams, setRequestParams] = useState({});
  const [load, setLoad] = useState(false);


  const [body, setBody] = useState({});

  useEffect( () => {
    setData(null);
    async function fetchData() {
    if (body) {
      const result = await axios[requestParams.method](requestParams.url, JSON.parse(body));
      const data = { headers: result.headers, count: result.data.count, results: result.data.results }
      setData(data);
      dispatch(addHistory(requestParams.url,requestParams.method,data));
    

    } else {
      const result = await axios[requestParams.method](requestParams.url);
      const data = { headers: result.headers, count: result.data.count, results: result.data.results }
      setData(data);
      dispatch(addHistory(requestParams.url,requestParams.method,data));

 
    }}
    fetchData()
  }, [requestParams,body]);
  
 

  

  async function callApi(requestParams, body) {

      setRequestParams(requestParams);
      setBody(body);
      setLoad(true)
  
  }
  

  function historyFunction(result) {
    setData(result);
   
  }

 
  return (
    

      <React.Fragment>
      <Header />
      
   
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi}  />
     
      {history && <History historyFunction={historyFunction} history={history} />}

      {load &&  <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />}
       <Results data={stateData} />
      <Footer />
    </React.Fragment>
  )
}

export default App;


