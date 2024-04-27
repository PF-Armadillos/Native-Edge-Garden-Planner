import React, {useState} from "react";
import { Switch, Route } from 'react-router-dom';

const App = () => {

    const [location, setLocation] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
        console.log("Location:", location);
        console.log("Length:", length);
        console.log("Width:", width);
        
    }
    return(
        <div>
            <h1>Welcome to the ShellScape Garden Planner</h1>
            <h2>Complete the form below to get started!</h2>

            <form onSubmit={handleSubmit}>
              <div>
                <label>Location</label>
                <input 
                    type="text" 
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                </input>
              </div>
              <div>
                <label>Length of garden bed (inches)</label>
                <input 
                    type="text" 
                    id="length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                >
                </input>
              </div>
              <div>
                <label>Width of garden bed (inches)</label>
                <input 
                    type="text" 
                    id="width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                >
                </input>
              </div>
              <button type="submit"> Submit</button>
            </form>
        </div>
    )


}

export default App;
