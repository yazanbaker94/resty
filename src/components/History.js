import React from "react";

function History(props) {
    function viewResults(result) {
        props.historyFunction(result);
    }
    return (
        <div>
            <ul>
                {props.history.map((item, index) => {
                    return (<li key={index} onClick={() => { viewResults(item.result); console.log('hi ', item.result) }}>{item.method} {item.url} </li>)
                })}
            </ul>
        </div>
    )
}

export default History;