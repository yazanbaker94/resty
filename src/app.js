import React from 'react';
import  { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App() {
  // Hooks : functional compoenents
  const [stateData, setData] = useState({data: null});
  const [stateReq, setRequestParams] = useState({requestParams: {} });

  function callApi(requestParams) {
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData({data});
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


