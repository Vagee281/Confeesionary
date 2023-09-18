import React,{useState} from "react";

function Login(props){
    const [password,setPassword]=useState();
    function pass(event){
        setPassword(event.target.value);

    }


    function clicked(event){
       
        props.loginclick(password);
        event.preventDefault();

    }
    return <form>
        <input type="text" placeholder="enter your name"/>
        <input type="password" onChange={pass} placeholder="enter your password"/>
        <button type="submit" onClick={clicked}>Done</button>
    </form>

}

export default Login;