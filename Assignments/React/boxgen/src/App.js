import './App.css';
import { useState } from 'react'
import ColorPicker from './components/ColorPicker';
import Box from './components/Box';


function App() {
  // State variable.. Since there will be multiple box you set the default
  // with an array.  
  const [boxes, setBoxes] = useState([])


  // This functions gets called on (and collects data) when you click on the form inside the 
  //ColorPicker component.  You want to be sure you pass in the event on the color (variable).
  //
  const handleSubmit = (e, newBox) => {
    // Since we added width and height we want to create an object that holds
    // all the vairable to pass through
    e.preventDefault();
    // const newBox = {
    //   "color": color,
    //   "width": width,
    //   "height": height
    // }
    // Below you call on setBox which creates the new box. Since you are collecting an array
    // of info you want to use the spread operrator to make a copy of the exitencing
    // array.
    setBoxes([...boxes, newBox])
  }

  return (
    <div className="App">
      {/* Through  the ColorPicker component import below you are through props you are 
        passing in the handleSubmit function, which gives you access in the ColorPicker 
        componnent. */}
      <ColorPicker handleSubmit={handleSubmit} />

      {/* Using map you are able to show all the boxes that will be created via your
        form.  */}
      <div style={{ display: 'flex' }}>
        {
          boxes.map((box, i) => {
            return <Box key={i} box={box} />
          })
        }
      </div>
    </div>
  );
}

export default App;
