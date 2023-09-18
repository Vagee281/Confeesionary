import React from "react";

function Card(props){
    function deleted(){
        props.ondelete(props.index)
    }

    return<div className="notes">
        <h1>{props.title}</h1>
        <p>{props.para}</p>
        <button onClick={deleted}>DELETE</button>
    </div>

}

export default Card;