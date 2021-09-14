import React from 'react'
import './form.scss';
import  { useState } from 'react';

//https://pokeapi.co/api/v2/pokemon
function Form(props) {

  const [stateURL, setURL] = useState({url: ""});
  const [stateMethod, setMethod] = useState({method: ""});


  const inputHandler = (e) => {
    console.log(e.target.value)
    setURL(e.target.value);
}

const methodHandler = (e) => {
  e.preventDefault();

  console.log(e.target.id)
  setMethod(e.target.id);
}




    function handleSubmit(e) {
      e.preventDefault();
      const formData = {
        method: stateMethod,
        url: stateURL,
      };
      props.handleApiCall(formData);
       
    }
  

   
    
  



  return (
 
       <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={inputHandler}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods" >
            <span id="get" onClick={methodHandler}>GET</span>
            <span id="post" onClick={methodHandler}>POST</span>
            <span id="put" onClick={methodHandler}>PUT</span>
            <span id="delete" onClick={methodHandler} >DELETE</span>
          </label>
        </form>
      </>

  )
}

export default Form






