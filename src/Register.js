

import './App.css';
//do not forget to to import useState. If not imported, each line that uses useState will receive an error -"'useState' is not defined  no-undef".
import {useState} from "react";
//Step 6b. - importing Axios below
import Axios from 'axios';

//note that the body of the default syntax was deleted within the function App() { , everything after "<div className="App">"
function Register() {
  //(Step 2f. below) Create state for each input
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState(0); // note that useState is the initial states, therefore "" = emtpry string & "0" is initially 0 in input
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  //Step 6c. - creating a function to addUser (for when the input fields are entered)
  const addUser = () => { //this function is added into the onClick in the Submit button below.
    Axios.post("http://localhost:3001/create", {  //Axios allows us to make a HTTP request.  Create is the endpoint we have in 5c (server side). 
      name:name,  //These are objects with KEY:VALUE pairs. Left side = back end variable in 5c - req.body.name. Right side = the variable in the front end (above - [name, setName]) in the useState statement.
      city: city,
      position: position,
      experience:experience,
      username:username,
      password:password,   
    }).then (() => {
      console.log("success");
    });
  };


//(Step 2b. below) Created input forms + labels
//(Step 2g. below) Inputs were originally just - "<input type="text"/>" Adding onChange event to input - we are creating an event (event) and passing a function => (event.taget.value) is the value in the "targetted" input box, we then conenct it to setName (example). Do this for the rest of the table

  return (
    <div className="App"> 
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange= {(event) => { //we are creating an event (event) and passing a function =>
          setName(event.target.value); //(event.taget.value) is the value in the "targetted" input box, so the setName is picking up the value and placing it in the "name" variable above.
          }}
          />
        <label>City:</label>
        <input type="text"  onChange= {(event) => { 
          setCity(event.target.value);
          }} 
          />
        <label>Position:</label>
        <input type="text"onChange= {(event) => { 
          setPosition(event.target.value);
          }} 
          />
        <label>Experience:</label>
        <input type="number"onChange= {(event) => { 
          setExperience(event.target.value);
          }} 
          />
          <label>Username:</label>
        <input type="text"onChange= {(event) => { 
          setUserName(event.target.value);
          }} 
          />
          <label>Password:</label>
        <input type="text"onChange= {(event) => { 
          setPassword(event.target.value);
          }} 
          />
          
        <button onClick = {addUser}> Sign me up </button> 
        
      </div>
    </div>
  );
}

export default Register; // pre-existing when react was installed
