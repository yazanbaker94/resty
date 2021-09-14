import React from 'react'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
  return (
    <div>
       <section>
       <pre  data-testid="data">{props.data ? <JSONPretty id="json-pretty" data={props.data}></JSONPretty> : null}</pre>
      </section>
    </div>
  )
}

export default Results

