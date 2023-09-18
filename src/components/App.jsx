import React, { useState } from "react";
import Note from "./Note";
import Title from "./Title";
import Footer from "./Footer";
import Card from "./Card";
import Login from "./Login";
function App()
{
    // function Page() {
    //     if (log === true) {
    //       return (
    //         <div>
    //           <Note onChange={additem} />
    //           {notes.map((item, id) => (
    //             <Card key={id} title={item.fname} para={item.content} index={id} ondelete={remove} />
    //           ))}
    //         </div>
    //       );
    //     } else {
    //       return null; 
    //     }
    //   }
    
    const [notes,setNotes]=useState([{fname:"Emily",content:"I have a crush on my coworker, but I'm too shy to tell them"},
    {fname:"John",content:"I pretend to be a morning person, but I really love sleeping in."},
    {fname:"Ava",content:"I'm addicted to online shopping, and my closet is overflowing with clothes"}]);
    const [log,checklog]=useState(false);
    function additem(confession){

        setNotes((prevValue)=>{
            return [...prevValue,confession];
        })
      console.log(notes);
    }
   
    function remove(id){
        setNotes((prevValue)=>{
            return prevValue.filter((note,index)=>{
                return index!==id;
            })
        })
    }
    
    // function check(password){
    //     if(password==="12345")
    //     {
    //         checklog(true);

    //     }

    // }
  

// return<div>
//     <Title/>
//     <Login loginclick={check}/> 
//       <Page/>
//       {/* <Note onChange={additem} />
//       {notes.map((item, id) => (
//         <Card key={id} title={item.fname} para={item.content} index={id} ondelete={remove} />
//       ))} */}
//     <Footer/>

// </div>

 
// }
//////////////////////////////

    const [loggedIn, setLoggedIn] = useState(false); // State to manage login status
    const [password, setPassword] = useState(''); // State to store entered password
    const correctPassword = '12345'; // Replace with the actual correct password
  
    const handleLogin = () => {
      if (password === correctPassword) {
        // If the entered password is correct, set loggedIn to true
        setLoggedIn(true);
      } else {
        // Display an error message or handle incorrect password
        alert('Incorrect password. Please try again.');
      }
    };
  
    // const handleLogout = () => {
    //   // Handle the logout action if needed
    //   // For example, you can set loggedIn to false
    //   setLoggedIn(false);
    // };
  
    return (
      <div>
       <Title/>
        {loggedIn ? ( // Check if the user is logged in
        <div>
              <Note onChange={additem} />
              {notes.map((item, id) => (
                <Card key={id} title={item.fname} para={item.content} index={id} ondelete={remove} />
              ))}
            </div>
        ) : (
          // Display the login form when not logged in
          <div>
          <form>
            <h1>Login</h1>
            <input type="text" placeholder="What's your name?"/>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            </form>
            
          </div>
        )}
        <Footer/>

      </div>
    );
  }
  

export default App;