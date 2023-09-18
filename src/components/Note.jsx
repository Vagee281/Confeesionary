import React,{useState} from "react";

function Note(props)
{    
    const [confession,setConfession]=useState({
        fname:"",
        content:""
    });
    function Changed(event)
    {
        const temp=event.target.value;
        const name=event.target.name;
        setConfession((prevValue)=>{
            return{
                ...prevValue,
                [name]:temp
            }
        }) 


    }
   
    function clicked(event)
    {
        props.onChange(confession);
        setConfession({
            fname:"",
            content:""
        })
         
      event.preventDefault();

    }

    return <div>
        <form onSubmit={clicked}>
            <input type="text" onChange={Changed} placeholder="enter your name" name="fname"/>
            <textarea name="content" onChange={Changed} placeholder="write your confession" rows="4"/>
            <button type="submit" onClick={clicked}>post</button>

        </form>
     </div>

}

export default Note;