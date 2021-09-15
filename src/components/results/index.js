import React from 'react'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';


//https://pokeapi.co/api/v2/pokemon




function Results(props) {
  return (
    <div>
       <section>

        <pre  data-testid="data"> </pre> 
        {props.data &&
        <>
                     "Headers" :

        <JSONPretty id="json-pretty" data={props.data.headers} />
        "Count" :
        <JSONPretty id="json-pretty" data={props.data.count} />
        "Results" :
         <JSONPretty id="json-pretty" data={props.data.results} />  </> }  
         
      
    
        


      </section>
    </div>
  )
}



export default Results

