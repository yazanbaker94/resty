import React from 'react'
import './form.scss';
import  { useState } from 'react';

//https://pokeapi.co/api/v2/pokemon
function Form(props) {

  const [stateURL, setURL] = useState({url: ""});
  const [request, setRequest] = useState("");
  const [stateMethod, setMethod] = useState({method: ""});
  const [textArea, setTextArea] = useState(false);



  const inputHandler = (e) => {
    console.log(e.target.value)
    setURL(e.target.value);
}






    function handleSubmit(e) {
      e.preventDefault();
      const formData = {
        method: stateMethod,
        url: stateURL,
        request
      };
      props.handleApiCall(formData);
       
    }


    const handleRequest = (e) => {
      let data = JSON.parse(e.target.value);
      setRequest(data);
    };


    
  const handleGet = (e) => {
    setMethod("get");
    setTextArea(false);
  };
  

   
    
  



  return (
 
       <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={inputHandler}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods" >
            <span id="get" onClick={handleGet}>GET</span>
            <span id="post" >POST</span>
            <span id="put" >PUT</span>
            <span id="delete"  >DELETE</span>
          </label>
          {textArea && (
          <textarea rows="15" cols="35" onChange={handleRequest}></textarea>
        )}
        </form>
      </>

  )
}

export default Form






