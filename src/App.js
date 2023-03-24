
import './App.css';
//do not forget to to import useState. If not important, each line that uses useState will receive and error -"'useState' is not defined  no-undef".
import {useState} from "react";




//note that the body of the default syntax was deleted within the function App() { , everything after "<div className="App">"
function App() {
  //(Step 2f. below) Create state for each input
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState(0); // note that useState is the initial states, therefore "" = emtpry string & "0" is initially 0 in input

//(Step 2b. below) Created input forms + labels
//(Step 2g. below) Inputs were originally just - "<input type="text"/>" Adding onChange event to input - we are creating an event (event) and passing a function => (event.taget.value) is the value in the "targetted" input box, we then conenct it to setName (example). Do this for the rest of the table

  return (
    <div className="App"> 
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange= {(event) => { //we are creating an event (event) and passing a function =>
          setName(event.target.value); //(event.taget.value) is the value in the "targetted" input box, which is connected to setName
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

        <button> Submit</button>
        
      </div>
    </div>
  );
}

export default App; // pre-existing when react was installed
